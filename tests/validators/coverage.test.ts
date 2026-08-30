import { describe, it, expect } from 'vitest';
import { validateCoverage } from '@/scripts/validators/coverage';
import { validPool } from '../fixtures/pool';

// v2 refocus (design spec §3): the four era floors, five geography rules,
// gender-min and canon-tier-min are DEMOTED from hard failures to a
// report-only table (still printed by buildCuratedPool.ts's
// buildCoverageSummary, but never gated here). Only
// coverage-empty-pool, geography-country-unmapped and
// max-buildings-per-architect (cap raised 3 -> 6) remain hard. These tests
// were originally written asserting the demoted rules DID fail — they are
// rewritten below to assert the opposite: violating one of those numbers
// no longer produces any violation at all.
describe('validateCoverage', () => {
  it('accepts a balanced pool', () => {
    expect(validateCoverage(validPool())).toEqual([]);
  });

  describe('demoted rules no longer gate (report-only as of v2)', () => {
    it('does not reject a pool that is more than 45% European', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
      expect(validateCoverage(p)).toEqual([]);
    });

    it('does not reject a pool with under 20% women or non-binary architects', () => {
      const p = validPool();
      p.architects.forEach((a) => { a.gender = 'man'; });
      expect(validateCoverage(p)).toEqual([]);
    });

    it('does not reject a pool with no pre-1800 buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.inception = 1960; b.completed = 1965; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('era-pre-1800-min');
    });

    it('does not reject a pool with under 25% 1800-1945 buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.inception = 1700; b.completed = 1700; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('era-1800-1945-min');
    });

    it('does not reject a pool with under 40% 1945-2000 buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.inception = 2050; b.completed = 2050; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('era-1945-2000-min');
    });

    it('does not reject a pool with under 15% post-2000 buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.inception = 1960; b.completed = 1960; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('era-post-2000-min');
    });

    it('does not reject a pool that is more than 25% Northern American', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.location.countryCode = 'US'; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('geography-north-america-max');
    });

    it('does not reject a pool with under 15% Eastern/Southern/South-eastern Asian buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('geography-asia-min');
    });

    it('does not reject a pool with under 12% Africa/Western Asia buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('geography-africa-west-asia-min');
    });

    it('does not reject a pool with under 10% Latin American buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('geography-latin-america-min');
    });

    it('does not reject a pool with under 60% canon-tier buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.tier = 'deep'; });
      expect(validateCoverage(p).map((x) => x.rule)).not.toContain('canon-tier-min');
    });
  });

  describe('max-buildings-per-architect (hard; cap raised 3 -> 6)', () => {
    it('accepts an architect holding exactly 6 buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.architectId = p.architects[0].id; });
      // The fixture pool has exactly 10 buildings, all reassigned to one
      // architect above, which trivially exceeds 6 — use a fresh 6-building
      // slice to test the exact boundary is accepted.
      const buildings = p.buildings.slice(0, 6);
      expect(validateCoverage({ buildings, architects: p.architects }).map((x) => x.rule))
        .not.toContain('max-buildings-per-architect');
    });

    it('rejects an architect appearing in more than 6 buildings', () => {
      const p = validPool();
      p.buildings.forEach((b) => { b.architectId = p.architects[0].id; });
      expect(validateCoverage(p).map((x) => x.rule)).toContain('max-buildings-per-architect');
    });

    it('does not count a co-credit toward max-buildings-per-architect', () => {
      // Decision (see coverage.ts): the cap exists to stop one architect
      // dominating the game's *answers* (architectId). A co-credit is never
      // the answer, so an architect co-credited on many buildings while
      // holding <=6 as primary architectId must not trip this rule.
      const p = validPool();
      // a1 already holds 2 buildings as primary (b6, b7) — within the cap.
      // Co-credit a1 on every other building too; if coArchitects counted
      // toward the cap, a1 would now sit at 2 + 8 = 10, well over 6.
      const buildings = p.buildings.map((b) => (
        b.architectId === 'a1' ? { ...b } : { ...b, coArchitects: ['a1'] }
      ));
      expect(validateCoverage({ buildings, architects: p.architects }).map((x) => x.rule))
        .not.toContain('max-buildings-per-architect');
    });
  });

  it('flags a country code with no UN M49 region assignment without crashing', () => {
    const p = validPool();
    p.buildings[0].location.countryCode = 'AQ';
    const v = validateCoverage(p);
    expect(v.map((x) => x.rule)).toContain('geography-country-unmapped');
  });

  it('rejects an empty pool instead of silently passing (division-by-zero guard)', () => {
    const v = validateCoverage({ buildings: [], architects: [] });
    expect(v).not.toEqual([]);
    expect(v.map((x) => x.rule)).toContain('coverage-empty-pool');
  });

  it('rejects a pool with buildings but no architects instead of silently passing', () => {
    const p = validPool();
    p.architects = [];
    const v = validateCoverage(p);
    expect(v.map((x) => x.rule)).toContain('coverage-empty-pool');
  });
});
