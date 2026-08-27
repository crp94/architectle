// `npm run data:images` — fetches every curated building's Commons original,
// resizes/re-encodes it to an AVIF master under public/buildings/, and
// writes the real width/height back into the curated TS source (replacing
// the `width: 0, height: 0` placeholder Task 9's curators left in place).
// Run BEFORE `npm run data:curate`: this script edits curated/ source, and
// data:curate is what turns that source into the JSON src/lib/pool.ts reads
// — see design spec §7.1/§7.2 and Task 9's DIMENSIONS_RULE
// ('image-dimensions-recorded') in src/scripts/validators/images.ts.
//
// Idempotent by design (`needsFetch` skips any slug whose AVIF already
// exists), so a partial run — Wikimedia rate-limiting, a network blip — can
// always be resumed by re-running the same command.
//
// Ruling 15 (progress.md, 9d): the Commons API `extmetadata` licence field is
// NOT authoritative — curators verified licences by reading the rendered
// file page, not this script. This script only fetches the already-licensed
// original and records its pixel dimensions; it does not re-verify licence.
import {
  mkdirSync, writeFileSync, readFileSync, readdirSync, existsSync, realpathSync,
} from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { CURATED_BUILDINGS } from './curated';

// Wikimedia's User-Agent policy (https://meta.wikimedia.org/wiki/User-Agent_policy)
// asks for a descriptive UA naming the project and its purpose — an
// anonymous/default UA gets rejected or rate-limited harder. Names only the
// project, not an individual, matching the convention already established
// in seedCandidates.ts.
const USER_AGENT = 'Architectle/1.0 (https://github.com/crp94/architectle) '
  + '- educational architecture guessing game image pipeline';

const BUILDINGS_DIR_REL = 'src/scripts/curated/buildings';
const OUTPUT_DIR_REL = 'public/buildings';

const LONG_EDGE_PX = 1600;
const AVIF_QUALITY = 62;
const RATE_LIMIT_MS = 1000;
const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 3000;

// --- Pure helpers (covered by tests/images.test.ts) -----------------------

// PHP's rawurlencode (RFC 3986 percent-encoding: unreserved = A-Z a-z 0-9
// - _ . ~) is what MediaWiki uses to build file paths. JS's
// encodeURIComponent is close but additionally leaves ! * ' ( ) unescaped
// (an older, RFC 2396 "mark" set) — Commons percent-encodes those too (e.g.
// a straight apostrophe becomes %27, parentheses become %28/%29), so
// encodeURIComponent's output needs those four characters escaped by hand
// to match the real upload URLs. Verified against the live Commons
// imageinfo API for several curated filenames — see tests/images.test.ts.
function rawUrlEncode(name: string): string {
  return encodeURIComponent(name).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}

// Commons hosts an original at
// upload.wikimedia.org/wikipedia/commons/<a>/<ab>/<file>, where <a>/<ab> are
// the first 1/2 hex characters of the MD5 hash of the filename with spaces
// replaced by underscores (MediaWiki's standard convention) and the
// leading "File:" namespace prefix stripped.
export function commonsOriginalUrl(commonsFile: string): string {
  const filename = commonsFile.replace(/^File:/, '').replace(/ /g, '_');
  const hash = crypto.createHash('md5').update(filename, 'utf8').digest('hex');
  const a = hash[0];
  const ab = hash.slice(0, 2);
  return `https://upload.wikimedia.org/wikipedia/commons/${a}/${ab}/${rawUrlEncode(filename)}`;
}

// Relative to process.cwd() deliberately (not resolved to an absolute
// path): the real pipeline always runs from the project root via `npm run
// data:images`, and tests exercise this against a temp directory by
// chdir-ing into it rather than by threading a base-dir parameter through
// every call site.
export function targetPath(slug: string): string {
  return `${OUTPUT_DIR_REL}/${slug}.avif`;
}

export function needsFetch(slug: string): boolean {
  return !existsSync(targetPath(slug));
}

// --- Real pipeline ---------------------------------------------------------

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchOriginal(url: string): Promise<Buffer> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }
      const buf = await res.arrayBuffer();
      return Buffer.from(buf);
    } catch (err) {
      lastError = err;
      const message = err instanceof Error ? err.message : String(err);
      console.warn(`    attempt ${attempt}/${MAX_ATTEMPTS} failed (${message})`);
      if (attempt < MAX_ATTEMPTS) {
        await sleep(RETRY_DELAY_MS);
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

// Rewrites a single building's `image.width`/`image.height` in its curated
// source file, in place. Scoped to that building's own object literal (from
// its `id: '<slug>',` line up to the next building's `  {` in the same
// file) so the replacement can never touch a different building that
// happens to share the literal `width: 0, height: 0` text — every
// as-yet-unfetched building in the pool does.
function updateDimensionsInSource(slug: string, width: number, height: number, buildingsDir: string): void {
  const files = readdirSync(buildingsDir).filter((f) => f.endsWith('.ts'));
  const idMarker = `    id: '${slug}',\n`;
  const nextBlockMarker = '\n  {\n    id: \'';
  const placeholder = '      width: 0,\n      height: 0,\n';

  for (const file of files) {
    const filePath = path.join(buildingsDir, file);
    const content = readFileSync(filePath, 'utf8');
    const idIdx = content.indexOf(idMarker);
    if (idIdx === -1) continue;

    const nextIdx = content.indexOf(nextBlockMarker, idIdx + idMarker.length);
    const blockEnd = nextIdx === -1 ? content.length : nextIdx + 1;
    const block = content.slice(idIdx, blockEnd);

    if (!block.includes(placeholder)) {
      // Already recorded (idempotent re-run found the AVIF present, so this
      // function is never called for it) or the file's formatting doesn't
      // match what curators actually wrote — surface loudly either way.
      throw new Error(
        `fetchImages: found curated entry for "${slug}" in ${file} but its image block `
        + 'does not contain the expected "width: 0, height: 0" placeholder — refusing to '
        + 'guess at a replacement.',
      );
    }

    const updatedBlock = block.replace(placeholder, `      width: ${width},\n      height: ${height},\n`);
    const updatedContent = content.slice(0, idIdx) + updatedBlock + content.slice(blockEnd);
    writeFileSync(filePath, updatedContent);
    return;
  }

  throw new Error(`fetchImages: no curated source file under ${buildingsDir} defines building id "${slug}"`);
}

type Failure = { slug: string; commonsFile: string; error: string };

async function main(): Promise<void> {
  const buildingsDir = path.resolve(process.cwd(), BUILDINGS_DIR_REL);
  const outDir = path.resolve(process.cwd(), OUTPUT_DIR_REL);
  mkdirSync(outDir, { recursive: true });

  const total = CURATED_BUILDINGS.length;
  const failures: Failure[] = [];
  let done = 0;
  let skipped = 0;

  for (let i = 0; i < total; i += 1) {
    const building = CURATED_BUILDINGS[i];
    const n = i + 1;

    if (!needsFetch(building.id)) {
      skipped += 1;
      console.log(`[${n}/${total}] ${building.id} ... already present, skipped`);
      continue;
    }

    const url = commonsOriginalUrl(building.image.commonsFile);
    try {
      const original = await fetchOriginal(url);
      const { data, info } = await sharp(original)
        .resize(LONG_EDGE_PX, LONG_EDGE_PX, { fit: 'inside', withoutEnlargement: true })
        .avif({ quality: AVIF_QUALITY })
        .toBuffer({ resolveWithObject: true });

      writeFileSync(path.resolve(process.cwd(), targetPath(building.id)), data);
      updateDimensionsInSource(building.id, info.width, info.height, buildingsDir);
      done += 1;
      console.log(`[${n}/${total}] ${building.id} ... ${info.width}x${info.height} done`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[${n}/${total}] ${building.id} ... FAILED: ${message}`);
      failures.push({ slug: building.id, commonsFile: building.image.commonsFile, error: message });
    }

    await sleep(RATE_LIMIT_MS);
  }

  console.log(`\n${done} fetched, ${skipped} already present, ${failures.length} failed (of ${total}).`);

  if (failures.length > 0) {
    console.error(`\n${failures.length} image(s) failed after ${MAX_ATTEMPTS} attempts each:\n`);
    for (const f of failures) {
      console.error(`  - ${f.slug} (${f.commonsFile}): ${f.error}`);
    }
    process.exitCode = 1;
  }
}

// Only run the CLI when this file is executed directly (`tsx
// fetchImages.ts`, i.e. `npm run data:images`), not when it's imported —
// e.g. by tests/images.test.ts importing the pure helpers — where hitting
// the network and mutating curated/ would be a wildly unwanted side
// effect. Mirrors the identity check in buildCuratedPool.ts (see there for
// why realpath, not a raw resolved-path comparison).
function isDirectRun(): boolean {
  if (process.argv[1] === undefined) return false;
  try {
    return realpathSync(fileURLToPath(import.meta.url)) === realpathSync(path.resolve(process.argv[1]));
  } catch (err) {
    console.error(`fetchImages: could not resolve realpath for direct-run check (${(err as Error).message}); treating as not a direct run.`);
    return false;
  }
}

if (isDirectRun()) {
  main();
}
