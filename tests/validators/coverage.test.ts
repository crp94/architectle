import { describe, it, expect } from 'vitest';
import { validateCoverage } from '@/scripts/validators/coverage';
import { validPool } from '../fixtures/pool';

describe('validateCoverage', () => {
  it('accepts a balanced pool', () => {
    expect(validateCoverage(validPool())).toEqual([]);
  });

  it('rejects a pool that is more than 45% European', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('geography-europe-max');
  });

  it('rejects a pool with under 20% women or non-binary architects', () => {
    const p = validPool();
    p.architects.forEach((a) => { a.gender = 'man'; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('gender-min');
  });

  it('rejects an architect appearing in more than three buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.architectId = p.architects[0].id; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('max-buildings-per-architect');
  });

  it('does not count a co-credit toward max-buildings-per-architect', () => {
    // Decision (see coverage.ts): the ≤3 cap exists to stop one architect
    // dominating the game's *answers* (architectId). A co-credit is never
    // the answer, so an architect co-credited on many buildings while
    // holding <=3 as primary architectId must not trip this rule.
    const p = validPool();
    // a1 already holds 2 buildings as primary (b6, b7) — within the cap.
    // Co-credit a1 on every other building too; if coArchitects counted
    // toward the cap, a1 would now sit at 2 + 8 = 10, well over 3.
    const buildings = p.buildings.map((b) => (
      b.architectId === 'a1' ? { ...b } : { ...b, coArchitects: ['a1'] }
    ));
    expect(validateCoverage({ buildings, architects: p.architects }).map((x) => x.rule))
      .not.toContain('max-buildings-per-architect');
  });

  it('rejects a pool with no pre-1800 buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.inception = 1960; b.completed = 1965; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('era-pre-1800-min');
  });

  it('rejects a pool with under 25% 1800-1945 buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.inception = 1700; b.completed = 1700; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('era-1800-1945-min');
  });

  it('rejects a pool with under 40% 1945-2000 buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.inception = 2050; b.completed = 2050; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('era-1945-2000-min');
  });

  it('rejects a pool with under 15% post-2000 buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.inception = 1960; b.completed = 1960; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('era-post-2000-min');
  });

  it('rejects a pool that is more than 25% Northern American', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.location.countryCode = 'US'; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('geography-north-america-max');
  });

  it('rejects a pool with under 15% Eastern/Southern/South-eastern Asian buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('geography-asia-min');
  });

  it('rejects a pool with under 12% Africa/Western Asia buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('geography-africa-west-asia-min');
  });

  it('rejects a pool with under 10% Latin American buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('geography-latin-america-min');
  });

  it('rejects a pool with under 60% canon-tier buildings', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.tier = 'deep'; });
    expect(validateCoverage(p).map((x) => x.rule)).toContain('canon-tier-min');
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

  it('rejects a pool with buildings but no architects instead of silently passing gender-min', () => {
    const p = validPool();
    p.architects = [];
    const v = validateCoverage(p);
    expect(v.map((x) => x.rule)).toContain('coverage-empty-pool');
  });

  it('buckets the 1800 seam year into 1800-1945, not pre-1800', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.inception = 1800; b.completed = 1800; });
    const rules = validateCoverage(p).map((x) => x.rule);
    expect(rules).not.toContain('era-1800-1945-min');
    expect(rules).toContain('era-pre-1800-min');
  });

  it('buckets the 1945 seam year into 1800-1945, not 1945-2000', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.inception = 1945; b.completed = 1945; });
    const rules = validateCoverage(p).map((x) => x.rule);
    expect(rules).not.toContain('era-1800-1945-min');
    expect(rules).toContain('era-1945-2000-min');
  });

  it('buckets the 2000 seam year into 1945-2000, not post-2000', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.inception = 2000; b.completed = 2000; });
    const rules = validateCoverage(p).map((x) => x.rule);
    expect(rules).not.toContain('era-1945-2000-min');
    expect(rules).toContain('era-post-2000-min');
  });

  it('states the measured percentage and threshold in the detail', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
    const violation = validateCoverage(p).find((x) => x.rule === 'geography-europe-max')!;
    expect(violation.detail).toContain('100.0%');
    expect(violation.detail).toContain('45%');
  });
});
