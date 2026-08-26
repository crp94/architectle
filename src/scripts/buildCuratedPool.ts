// `npm run data:curate` — the single gate between hand-authored curated
// source (src/scripts/curated/) and the JSON the running game imports
// (src/lib/pool.ts). It does not re-implement validation: every rule lives
// in src/scripts/validators/ (Task 3) and is composed here. Its own job is
// narrower:
//   1. run the validators and report violations in a form Task 9's curator
//      agents can act on directly;
//   2. derive `architect.workRegions` / `architect.workCentroid` from the
//      architect's buildings, so those two fields can never be hand-typed
//      out of sync with the pool that sources them;
//   3. write the two JSON files `src/lib/pool.ts` imports, and print a
//      coverage summary so a curator can see how close to the edge the pool
//      sits before adding the next building.
import { mkdirSync, writeFileSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import { m49For } from '@/lib/m49';
import { centroid } from '@/lib/geo';
import {
  validateSchema, validateCrossRefs, validateImages, validateProvenance, validateCoverage,
  ERA_MIN, GEOGRAPHY_MAX, GEOGRAPHY_MIN, GENDER_MIN, MAX_BUILDINGS_PER_ARCHITECT, CANON_TIER_MIN,
  yearOf, eraOf, geographyBucketOf,
} from './validators';
import type { Violation, Era, GeographyBucket } from './validators';
import { CURATED_BUILDINGS, CURATED_ARCHITECTS } from './curated';

const DIMENSIONS_RULE = 'image-dimensions-recorded';
// M49 spec §4.4: "keep every subregion holding ≥15% of an architect's output."
const WORK_REGION_THRESHOLD = 0.15;
const EPSILON = 1e-9;

// The per-item validators (each violation is about one building or
// architect in isolation) vs. the one pool-global validator (every
// violation is about the shape of the whole pool). `--skip-coverage` runs
// only the former — see `main` below.
const PER_ITEM_VALIDATORS = [validateSchema, validateCrossRefs, validateImages, validateProvenance] as const;

// --- Derivation -----------------------------------------------------------
// The reason this script exists rather than the two fields being hand-typed:
// `workRegions` and `workCentroid` are *sourced* facts about an architect's
// built work, not curatorial judgement, so nothing upstream of this function
// is allowed to set them — whatever a curated source file supplies for these
// two fields is discarded and recomputed here, every run.
//
// Ruling A: `workRegions` MUST be UN M49 *subregion* strings, verbatim
// (e.g. "South-eastern Asia"), because `compareRegion` (Task 6) matches
// against exactly that vocabulary via `REGION_OF_SUBREGION`. A region-level
// name ("Asia"), free text, or a country name here would make every EXACT
// and REGION match silently collapse to NONE for every real architect.
export type ArchitectGeography = { workRegions: string[]; workCentroid: { lat: number; lon: number } };

export function deriveArchitectGeography(architectId: string, buildings: Building[]): ArchitectGeography {
  const own = buildings.filter((b) => b.architectId === architectId);
  if (own.length === 0) {
    // Every architect referenced by no building is already a hard failure
    // (`architect-orphan`, Task 3) that exits the process before this runs.
    // Guarded anyway so this function never divides by zero in isolation
    // (e.g. under direct unit test).
    return { workRegions: [], workCentroid: { lat: 0, lon: 0 } };
  }

  const subregionCounts = new Map<string, number>();
  for (const b of own) {
    const m49 = m49For(b.location.countryCode);
    // A country with no M49 assignment contributes to the architect's
    // output total (denominator) but not to any subregion bucket — mirrors
    // how `geographyBucketOf` treats an unmapped country in coverage.ts.
    // In practice this pool already failed `geography-country-unmapped`
    // before reaching derivation, but the function stays total this way
    // regardless of call site.
    if (!m49) continue;
    subregionCounts.set(m49.subregion, (subregionCounts.get(m49.subregion) ?? 0) + 1);
  }

  const total = own.length;
  const workRegions = [...subregionCounts.entries()]
    .filter(([, count]) => count / total >= WORK_REGION_THRESHOLD - EPSILON)
    .map(([subregion]) => subregion)
    .sort();

  const workCentroid = centroid(own.map((b) => b.location));

  return { workRegions, workCentroid };
}

// --- CLI args ---------------------------------------------------------------
type Args = { allowMissingDimensions: boolean; skipCoverage: boolean };

function parseArgs(argv: string[]): Args {
  return {
    allowMissingDimensions: argv.includes('--allow-missing-dimensions'),
    skipCoverage: argv.includes('--skip-coverage'),
  };
}

// --- Violation reporting -----------------------------------------------------
function printViolations(violations: Violation[]): void {
  const byRule = new Map<string, Violation[]>();
  for (const v of violations) {
    const list = byRule.get(v.rule) ?? [];
    list.push(v);
    byRule.set(v.rule, list);
  }

  console.error('\ndata:curate FAILED — validation violations:\n');
  for (const rule of [...byRule.keys()].sort()) {
    const vs = byRule.get(rule)!;
    console.error(`${rule} (${vs.length}):`);
    for (const v of vs) console.error(`  - ${v.subject}: ${v.detail}`);
    console.error('');
  }
  console.error(`${violations.length} violation(s) across ${byRule.size} rule(s). Fix these and re-run.`);
}

// --- Coverage summary ---------------------------------------------------------
type SummaryRow = {
  rule: string;
  label: string;
  measured: string;
  threshold: string;
  margin: string;
};

function pct(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

// margin is expressed the same units as the threshold (percentage points, or
// raw counts for max-buildings-per-architect), and is always "how much
// further the pool can move before this rule fails" — positive is safe,
// negative means the rule is already violated (only ever printed here on the
// success path, so it should never actually be negative in practice).
function minRow(rule: string, label: string, count: number, total: number, min: number): SummaryRow {
  const ratio = total > 0 ? count / total : 0;
  return {
    rule, label, measured: `${pct(ratio)} (${count}/${total})`, threshold: `≥${pct(min)}`, margin: `${((ratio - min) * 100).toFixed(1)}pp`,
  };
}

function maxRow(rule: string, label: string, count: number, total: number, max: number): SummaryRow {
  const ratio = total > 0 ? count / total : 0;
  return {
    rule, label, measured: `${pct(ratio)} (${count}/${total})`, threshold: `≤${pct(max)}`, margin: `${((max - ratio) * 100).toFixed(1)}pp`,
  };
}

function buildCoverageSummary(buildings: Building[], architects: Architect[]): SummaryRow[] {
  const total = buildings.length;

  const eraCounts: Record<Era, number> = { 'pre-1800': 0, '1800-1945': 0, '1945-2000': 0, 'post-2000': 0 };
  for (const b of buildings) eraCounts[eraOf(yearOf(b))] += 1;

  const geoCounts: Record<GeographyBucket, number> = {
    europe: 0, 'north-america': 0, asia: 0, 'africa-west-asia': 0, 'latin-america': 0, other: 0, unmapped: 0,
  };
  for (const b of buildings) geoCounts[geographyBucketOf(b.location.countryCode)] += 1;

  const womenOrNonBinary = architects.filter((a) => a.gender === 'woman' || a.gender === 'non-binary').length;
  const canonCount = buildings.filter((b) => b.tier === 'canon').length;

  const buildingCountByArchitect = new Map<string, number>();
  for (const b of buildings) {
    buildingCountByArchitect.set(b.architectId, (buildingCountByArchitect.get(b.architectId) ?? 0) + 1);
  }
  const maxHeldByOneArchitect = buildingCountByArchitect.size === 0 ? 0 : Math.max(...buildingCountByArchitect.values());

  // `geoCounts` has seven buckets; only five (europe/north-america/asia/
  // africa-west-asia/latin-america) are gated by a rule and rendered as a
  // row above. `other` (Oceania, Central Asia) and `unmapped` still count
  // toward `total` in every era/geography `minRow` denominator above, so a
  // building added in either silently shrinks every one of those margins.
  // This row is purely informational — not gated by data:curate at all —
  // and exists so a curator watching the other rows move can see where the
  // "missing" share of the denominator went.
  const otherUnmapped = geoCounts.other + geoCounts.unmapped;
  const otherUnmappedRatio = total > 0 ? otherUnmapped / total : 0;

  return [
    minRow('era-pre-1800-min', 'pre-1800 buildings', eraCounts['pre-1800'], total, ERA_MIN['pre-1800']),
    minRow('era-1800-1945-min', '1800–1945 buildings', eraCounts['1800-1945'], total, ERA_MIN['1800-1945']),
    minRow('era-1945-2000-min', '1945–2000 buildings', eraCounts['1945-2000'], total, ERA_MIN['1945-2000']),
    minRow('era-post-2000-min', 'post-2000 buildings', eraCounts['post-2000'], total, ERA_MIN['post-2000']),
    maxRow('geography-europe-max', 'Europe', geoCounts.europe, total, GEOGRAPHY_MAX.europe),
    maxRow('geography-north-america-max', 'Northern America', geoCounts['north-america'], total, GEOGRAPHY_MAX['north-america']),
    minRow('geography-asia-min', 'E/S/SE Asia', geoCounts.asia, total, GEOGRAPHY_MIN.asia),
    minRow('geography-africa-west-asia-min', 'Africa + W. Asia', geoCounts['africa-west-asia'], total, GEOGRAPHY_MIN['africa-west-asia']),
    minRow('geography-latin-america-min', 'Latin America', geoCounts['latin-america'], total, GEOGRAPHY_MIN['latin-america']),
    minRow('gender-min', 'women/non-binary architects', womenOrNonBinary, architects.length, GENDER_MIN),
    minRow('canon-tier-min', 'canon-tier buildings', canonCount, total, CANON_TIER_MIN),
    {
      rule: 'max-buildings-per-architect',
      label: 'most buildings held by one architect',
      measured: `${maxHeldByOneArchitect}`,
      threshold: `≤${MAX_BUILDINGS_PER_ARCHITECT}`,
      margin: `${MAX_BUILDINGS_PER_ARCHITECT - maxHeldByOneArchitect}`,
    },
    {
      rule: '(info) geography-other-unmapped',
      label: 'Oceania + Central Asia + unmapped countries — not gated by any rule',
      measured: `${pct(otherUnmappedRatio)} (${otherUnmapped}/${total}) [other: ${geoCounts.other}, unmapped: ${geoCounts.unmapped}]`,
      threshold: 'n/a — informational only',
      margin: 'n/a',
    },
  ];
}

function printCoverageSummary(buildings: Building[], architects: Architect[]): void {
  const rows = buildCoverageSummary(buildings, architects);
  console.log(`\ndata:curate OK — ${buildings.length} buildings, ${architects.length} architects.\n`);
  console.log('Coverage summary (margin = headroom before the rule fails):\n');
  console.table(
    rows.map((r) => ({
      Rule: r.rule, What: r.label, Measured: r.measured, Threshold: r.threshold, Margin: r.margin,
    })),
  );
}

// --- Main --------------------------------------------------------------------
function main(): void {
  const { allowMissingDimensions, skipCoverage } = parseArgs(process.argv.slice(2));

  const pool = { buildings: CURATED_BUILDINGS, architects: CURATED_ARCHITECTS };

  const perItemViolations = PER_ITEM_VALIDATORS.flatMap((v) => v(pool));
  const allViolations = skipCoverage ? perItemViolations : [...perItemViolations, ...validateCoverage(pool)];

  if (skipCoverage) {
    console.warn('\n*** --skip-coverage is active: pool-global coverage rules (era/geography/gender/canon-tier/max-buildings-per-architect) were NOT checked. ***');
    console.warn('*** This is only valid for validating one curator\'s own slice in isolation (Wave 5). The full gate — data:curate with no flags — MUST pass before the wave is complete. ***\n');
  }

  let hardViolations = allViolations;
  if (allowMissingDimensions) {
    const downgraded = allViolations.filter((v) => v.rule === DIMENSIONS_RULE);
    hardViolations = allViolations.filter((v) => v.rule !== DIMENSIONS_RULE);
    if (downgraded.length > 0) {
      console.warn(`\n*** --allow-missing-dimensions is active: "${DIMENSIONS_RULE}" downgraded to a warning (${downgraded.length} building(s)) ***`);
      console.warn('*** This pool has zeroed image dimensions and MUST NOT ship until Task 10 records real ones. ***\n');
      for (const v of downgraded) console.warn(`  [WARNING] ${v.subject}: ${v.detail}`);
    }
  }

  if (hardViolations.length > 0) {
    printViolations(hardViolations);
    process.exit(1);
  }

  const finalArchitects: Architect[] = pool.architects.map((a) => {
    const { workRegions, workCentroid } = deriveArchitectGeography(a.id, pool.buildings);
    return { ...a, workRegions, workCentroid };
  });

  const dataDir = path.resolve(process.cwd(), 'src/data');
  mkdirSync(dataDir, { recursive: true });
  writeFileSync(path.join(dataDir, 'curated-buildings.json'), `${JSON.stringify(pool.buildings, null, 2)}\n`);
  writeFileSync(path.join(dataDir, 'curated-architects.json'), `${JSON.stringify(finalArchitects, null, 2)}\n`);

  printCoverageSummary(pool.buildings, finalArchitects);
}

// Only run the CLI when this file is executed directly (`tsx
// buildCuratedPool.ts`, i.e. `npm run data:curate`), not when it's imported
// — e.g. by a unit test importing `deriveArchitectGeography` — where
// running the full I/O path (reading curated/, writing JSON, calling
// process.exit) would be an unwanted side effect.
//
// Compares realpaths, not raw resolved paths: every Wave 5 worktree reaches
// node_modules (and tsx) through a symlink, and a naive `path.resolve`
// comparison can disagree with `import.meta.url` across a symlink boundary
// — which would make this script a silent no-op that exits 0 having
// written nothing. If argv[1] names this file but the identity check still
// doesn't match (e.g. an unresolvable path), that's surfaced with a
// console.error rather than swallowed, since a silent skip here is exactly
// the failure mode this check exists to prevent.
function isDirectRun(): boolean {
  if (process.argv[1] === undefined) return false;
  try {
    return realpathSync(fileURLToPath(import.meta.url)) === realpathSync(path.resolve(process.argv[1]));
  } catch (err) {
    console.error(`buildCuratedPool: could not resolve realpath for direct-run check (${(err as Error).message}); treating as not a direct run.`);
    return false;
  }
}

if (isDirectRun()) {
  main();
} else if (process.argv[1] !== undefined && path.basename(process.argv[1]) === 'buildCuratedPool.ts') {
  console.error('buildCuratedPool: process.argv[1] names this script, but the direct-run identity check did not match — main() was NOT run, no files were written. This usually means a symlink broke the realpath comparison above; investigate before trusting this a no-op is intentional.');
}
