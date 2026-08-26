import { describe, it, expect } from 'vitest';
import { MOVEMENTS, familyOf } from '@/data/movements';

describe('movement taxonomy', () => {
  it('places brutalism and metabolism in the modernism family', () => {
    expect(familyOf('brutalism')).toBe('modernism');
    expect(familyOf('metabolism')).toBe('modernism');
  });

  it('covers every family with at least one movement', () => {
    const families = new Set(Object.values(MOVEMENTS).map((m) => m.family));
    for (const f of ['classical','medieval','islamic','renaissance-baroque',
                     'revivalist','modernism','postmodernism','contemporary','vernacular']) {
      expect(families.has(f as never)).toBe(true);
    }
  });

  it('gives every movement a complete blurb and a source', () => {
    for (const m of Object.values(MOVEMENTS)) {
      expect(m.blurb.en.length).toBeGreaterThan(20);
      expect(m.blurb.es.length).toBeGreaterThan(20);
      expect(m.blurb.it.length).toBeGreaterThan(20);
      expect(m.sources.length).toBeGreaterThan(0);
    }
  });

  it('has no movement id colliding with a family id', () => {
    const fams = new Set(Object.values(MOVEMENTS).map((m) => m.family));
    for (const id of Object.keys(MOVEMENTS)) expect(fams.has(id as never)).toBe(false);
  });

  it('returns undefined for Object.prototype keys rather than inherited members', () => {
    expect(familyOf('constructor')).toBeUndefined();
    expect(familyOf('toString')).toBeUndefined();
    expect(familyOf('__proto__')).toBeUndefined();
  });
});
