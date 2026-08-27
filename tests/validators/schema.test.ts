import { describe, it, expect } from 'vitest';
import { validateSchema } from '@/scripts/validators/schema';
import { validPool, withBuilding, withArchitect } from '../fixtures/pool';

describe('validateSchema', () => {
  it('accepts a valid pool', () => {
    expect(validateSchema(validPool())).toEqual([]);
  });

  it('rejects a building with no tier', () => {
    const v = validateSchema(withBuilding(validPool(), { tier: undefined as never }));
    expect(v.map((x) => x.rule)).toContain('enum-membership');
    const violation = v.find((x) => x.rule === 'enum-membership' && x.subject === 'b1')!;
    expect(violation.detail).toContain('tier');
    expect(violation.detail.toLowerCase()).toContain('missing');
  });

  it('rejects a building with an invalid tier value', () => {
    const v = validateSchema(withBuilding(validPool(), { tier: 'legendary' as never }));
    expect(v.map((x) => x.rule)).toContain('enum-membership');
    const violation = v.find((x) => x.rule === 'enum-membership' && x.subject === 'b1')!;
    expect(violation.detail).toContain('legendary');
  });

  it('rejects an architect with no tier', () => {
    const v = validateSchema(withArchitect(validPool(), { tier: undefined as never }));
    expect(v.map((x) => x.rule)).toContain('enum-membership');
    const violation = v.find((x) => x.rule === 'enum-membership' && x.subject === 'a1')!;
    expect(violation.detail).toContain('tier');
    expect(violation.detail.toLowerCase()).toContain('missing');
  });

  it('rejects an architect with no gender', () => {
    const v = validateSchema(withArchitect(validPool(), { gender: undefined as never }));
    expect(v.map((x) => x.rule)).toContain('enum-membership');
    const violation = v.find((x) => x.rule === 'enum-membership' && x.subject === 'a1' && x.detail.includes('gender'))!;
    expect(violation.detail.toLowerCase()).toContain('missing');
  });

  it('rejects an architect with an invalid gender value', () => {
    const v = validateSchema(withArchitect(validPool(), { gender: 'other' as never }));
    expect(v.map((x) => x.rule)).toContain('enum-membership');
    const violation = v.find((x) => x.rule === 'enum-membership' && x.subject === 'a1' && x.detail.includes('gender'))!;
    expect(violation.detail).toContain('other');
  });

  it('rejects completion before inception', () => {
    const v = validateSchema(withBuilding(validPool(), { inception: 1990, completed: 1980 }));
    expect(v.map((x) => x.rule)).toContain('inception-before-completion');
  });

  it('rejects a detailRect outside the image', () => {
    const v = validateSchema(withBuilding(validPool(), { detailRect: { x: 0.8, y: 0.1, w: 0.4, h: 0.2 } }));
    expect(v.map((x) => x.rule)).toContain('detail-rect-in-bounds');
  });

  it('rejects a detailRect smaller than 4% of the image', () => {
    const v = validateSchema(withBuilding(validPool(), { detailRect: { x: 0.1, y: 0.1, w: 0.1, h: 0.1 } }));
    expect(v.map((x) => x.rule)).toContain('detail-rect-min-area');
  });

  it('rejects an incomplete LocalizedString', () => {
    const v = validateSchema(withBuilding(validPool(), {
      dossier: { en: 'Present', es: '', it: 'Presente' },
    }));
    expect(v.map((x) => x.rule)).toContain('localized-complete');
  });

  it('rejects an implausible year', () => {
    const v = validateSchema(withBuilding(validPool(), { inception: 3500 }));
    expect(v.map((x) => x.rule)).toContain('plausible-years');
  });

  it('rejects an unrecognized typology', () => {
    const v = validateSchema(withBuilding(validPool(), { typology: 'castle' as never }));
    expect(v.map((x) => x.rule)).toContain('enum-membership');
  });

  it('states the offending subject and the measured value in the detail', () => {
    const v = validateSchema(withBuilding(validPool(), { inception: 1990, completed: 1980 }));
    const violation = v.find((x) => x.rule === 'inception-before-completion')!;
    expect(violation.subject).toBe('b1');
    expect(violation.detail).toContain('1990');
    expect(violation.detail).toContain('1980');
  });

  it('rejects an architect who died before they were born', () => {
    const v = validateSchema(withArchitect(validPool(), { born: 1950, died: 1900 }));
    expect(v.map((x) => x.rule)).toContain('born-before-died');
  });

  it('accepts an architect who is still alive (died null)', () => {
    const v = validateSchema(withArchitect(validPool(), { born: 1950, died: null }));
    expect(v.map((x) => x.rule)).not.toContain('born-before-died');
  });

  it('rejects a floruit whose start is after its end, even with override true', () => {
    const v = validateSchema(withArchitect(validPool(), {
      floruit: { start: 1990, end: 1950, override: true },
    }));
    expect(v.map((x) => x.rule)).toContain('floruit-start-before-end');
  });

  it('rejects a building demolished before it was completed', () => {
    const v = validateSchema(withBuilding(validPool(), {
      inception: 1900, completed: 1910, demolished: 1905,
    }));
    expect(v.map((x) => x.rule)).toContain('demolished-after-completion');
  });

  it('falls back to inception when checking demolished and completed is null', () => {
    const v = validateSchema(withBuilding(validPool(), {
      inception: 1900, completed: null, demolished: 1895,
    }));
    expect(v.map((x) => x.rule)).toContain('demolished-after-completion');
  });

  it('accepts a building demolished after its completion', () => {
    const v = validateSchema(withBuilding(validPool(), {
      inception: 1900, completed: 1910, demolished: 1990,
    }));
    expect(v.map((x) => x.rule)).not.toContain('demolished-after-completion');
  });
});
