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

  it('flags the same building entered twice under two ids', () => {
    const p = validPool();
    // A duplicate curation entry: identical name and coordinates, new id.
    const dup = { ...p.buildings[0], id: 'b1-dup' };
    const v = validateCrossRefs({ buildings: [...p.buildings, dup], architects: p.architects });
    expect(v.map((x) => x.rule)).toContain('possible-duplicate-site');
  });

  it('names both buildings in the subject of a duplicate-site violation', () => {
    const p = validPool();
    const dup = { ...p.buildings[0], id: 'b1-dup' };
    const v = validateCrossRefs({ buildings: [...p.buildings, dup], architects: p.architects });
    const violation = v.find((x) => x.rule === 'possible-duplicate-site')!;
    expect(violation.subject).toBe('b1,b1-dup');
  });

  it('flags the same building entered twice under a different but overlapping name', () => {
    const p = validPool();
    const buildings = p.buildings.map((b) => ({ ...b }));
    buildings[0] = {
      ...buildings[0],
      name: { en: 'Sagrada Família', es: 'Sagrada Família', it: 'Sagrada Família' },
    };
    const dup = {
      ...buildings[0],
      id: 'b1-dup',
      name: {
        en: 'Temple Expiatori de la Sagrada Família',
        es: 'Templo Expiatorio de la Sagrada Família',
        it: 'Tempio Espiatorio della Sagrada Família',
      },
    };
    const v = validateCrossRefs({ buildings: [...buildings, dup], architects: p.architects });
    expect(v.map((x) => x.rule)).toContain('possible-duplicate-site');
  });

  it('does not flag two distinct, differently-named buildings that share a city', () => {
    const p = validPool();
    const buildings = p.buildings.map((b) => ({ ...b }));
    // Real coordinates: Casa Batlló and Casa Milà, two distinct Gaudí
    // buildings on Barcelona's Passeig de Gràcia, ~480 m apart — well
    // within the old 25 km radius, and even within a naively-tightened
    // few-hundred-metre radius. Only the name/architect mismatch should
    // save this pair from being flagged.
    buildings[0] = {
      ...buildings[0],
      architectId: 'a4',
      name: { en: 'Casa Batlló', es: 'Casa Batlló', it: 'Casa Batlló' },
      location: { city: 'Barcelona', countryCode: 'ES', lat: 41.3916, lon: 2.1649 },
    };
    buildings[1] = {
      ...buildings[1],
      architectId: 'a5',
      name: { en: 'Casa Milà', es: 'Casa Milà', it: 'Casa Milà' },
      location: { city: 'Barcelona', countryCode: 'ES', lat: 41.3953, lon: 2.1619 },
    };
    const v = validateCrossRefs({ buildings, architects: p.architects });
    expect(v.map((x) => x.rule)).not.toContain('possible-duplicate-site');
  });
});
