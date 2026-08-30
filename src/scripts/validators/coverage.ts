import type { Pool, Violation } from './schema';
import { m49For } from '@/lib/m49';

// Coverage quotas from design spec §7.3 (v1) / v2 refocus §3. As of v2, the
// four era floors, five geography rules, `gender-min` and `canon-tier-min`
// below are REPORT-ONLY: `validateCoverage` no longer fails on them. They
// remain exported (and buildCuratedPool.ts still prints a coverage summary
// against them) purely so a curator can see how the pool sits against the
// numbers that shaped v1 curation — see design spec §3: v2 trades
// representativeness targets for guessability with a hand-picked featured
// roster, and a hard gate that fought that goal would block real curation
// work for no correctness benefit. `max-buildings-per-architect` (raised
// 3 -> 6) and the empty-pool/unmapped-country guards below remain hard —
// those catch actual pool-construction defects, not distributional taste.
export const ERA_MIN = {
  'pre-1800': 0.10,
  '1800-1945': 0.25,
  '1945-2000': 0.40,
  'post-2000': 0.15,
} as const;

export const GEOGRAPHY_MAX = {
  europe: 0.45,
  'north-america': 0.25,
} as const;

export const GEOGRAPHY_MIN = {
  asia: 0.15,
  'africa-west-asia': 0.12,
  'latin-america': 0.10,
} as const;

export const GENDER_MIN = 0.20;
// v2 refocus §3: raised from 3 -> 6. Stays a HARD gate — unlike the
// representativeness rules above, this protects the game's answer-key
// distribution itself (one architect dominating the day's targets), which
// matters MORE now that daily/unlimited draw from a much smaller featured
// pool, not less.
export const MAX_BUILDINGS_PER_ARCHITECT = 6;
export const CANON_TIER_MIN = 0.60;

export type Era = keyof typeof ERA_MIN;
export type GeographyBucket = keyof typeof GEOGRAPHY_MAX | keyof typeof GEOGRAPHY_MIN | 'other' | 'unmapped';

export function yearOf(b: Pool['buildings'][number]): number {
  return b.completed ?? b.inception;
}

export function eraOf(year: number): Era {
  if (year < 1800) return 'pre-1800';
  if (year <= 1945) return '1800-1945';
  if (year <= 2000) return '1945-2000';
  return 'post-2000';
}

// Buckets are mutually exclusive by construction: Western Asia is folded into
// `africa-west-asia` (per spec, combined with Africa) rather than `asia`,
// and Central Asia and Oceania fall into `other` — they count toward the
// denominator of every rule below but no rule's numerator.
export function geographyBucketOf(countryCode: string): GeographyBucket {
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

// The eleven report-only rules (era x4, geography x5, gender-min,
// canon-tier-min) no longer compute or push a Violation at all here; their
// numbers are computed independently by buildCuratedPool.ts's
// `buildCoverageSummary`, which prints them in the informational table on
// every run regardless of pass/fail.
export function validateCoverage(pool: Pool): Violation[] {
  const out: Violation[] = [];
  const totalBuildings = pool.buildings.length;
  const totalArchitects = pool.architects.length;

  // Both remaining building-based hard rules (geography-country-unmapped,
  // max-buildings-per-architect) are still ratios/counts over
  // totalBuildings, so the division-by-zero guard stays: an empty pool
  // must never silently pass by short-circuiting into a 0/0 no-op.
  if (totalBuildings === 0) {
    out.push({
      rule: 'coverage-empty-pool',
      subject: 'pool',
      detail: 'pool has 0 buildings; every building-based coverage rule (max-buildings-per-architect, geography-country-unmapped) is unverifiable',
    });
    return out;
  }

  if (totalArchitects === 0) {
    out.push({
      rule: 'coverage-empty-pool',
      subject: 'pool',
      detail: 'pool has 0 architects',
    });
  }

  // --- Geography: only the unmapped-country flag is still hard. The five
  // europe/north-america/asia/africa-west-asia/latin-america ratio rules
  // are report-only as of v2 (design spec §3) — see buildCoverageSummary in
  // buildCuratedPool.ts for where they're still measured and printed.
  for (const b of pool.buildings) {
    if (geographyBucketOf(b.location.countryCode) === 'unmapped') {
      out.push({
        rule: 'geography-country-unmapped',
        subject: b.id,
        detail: `country code "${b.location.countryCode}" has no UN M49 region assignment (counted toward pool totals, no region bucket)`,
      });
    }
  }

  // --- Max buildings per architect ---
  // Decision: `coArchitects` does NOT count toward this cap — deliberately,
  // not by omission. This rule exists to stop one architect dominating the
  // game's *answers* (a pool where Frank Lloyd Wright's architectId sits on
  // 20 buildings makes the day's target predictable); a co-credit is never
  // an answer, so counting it here would penalize precisely the joint
  // credits (Wang Shu + Lu Wenyu, Sejima + Nishizawa, Emin Onat + Orhan
  // Arda) this field exists to stop erasing, for a cap whose rationale
  // doesn't apply to them. Counting only `b.architectId` below is that
  // decision, not an oversight.
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

  return out;
}
