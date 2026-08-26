import { describe, it, expect } from 'vitest';
import { validateSchema } from '@/scripts/validators/schema';
import { validPool, withBuilding } from '../fixtures/pool';

describe('validateSchema', () => {
  it('accepts a valid pool', () => {
    expect(validateSchema(validPool())).toEqual([]);
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
});
