import { describe, it, expect } from 'vitest';
import { cluesAt, CLUE_I18N_KEYS } from '@/lib/clues';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';

function ls(en: string) {
  return { en, es: en, it: en };
}

function makeBuilding(patch: Partial<Building> = {}): Building {
  return {
    id: 'target-building',
    wikidataId: 'Q1',
    name: ls('Target Building'),
    architectId: 'arch-1',
    location: { city: 'Testville', countryCode: 'FR', lat: 48.8566, lon: 2.3522 },
    inception: 1920,
    completed: 1925,
    demolished: null,
    typology: 'civic',
    materials: ['concrete'],
    structure: ls('A structure.'),
    program: ls('A program.'),
    heritage: null,
    currentUse: null,
    detailRect: { x: 0.2, y: 0.2, w: 0.3, h: 0.3 },
    image: {
      commonsFile: 'File:Target.jpg',
      photographer: 'Someone',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Target.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: ls('A dossier.'),
    context: null,
    sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1', title: 'Target', license: null }],
    tier: 'canon',
    ...patch,
  };
}

function makeArchitect(patch: Partial<Architect> = {}): Architect {
  return {
    id: 'arch-1',
    wikidataId: 'Q2',
    name: 'Test Architect',
    alternativeNames: [],
    gender: 'unknown',
    born: 1880,
    died: 1950,
    floruit: { start: 1900, end: 1940, override: false },
    movements: [{ id: 'modernism-generic', primary: true }],
    workRegions: ['Western Europe'],
    workCentroid: { lat: 48.8566, lon: 2.3522 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: ls('A portrait.'),
    awards: [],
    tier: 'canon',
    context: null,
    sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2', title: 'Test Architect', license: null }],
    ...patch,
  };
}

const EXTRA_IMAGE = {
  commonsFile: 'File:Target-2.jpg',
  photographer: 'Someone Else',
  license: 'CC0' as const,
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Target-2.jpg',
  width: 1600,
  height: 1200,
};

const SIBLING = makeBuilding({ id: 'sibling-building', name: ls('Sibling Building') });

describe('cluesAt', () => {
  it('returns no clues when missCount is 0', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    expect(cluesAt(building, architect, [SIBLING], 0)).toEqual([]);
  });

  it('unlocks only the completion year after 1 miss', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [SIBLING], 1);
    expect(clues).toEqual([{ kind: 'year', year: 1925 }]);
  });

  it('falls back to inception when completed is null', () => {
    const building = makeBuilding({ completed: null, inception: 1918, extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [SIBLING], 1);
    expect(clues).toEqual([{ kind: 'year', year: 1918 }]);
  });

  it('unlocks year + country after 2 misses', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [SIBLING], 2);
    expect(clues).toEqual([
      { kind: 'year', year: 1925 },
      { kind: 'country', countryCode: 'FR' },
    ]);
  });

  it('unlocks year + country + typology/material after 3 misses', () => {
    const building = makeBuilding({ typology: 'sacral', extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect({ signatureMaterial: 'stone' });
    const clues = cluesAt(building, architect, [SIBLING], 3);
    expect(clues).toEqual([
      { kind: 'year', year: 1925 },
      { kind: 'country', countryCode: 'FR' },
      { kind: 'typology-material', typology: 'sacral', material: 'stone' },
    ]);
  });

  it('unlocks the second photo (first extraImages entry) after 4 misses', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [SIBLING], 4);
    expect(clues[3]).toEqual({ kind: 'second-photo', image: EXTRA_IMAGE });
  });

  it('unlocks movement + a sibling work after 5 misses', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect({ movements: [{ id: 'modernism-generic', primary: true }] });
    const clues = cluesAt(building, architect, [SIBLING], 5);
    expect(clues[4]).toEqual({
      kind: 'movement-sibling',
      movementId: 'modernism-generic',
      sibling: { id: 'sibling-building', name: ls('Sibling Building') },
    });
  });

  it('caps out at 5 clues total regardless of a higher missCount', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    const at5 = cluesAt(building, architect, [SIBLING], 5);
    const at100 = cluesAt(building, architect, [SIBLING], 100);
    expect(at100).toEqual(at5);
    expect(at100).toHaveLength(5);
  });

  it('reports movementId null for an unaffiliated architect', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect({ movements: 'unaffiliated' });
    const clues = cluesAt(building, architect, [SIBLING], 5);
    expect(clues[4]).toMatchObject({ kind: 'movement-sibling', movementId: null });
  });

  it('never names the target building as the sibling work, even if it is present in siblingBuildings', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [building, SIBLING], 5);
    const movementClue = clues[4];
    expect(movementClue.kind).toBe('movement-sibling');
    if (movementClue.kind === 'movement-sibling') {
      expect(movementClue.sibling?.id).not.toBe(building.id);
      expect(movementClue.sibling?.id).toBe('sibling-building');
    }
  });

  it('reports a null sibling when no other building is available', () => {
    const building = makeBuilding({ extraImages: [EXTRA_IMAGE] });
    const architect = makeArchitect();
    // Only the target itself is passed in — filtered out, leaving nothing.
    const clues = cluesAt(building, architect, [building], 5);
    expect(clues[4]).toMatchObject({ kind: 'movement-sibling', sibling: null });
  });

  describe('extraImages degradation', () => {
    it('skips the second-photo slot and promotes movement-sibling to position 4 when extraImages is absent', () => {
      const building = makeBuilding(); // no extraImages
      const architect = makeArchitect();
      const clues = cluesAt(building, architect, [SIBLING], 4);
      expect(clues).toHaveLength(4);
      expect(clues[3]).toMatchObject({ kind: 'movement-sibling' });
      expect(clues.some((c) => c.kind === 'second-photo')).toBe(false);
    });

    it('skips the second-photo slot when extraImages is an empty array', () => {
      const building = makeBuilding({ extraImages: [] });
      const architect = makeArchitect();
      const clues = cluesAt(building, architect, [SIBLING], 4);
      expect(clues).toHaveLength(4);
      expect(clues[3]).toMatchObject({ kind: 'movement-sibling' });
    });

    it('produces no additional clue at miss 5 once degraded (only 4 total clues ever exist)', () => {
      const building = makeBuilding();
      const architect = makeArchitect();
      const at4 = cluesAt(building, architect, [SIBLING], 4);
      const at5 = cluesAt(building, architect, [SIBLING], 5);
      const at10 = cluesAt(building, architect, [SIBLING], 10);
      expect(at5).toEqual(at4);
      expect(at10).toEqual(at4);
      expect(at4).toHaveLength(4);
    });

    it('the degraded schedule is exactly [year, country, typology-material, movement-sibling]', () => {
      const building = makeBuilding({ typology: 'tower' });
      const architect = makeArchitect({ signatureMaterial: 'steel-and-glass' });
      const clues = cluesAt(building, architect, [SIBLING], 4);
      expect(clues.map((c) => c.kind)).toEqual(['year', 'country', 'typology-material', 'movement-sibling']);
    });
  });

  it('exports an i18n key for every clue kind the UI will need to label', () => {
    const kinds: Array<keyof typeof CLUE_I18N_KEYS> = [
      'year', 'country', 'typology-material', 'second-photo', 'movement-sibling',
    ];
    for (const kind of kinds) {
      expect(typeof CLUE_I18N_KEYS[kind]).toBe('string');
      expect(CLUE_I18N_KEYS[kind].length).toBeGreaterThan(0);
    }
  });
});
