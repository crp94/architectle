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

  it('accepts a building with a valid coArchitects entry', () => {
    const p = validPool();
    const buildings = p.buildings.map((b) => ({ ...b }));
    // b1 is credited to a4 (Architect Four); co-credit a5 alongside them —
    // the Ningbo Museum / Kanazawa 21st Century Museum shape this field
    // exists for (Wang Shu + Lu Wenyu, Kazuyo Sejima + Ryue Nishizawa).
    buildings[0] = { ...buildings[0], coArchitects: ['a5'] };
    const v = validateCrossRefs({ buildings, architects: p.architects });
    expect(v).toEqual([]);
  });

  it('rejects a coArchitects id that resolves to no architect in the pool', () => {
    const p = validPool();
    const buildings = p.buildings.map((b) => ({ ...b }));
    buildings[0] = { ...buildings[0], coArchitects: ['no-such-architect'] };
    const v = validateCrossRefs({ buildings, architects: p.architects });
    expect(v.map((x) => x.rule)).toContain('co-architect-exists');
  });

  it('rejects coArchitects containing the building\'s own architectId', () => {
    const p = validPool();
    const buildings = p.buildings.map((b) => ({ ...b }));
    // buildings[0].architectId is 'a4' — listing it again in coArchitects is
    // a duplicate credit, not a second author.
    buildings[0] = { ...buildings[0], coArchitects: ['a4'] };
    const v = validateCrossRefs({ buildings, architects: p.architects });
    expect(v.map((x) => x.rule)).toContain('co-architect-duplicate');
  });

  it('rejects coArchitects containing an internal duplicate id', () => {
    const p = validPool();
    const buildings = p.buildings.map((b) => ({ ...b }));
    buildings[0] = { ...buildings[0], coArchitects: ['a5', 'a5'] };
    const v = validateCrossRefs({ buildings, architects: p.architects });
    expect(v.map((x) => x.rule)).toContain('co-architect-duplicate');
  });

  it('does not flag architect-orphan for an architect who appears only as a co-credit', () => {
    const p = validPool();
    const buildings = p.buildings.map((b) => ({ ...b }));
    // Point every building away from a1 so a1 has zero *primary* credits,
    // then co-credit a1 on b1. a1 is legitimately in the pool (as a
    // co-author) and must not be flagged as orphaned.
    buildings.forEach((b) => { if (b.architectId === 'a1') b.architectId = 'a4'; });
    buildings[0] = { ...buildings[0], coArchitects: ['a1'] };
    const v = validateCrossRefs({ buildings, architects: p.architects });
    expect(v.map((x) => x.rule)).not.toContain('architect-orphan');
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
