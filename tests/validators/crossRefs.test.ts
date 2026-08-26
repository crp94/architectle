import { describe, it, expect } from 'vitest';
import { validateCrossRefs } from '@/scripts/validators/crossRefs';
import { validPool, withBuilding, withArchitect } from '../fixtures/pool';

describe('validateCrossRefs', () => {
  it('accepts a valid pool', () => {
    expect(validateCrossRefs(validPool())).toEqual([]);
  });

  it('rejects a building referencing a missing architectId', () => {
    const v = validateCrossRefs(withBuilding(validPool(), { architectId: 'no-such-architect' }));
    expect(v.map((x) => x.rule)).toContain('architect-exists');
  });

  it('rejects an architect with no buildings', () => {
    const p = validPool();
    // Point every building at some other architect so architects[0] is orphaned.
    p.buildings.forEach((b) => { b.architectId = p.architects[1].id; });
    const v = validateCrossRefs(p);
    expect(v.map((x) => x.rule)).toContain('architect-orphan');
  });

  it('rejects a movement id not in MOVEMENTS', () => {
    const v = validateCrossRefs(withArchitect(validPool(), { movements: [{ id: 'no-such-movement', primary: true }] }));
    expect(v.map((x) => x.rule)).toContain('movement-resolves');
  });

  it('accepts an architect marked unaffiliated', () => {
    const v = validateCrossRefs(withArchitect(validPool(), { movements: 'unaffiliated' }));
    expect(v.map((x) => x.rule)).not.toContain('movement-resolves');
  });

  it('rejects a floruit inconsistent with the architect buildings when override is false', () => {
    const v = validateCrossRefs(withArchitect(validPool(), {
      floruit: { start: 1200, end: 1210, override: false },
    }));
    expect(v.map((x) => x.rule)).toContain('floruit-consistent');
  });

  it('accepts an inconsistent floruit when override is true', () => {
    const v = validateCrossRefs(withArchitect(validPool(), {
      floruit: { start: 1200, end: 1210, override: true },
    }));
    expect(v.map((x) => x.rule)).not.toContain('floruit-consistent');
  });

  it('flags two buildings within 25 km of each other', () => {
    const p = validPool();
    const v = validateCrossRefs(withBuilding(p, { location: { ...p.buildings[1].location } }));
    expect(v.map((x) => x.rule)).toContain('possible-duplicate-site');
  });

  it('names both buildings in the subject of a duplicate-site violation', () => {
    const p = validPool();
    const v = validateCrossRefs(withBuilding(p, { location: { ...p.buildings[1].location } }));
    const violation = v.find((x) => x.rule === 'possible-duplicate-site')!;
    expect(violation.subject).toBe('b1,b2');
  });
});
