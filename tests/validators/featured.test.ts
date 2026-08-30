import { describe, it, expect } from 'vitest';
import { validateFeatured } from '@/scripts/validators/featured';
import { validPool } from '../fixtures/pool';

// validateFeatured takes the list of featured ids as an explicit argument
// (rather than always reading the real src/scripts/curated/featured.ts) so
// it can be exercised against tests/fixtures/pool.ts's small, coherent
// fixture pool instead of the real ~450-architect pool.
describe('validateFeatured', () => {
  it('accepts an empty featured list', () => {
    expect(validateFeatured(validPool(), [])).toEqual([]);
  });

  it('accepts a featured id that resolves and holds >=2 buildings via architectId', () => {
    // a1 in the fixture holds b6 and b7 as architectId.
    expect(validateFeatured(validPool(), ['a1'])).toEqual([]);
  });

  describe('featured-architect-exists', () => {
    it('rejects a featured id with no matching architect in the pool', () => {
      const v = validateFeatured(validPool(), ['no-such-architect']);
      expect(v.map((x) => x.rule)).toContain('featured-architect-exists');
      const violation = v.find((x) => x.rule === 'featured-architect-exists')!;
      expect(violation.subject).toBe('no-such-architect');
    });
  });

  describe('featured-min-buildings', () => {
    it('rejects a featured architect with fewer than 2 buildings via architectId', () => {
      // a4 in the fixture holds only b1 as architectId.
      const v = validateFeatured(validPool(), ['a4']);
      expect(v.map((x) => x.rule)).toContain('featured-min-buildings');
      const violation = v.find((x) => x.rule === 'featured-min-buildings')!;
      expect(violation.subject).toBe('a4');
      expect(violation.detail).toContain('1');
    });

    it('does NOT count a coArchitects reference toward the minimum', () => {
      const p = validPool();
      // a4 holds b1 as architectId (1 building); co-credit a4 on every
      // OTHER building too. If coArchitects counted, a4 would clear 2.
      const buildings = p.buildings.map((b) => (
        b.architectId === 'a4' ? b : { ...b, coArchitects: ['a4'] }
      ));
      const v = validateFeatured({ buildings, architects: p.architects }, ['a4']);
      expect(v.map((x) => x.rule)).toContain('featured-min-buildings');
    });

    it('accepts a featured architect with exactly 2 buildings', () => {
      // a1 holds exactly b6 and b7.
      const v = validateFeatured(validPool(), ['a1']);
      expect(v.map((x) => x.rule)).not.toContain('featured-min-buildings');
    });
  });

  it('reports both rules independently for a mix of good and bad featured ids', () => {
    const v = validateFeatured(validPool(), ['a1', 'a4', 'ghost']);
    const rules = v.map((x) => x.rule);
    expect(rules).toContain('featured-min-buildings'); // a4
    expect(rules).toContain('featured-architect-exists'); // ghost
    expect(v.some((x) => x.subject === 'a1')).toBe(false);
  });
});
