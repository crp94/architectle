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
import type { Building } from '@/types/building';
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
//
// `imageIndex` picks which of a building's images this path is for: 1 (the
// default) is the primary `image` and keeps the original unsuffixed
// filename for backward compatibility with every already-fetched building;
// 2/3 are `extraImages[0]`/`extraImages[1]` (design spec §6), suffixed
// `<slug>-2.avif`/`<slug>-3.avif`.
export function targetPath(slug: string, imageIndex: number = 1): string {
  const suffix = imageIndex === 1 ? '' : `-${imageIndex}`;
  return `${OUTPUT_DIR_REL}/${slug}${suffix}.avif`;
}

export function needsFetch(slug: string, imageIndex: number = 1): boolean {
  return !existsSync(targetPath(slug, imageIndex));
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

// Replaces the (0-based) `n`th occurrence of `search` in `text` with
// `replacement`. Returns `text` unchanged if there is no such occurrence —
// the caller is responsible for distinguishing "not found" from "found and
// replaced" (see the explicit count check in `updateDimensionsInSource`).
function replaceNthOccurrence(text: string, search: string, replacement: string, n: number): string {
  let idx = -1;
  for (let i = 0; i <= n; i += 1) {
    idx = text.indexOf(search, idx + 1);
    if (idx === -1) return text;
  }
  return text.slice(0, idx) + replacement + text.slice(idx + search.length);
}

// Rewrites a single building's `image.width`/`image.height` OR one
// `extraImages[i].width`/`.height` in its curated source file, in place.
// Scoped to that building's own object literal (from its `id: '<slug>',`
// line up to the next building's `  {` in the same file) so the
// replacement can never touch a different building that happens to share
// the literal `width: 0, height: 0` text — every as-yet-unfetched image in
// the pool does.
//
// `occurrenceIndex` picks WHICH placeholder within that block to replace,
// by position: 0 is the primary `image`, 1 is `extraImages[0]`, 2 is
// `extraImages[1]` — this relies on curators writing fields in the same
// order Building's own type declares them (image, then extraImages), which
// is also this project's established authoring convention.
function updateDimensionsInSource(
  slug: string, width: number, height: number, buildingsDir: string, occurrenceIndex: number = 0,
): void {
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

    const occurrenceCount = block.split(placeholder).length - 1;
    if (occurrenceCount <= occurrenceIndex) {
      // Already recorded (idempotent re-run found the AVIF present, so this
      // function is never called for it) or the file's formatting doesn't
      // match what curators actually wrote — surface loudly either way.
      throw new Error(
        `fetchImages: found curated entry for "${slug}" in ${file} but its image block has only `
        + `${occurrenceCount} "width: 0, height: 0" placeholder(s), expected at least ${occurrenceIndex + 1} `
        + `(occurrenceIndex ${occurrenceIndex}) — refusing to guess at a replacement.`,
      );
    }

    const updatedBlock = replaceNthOccurrence(
      block, placeholder, `      width: ${width},\n      height: ${height},\n`, occurrenceIndex,
    );
    const updatedContent = content.slice(0, idIdx) + updatedBlock + content.slice(blockEnd);
    writeFileSync(filePath, updatedContent);
    return;
  }

  throw new Error(`fetchImages: no curated source file under ${buildingsDir} defines building id "${slug}"`);
}

type Failure = { slug: string; commonsFile: string; error: string };

// One fetch/resize/write/dimensions-writeback job for a single image on a
// single building — either the primary `image` (imageIndex 1, occurrenceIndex
// 0) or one `extraImages[i]` entry (imageIndex i+2, occurrenceIndex i+1).
// Design spec §6: extraImages get the exact same idempotent/1-per-sec/
// AVIF-q62 pipeline as the primary, just fetched to a suffixed filename and
// written back to a later placeholder occurrence in the same curated block.
type ImageJob = {
  slug: string;
  label: string; // e.g. "villa-la-rotonda" or "villa-la-rotonda extraImages[0]"
  commonsFile: string;
  imageIndex: number;
  occurrenceIndex: number;
};

function jobsForBuilding(building: Building): ImageJob[] {
  const jobs: ImageJob[] = [{
    slug: building.id,
    label: building.id,
    commonsFile: building.image.commonsFile,
    imageIndex: 1,
    occurrenceIndex: 0,
  }];
  for (const [i, extra] of (building.extraImages ?? []).entries()) {
    jobs.push({
      slug: building.id,
      label: `${building.id} extraImages[${i}]`,
      commonsFile: extra.commonsFile,
      imageIndex: i + 2,
      occurrenceIndex: i + 1,
    });
  }
  return jobs;
}

async function main(): Promise<void> {
  const buildingsDir = path.resolve(process.cwd(), BUILDINGS_DIR_REL);
  const outDir = path.resolve(process.cwd(), OUTPUT_DIR_REL);
  mkdirSync(outDir, { recursive: true });

  const jobs = CURATED_BUILDINGS.flatMap(jobsForBuilding);
  const total = jobs.length;
  const failures: Failure[] = [];
  let done = 0;
  let skipped = 0;

  for (let i = 0; i < total; i += 1) {
    const job = jobs[i];
    const n = i + 1;

    if (!needsFetch(job.slug, job.imageIndex)) {
      skipped += 1;
      console.log(`[${n}/${total}] ${job.label} ... already present, skipped`);
      continue;
    }

    const url = commonsOriginalUrl(job.commonsFile);
    try {
      const original = await fetchOriginal(url);
      const { data, info } = await sharp(original)
        .resize(LONG_EDGE_PX, LONG_EDGE_PX, { fit: 'inside', withoutEnlargement: true })
        .avif({ quality: AVIF_QUALITY })
        .toBuffer({ resolveWithObject: true });

      writeFileSync(path.resolve(process.cwd(), targetPath(job.slug, job.imageIndex)), data);
      updateDimensionsInSource(job.slug, info.width, info.height, buildingsDir, job.occurrenceIndex);
      done += 1;
      console.log(`[${n}/${total}] ${job.label} ... ${info.width}x${info.height} done`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[${n}/${total}] ${job.label} ... FAILED: ${message}`);
      failures.push({ slug: job.label, commonsFile: job.commonsFile, error: message });
    }

    await sleep(RATE_LIMIT_MS);
  }

  console.log(`\n${done} fetched, ${skipped} already present, ${failures.length} failed (of ${total} images across ${CURATED_BUILDINGS.length} buildings).`);

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
