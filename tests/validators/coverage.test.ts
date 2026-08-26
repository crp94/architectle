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

  it('states the measured percentage and threshold in the detail', () => {
    const p = validPool();
    p.buildings.forEach((b) => { b.location.countryCode = 'FR'; });
    const violation = validateCoverage(p).find((x) => x.rule === 'geography-europe-max')!;
    expect(violation.detail).toContain('100.0%');
    expect(violation.detail).toContain('45%');
  });
});
