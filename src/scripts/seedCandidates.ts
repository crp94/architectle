// `npm run data:seed` — queries Wikidata for candidate buildings/architects
// per region and writes reports/candidates-<region>.csv. This is a research
// aid for the human curators (and Task 9's curator agents) to see what
// exists and what's missing; it is never read by any other script and its
// output is gitignored. Curated data (src/scripts/curated/) is hand-authored
// TS, not generated from this report — see design spec §7.1/§7.2.
import { mkdirSync, writeFileSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { M49 } from '@/lib/m49';

const ENDPOINT = 'https://query.wikidata.org/sparql';

// Wikidata's SPARQL endpoint asks callers to identify themselves in the
// User-Agent (see https://meta.wikimedia.org/wiki/User-Agent_policy). This
// deliberately names only the project, not an individual — a personal email
// address has no reason to be sent to a third-party service.
const USER_AGENT = 'ArchitectleDataSeedBot/1.0 (https://github.com/architectle/architectle; data curation research script, not a production dependency)';

const QUERY_TEMPLATE = `SELECT ?building ?buildingLabel ?architect ?architectLabel ?inception ?countryCode ?coord ?image WHERE {
  ?building wdt:P84 ?architect ; wdt:P18 ?image ; wdt:P571 ?inception ; wdt:P17 ?country .
  ?country wdt:P297 ?countryCode .
  OPTIONAL { ?building wdt:P625 ?coord }
  FILTER(?countryCode IN (%CODES%))
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,it". }
}`;

// The five regions Task 9's curator agents each own (matching
// src/scripts/curated/{architects,buildings}/*.ts). Not the same grouping
// as the four coverage buckets in validators/coverage.ts: Africa and
// Western Asia are split into two reports here so each curator agent's
// report matches the file they're responsible for. Oceania and Central Asia
// have no dedicated curator region and are omitted — a Wikidata research
// aid doesn't need to cover ground nobody is curating yet.
const REGIONS = ['africa', 'americas', 'asia', 'europe', 'westasia'] as const;
type Region = (typeof REGIONS)[number];

function countryCodesFor(region: Region): string[] {
  const codes: string[] = [];
  for (const [code, entry] of Object.entries(M49)) {
    if (region === 'europe' && entry.region === 'Europe') codes.push(code);
    else if (region === 'americas' && entry.region === 'Americas') codes.push(code);
    else if (region === 'africa' && entry.region === 'Africa') codes.push(code);
    else if (region === 'westasia' && entry.subregion === 'Western Asia') codes.push(code);
    else if (region === 'asia' && entry.region === 'Asia' && entry.subregion !== 'Western Asia') codes.push(code);
  }
  return codes.sort();
}

type SparqlValue = { value: string };
type SparqlBinding = Partial<Record<
  'building' | 'buildingLabel' | 'architect' | 'architectLabel' | 'inception' | 'countryCode' | 'coord' | 'image',
  SparqlValue
>>;
type SparqlResponse = { results: { bindings: SparqlBinding[] } };

const CSV_COLUMNS = [
  'building', 'buildingLabel', 'architect', 'architectLabel', 'inception', 'countryCode', 'coord', 'image',
] as const;

function buildQuery(codes: string[]): string {
  const codeList = codes.map((c) => `"${c}"`).join(', ');
  return QUERY_TEMPLATE.replace('%CODES%', codeList);
}

async function fetchRegion(region: Region): Promise<SparqlBinding[]> {
  const codes = countryCodesFor(region);
  const query = buildQuery(codes);
  const url = `${ENDPOINT}?query=${encodeURIComponent(query)}&format=json`;

  const res = await fetch(url, {
    headers: { Accept: 'application/sparql-results+json', 'User-Agent': USER_AGENT },
  });
  if (!res.ok) {
    throw new Error(`Wikidata query for region "${region}" failed: ${res.status} ${res.statusText}`);
  }
  const body = (await res.json()) as SparqlResponse;
  return body.results.bindings;
}

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

function toCsv(bindings: SparqlBinding[]): string {
  const lines = [CSV_COLUMNS.join(',')];
  for (const row of bindings) {
    lines.push(CSV_COLUMNS.map((c) => csvEscape(row[c]?.value ?? '')).join(','));
  }
  return lines.join('\n');
}

async function main(): Promise<void> {
  const reportsDir = path.resolve(process.cwd(), 'reports');
  mkdirSync(reportsDir, { recursive: true });

  let failures = 0;
  for (const region of REGIONS) {
    console.log(`Querying Wikidata for region "${region}"...`);
    try {
      const bindings = await fetchRegion(region);
      const outPath = path.join(reportsDir, `candidates-${region}.csv`);
      writeFileSync(outPath, `${toCsv(bindings)}\n`);
      console.log(`  wrote ${outPath} (${bindings.length} rows)`);
    } catch (err) {
      failures += 1;
      console.error(`  failed: ${(err as Error).message}`);
    }
  }

  if (failures > 0) {
    console.error(`\n${failures}/${REGIONS.length} region quer${failures === 1 ? 'y' : 'ies'} failed.`);
    process.exit(1);
  }
}

// Only run when executed directly (`npm run data:seed`), not when imported.
//
// Compares realpaths, not raw resolved paths — matching buildCuratedPool.ts
// and fetchImages.ts, and for the same reason: every Wave 5 worktree
// reaches node_modules (and tsx) through a symlink, and a naive
// `path.resolve` comparison can disagree with `import.meta.url` across a
// symlink boundary, which would make `npm run data:seed` a silent no-op
// that exits 0 having done nothing.
function isDirectRun(): boolean {
  if (process.argv[1] === undefined) return false;
  try {
    return realpathSync(fileURLToPath(import.meta.url)) === realpathSync(path.resolve(process.argv[1]));
  } catch (err) {
    console.error(`seedCandidates: could not resolve realpath for direct-run check (${(err as Error).message}); treating as not a direct run.`);
    return false;
  }
}

if (isDirectRun()) {
  main().catch((err: unknown) => {
    console.error('seedCandidates failed:', err);
    process.exit(1);
  });
} else if (process.argv[1] !== undefined && path.basename(process.argv[1]) === 'seedCandidates.ts') {
  console.error('seedCandidates: process.argv[1] names this script, but the direct-run identity check did not match — main() was NOT run, no files were written. This usually means a symlink broke the realpath comparison above; investigate before trusting this a no-op is intentional.');
}
