import { describe, it, expect } from 'vitest';
import { validatePool, ALL_VALIDATORS } from '@/scripts/validators/index';
import { validPool, withBuilding } from '../fixtures/pool';

describe('validatePool', () => {
  it('composes all five validators and accepts a valid pool', () => {
    expect(ALL_VALIDATORS).toHaveLength(5);
    expect(validatePool(validPool())).toEqual([]);
  });

  it('surfaces violations from more than one validator at once', () => {
    // Breaks both schema (bad year) and cross-refs (missing architect).
    const broken = withBuilding(validPool(), { inception: 5000, architectId: 'no-such-architect' });
    const rules = validatePool(broken).map((x) => x.rule);
    expect(rules).toContain('plausible-years');
    expect(rules).toContain('architect-exists');
  });
});
