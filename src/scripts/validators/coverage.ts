import type { Pool, Violation } from './schema';
import { m49For } from '@/lib/m49';

// Coverage quotas from design spec §7.3, copied verbatim. These are hard
// failures: a pool generated naively from Wikidata is measurably skewed
// (31,128 buildings with attributed architects in the 1900s against ~1,900
// for all of 1000-1500; Lina Bo Bardi 10 attributed buildings to Frank Lloyd
// Wright's 283), so the thresholds exist to force deliberate correction.
const ERA_MIN = {
  'pre-1800': 0.10,
  '1800-1945': 0.25,
  '1945-2000': 0.40,
  'post-2000': 0.15,
} as const;

const GEOGRAPHY_MAX = {
  europe: 0.45,
  'north-america': 0.25,
} as const;

const GEOGRAPHY_MIN = {
  asia: 0.15,
  'africa-west-asia': 0.12,
  'latin-america': 0.10,
} as const;

const GENDER_MIN = 0.20;
const MAX_BUILDINGS_PER_ARCHITECT = 3;
const CANON_TIER_MIN = 0.60;

// Guards against float noise around an exact threshold (e.g. 1/10 === 0.10).
const EPSILON = 1e-9;

type Era = keyof typeof ERA_MIN;
type GeographyBucket = keyof typeof GEOGRAPHY_MAX | keyof typeof GEOGRAPHY_MIN | 'other' | 'unmapped';

function yearOf(b: Pool['buildings'][number]): number {
  return b.completed ?? b.inception;
}

function eraOf(year: number): Era {
  if (year < 1800) return 'pre-1800';
  if (year <= 1945) return '1800-1945';
  if (year <= 2000) return '1945-2000';
  return 'post-2000';
}

// Buckets are mutually exclusive by construction: Western Asia is folded into
// `africa-west-asia` (per spec, combined with Africa) rather than `asia`,
// and Central Asia and Oceania fall into `other` — they count toward the
// denominator of every rule below but no rule's numerator.
function geographyBucketOf(countryCode: string): GeographyBucket {
  const m49 = m49For(countryCode);
  if (!m49) return 'unmapped';
  if (m49.region === 'Europe') return 'europe';
  if (m49.subregion === 'Northern America') return 'north-america';
  if (m49.subregion === 'Eastern Asia' || m49.subregion === 'Southern Asia' || m49.subregion === 'South-eastern Asia') {
    return 'asia';
  }
  if (m49.region === 'Africa' || m49.subregion === 'Western Asia') return 'africa-west-asia';
  if (m49.subregion === 'Latin America and the Caribbean') return 'latin-america';
  return 'other';
}

function pct(count: number, total: number): string {
  return `${((count / total) * 100).toFixed(1)}%`;
}

function pushMin(
  out: Violation[], rule: string, label: string, count: number, total: number, min: number,
): void {
  if (count / total < min - EPSILON) {
    out.push({
      rule,
      subject: 'pool',
      detail: `${label} ${pct(count, total)} (${count}/${total}) is below minimum ${(min * 100).toFixed(0)}%`,
    });
  }
}

function pushMax(
  out: Violation[], rule: string, label: string, count: number, total: number, max: number,
): void {
  if (count / total > max + EPSILON) {
    out.push({
      rule,
      subject: 'pool',
      detail: `${label} ${pct(count, total)} (${count}/${total}) exceeds maximum ${(max * 100).toFixed(0)}%`,
    });
  }
}

export function validateCoverage(pool: Pool): Violation[] {
  const out: Violation[] = [];
  const totalBuildings = pool.buildings.length;
  const totalArchitects = pool.architects.length;

  // --- Era ---
  const eraCounts: Record<Era, number> = { 'pre-1800': 0, '1800-1945': 0, '1945-2000': 0, 'post-2000': 0 };
  for (const b of pool.buildings) eraCounts[eraOf(yearOf(b))] += 1;
  pushMin(out, 'era-pre-1800-min', 'pre-1800 buildings', eraCounts['pre-1800'], totalBuildings, ERA_MIN['pre-1800']);
  pushMin(out, 'era-1800-1945-min', '1800-1945 buildings', eraCounts['1800-1945'], totalBuildings, ERA_MIN['1800-1945']);
  pushMin(out, 'era-1945-2000-min', '1945-2000 buildings', eraCounts['1945-2000'], totalBuildings, ERA_MIN['1945-2000']);
  pushMin(out, 'era-post-2000-min', 'post-2000 buildings', eraCounts['post-2000'], totalBuildings, ERA_MIN['post-2000']);

  // --- Geography ---
  const geoCounts: Record<GeographyBucket, number> = {
    europe: 0, 'north-america': 0, asia: 0, 'africa-west-asia': 0, 'latin-america': 0, other: 0, unmapped: 0,
  };
  for (const b of pool.buildings) {
    const bucket = geographyBucketOf(b.location.countryCode);
    geoCounts[bucket] += 1;
    if (bucket === 'unmapped') {
      out.push({
        rule: 'geography-country-unmapped',
        subject: b.id,
        detail: `country code "${b.location.countryCode}" has no UN M49 region assignment (counted toward pool totals, no region bucket)`,
      });
    }
  }
  pushMax(out, 'geography-europe-max', 'Europe', geoCounts.europe, totalBuildings, GEOGRAPHY_MAX.europe);
  pushMax(out, 'geography-north-america-max', 'Northern America', geoCounts['north-america'], totalBuildings, GEOGRAPHY_MAX['north-america']);
  pushMin(out, 'geography-asia-min', 'Eastern/Southern/South-eastern Asia', geoCounts.asia, totalBuildings, GEOGRAPHY_MIN.asia);
  pushMin(out, 'geography-africa-west-asia-min', 'Africa and Western Asia', geoCounts['africa-west-asia'], totalBuildings, GEOGRAPHY_MIN['africa-west-asia']);
  pushMin(out, 'geography-latin-america-min', 'Latin America and the Caribbean', geoCounts['latin-america'], totalBuildings, GEOGRAPHY_MIN['latin-america']);

  // --- Gender ---
  const womenOrNonBinary = pool.architects.filter((a) => a.gender === 'woman' || a.gender === 'non-binary').length;
  pushMin(out, 'gender-min', 'woman or non-binary architects', womenOrNonBinary, totalArchitects, GENDER_MIN);

  // --- Max buildings per architect ---
  const buildingCountByArchitect = new Map<string, number>();
  for (const b of pool.buildings) {
    buildingCountByArchitect.set(b.architectId, (buildingCountByArchitect.get(b.architectId) ?? 0) + 1);
  }
  for (const [architectId, count] of buildingCountByArchitect) {
    if (count > MAX_BUILDINGS_PER_ARCHITECT) {
      out.push({
        rule: 'max-buildings-per-architect',
        subject: architectId,
        detail: `architect ${architectId} appears in ${count} buildings, exceeding maximum ${MAX_BUILDINGS_PER_ARCHITECT}`,
      });
    }
  }

  // --- Canon tier ---
  const canonCount = pool.buildings.filter((b) => b.tier === 'canon').length;
  pushMin(out, 'canon-tier-min', 'canon-tier buildings', canonCount, totalBuildings, CANON_TIER_MIN);

  return out;
}
