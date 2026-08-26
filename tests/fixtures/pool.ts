import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { Pool } from '@/scripts/validators/schema';

// A coherent, valid 10-building / 8-architect pool used as the single source
// of truth for every validator test. Every invalid case in tests/validators
// is derived from this pool via `withBuilding` / `withArchitect` so a rule
// change breaks one test, not twenty.
//
// The distribution below is deliberately engineered to sit inside every
// coverage threshold in src/scripts/validators/coverage.ts (see §7.3 of the
// design spec): 1 pre-1800 / 3 1800-1945 / 4 1945-2000 / 2 post-2000 building;
// 3 Europe / 2 Northern America / 2 Eastern-or-Southern Asia / 2 Africa-or-
// Western-Asia / 1 Latin America; 3 of 8 architects women or non-binary;
// no architect on more than 2 buildings; 7 of 10 buildings tier 'canon'.

function ls(en: string, es: string, it: string) {
  return { en, es, it };
}

function makeBuilding(n: {
  id: string; architectId: string; city: string; countryCode: string; lat: number; lon: number;
  inception: number; completed: number; typology: Building['typology']; material: Building['materials'][number];
  heritage: Building['heritage']; tier: Building['tier'];
}): Building {
  return {
    id: n.id,
    wikidataId: `Q${n.id}0000`,
    name: ls(`Building ${n.id}`, `Edificio ${n.id}`, `Edificio ${n.id}`),
    architectId: n.architectId,
    location: { city: n.city, countryCode: n.countryCode, lat: n.lat, lon: n.lon },
    inception: n.inception,
    completed: n.completed,
    demolished: null,
    typology: n.typology,
    materials: [n.material],
    structure: ls(
      `A load-bearing scheme built around ${n.material}.`,
      `Un esquema portante construido en torno a ${n.material}.`,
      `Uno schema portante costruito attorno a ${n.material}.`,
    ),
    program: ls(
      `Serves as a ${n.typology} building for its city.`,
      `Sirve como edificio de tipo ${n.typology} para su ciudad.`,
      `Serve come edificio di tipo ${n.typology} per la sua città.`,
    ),
    heritage: n.heritage,
    currentUse: null,
    detailRect: { x: 0.2, y: 0.2, w: 0.3, h: 0.3 },
    image: {
      commonsFile: `File:Building_${n.id}.jpg`,
      photographer: `Photographer ${n.id}`,
      license: 'CC BY-SA 4.0',
      sourceUrl: `https://commons.wikimedia.org/wiki/File:Building_${n.id}.jpg`,
      width: 1600,
      height: 1200,
    },
    dossier: ls(
      `Building ${n.id} in ${n.city} is a documented work of ${n.typology} architecture.`,
      `El edificio ${n.id} en ${n.city} es una obra documentada de arquitectura de tipo ${n.typology}.`,
      `L'edificio ${n.id} a ${n.city} è un'opera documentata di architettura di tipo ${n.typology}.`,
    ),
    context: null,
    sources: [{
      kind: 'wikidata', url: `https://www.wikidata.org/wiki/Q${n.id}0000`, title: `Building ${n.id}`, license: null,
    }],
    tier: n.tier,
  };
}

function makeArchitect(n: {
  id: string; name: string; gender: Architect['gender']; born: number; died: number | null;
  floruitStart: number; floruitEnd: number; movementId: string; typology: Architect['primaryTypology'];
  material: Architect['signatureMaterial']; lat: number; lon: number;
}): Architect {
  return {
    id: n.id,
    wikidataId: `Q${n.id}9000`,
    name: n.name,
    alternativeNames: [],
    gender: n.gender,
    born: n.born,
    died: n.died,
    floruit: { start: n.floruitStart, end: n.floruitEnd, override: false },
    movements: [{ id: n.movementId, primary: true }],
    workRegions: ['unspecified'],
    workCentroid: { lat: n.lat, lon: n.lon },
    primaryTypology: n.typology,
    signatureMaterial: n.material,
    portrait: ls(
      `${n.name}, an architect known for ${n.typology} work.`,
      `${n.name}, un arquitecto conocido por su obra de tipo ${n.typology}.`,
      `${n.name}, un architetto noto per il suo lavoro di tipo ${n.typology}.`,
    ),
    awards: [],
    tier: 'canon',
    context: null,
    sources: [{ kind: 'wikidata', url: `https://www.wikidata.org/wiki/Q${n.id}9000`, title: n.name, license: null }],
  };
}

export function validPool(): Pool {
  const architects: Architect[] = [
    makeArchitect({
      id: 'a1', name: 'Architect One', gender: 'woman', born: 1925, died: null,
      floruitStart: 1950, floruitEnd: 2000, movementId: 'brutalism', typology: 'cultural',
      material: 'concrete', lat: 35.6762, lon: 139.6503,
    }),
    makeArchitect({
      id: 'a2', name: 'Architect Two', gender: 'woman', born: 1940, died: null,
      floruitStart: 1970, floruitEnd: 2020, movementId: 'tropical-modernism', typology: 'housing',
      material: 'brick', lat: -23.5505, lon: -46.6333,
    }),
    makeArchitect({
      id: 'a3', name: 'Architect Three', gender: 'non-binary', born: 1955, died: null,
      floruitStart: 1980, floruitEnd: 2035, movementId: 'critical-regionalism', typology: 'tower',
      material: 'steel-and-glass', lat: 43.6532, lon: -79.3832,
    }),
    makeArchitect({
      id: 'a4', name: 'Architect Four', gender: 'man', born: 1620, died: 1705,
      floruitStart: 1650, floruitEnd: 1700, movementId: 'renaissance', typology: 'sacral',
      material: 'stone', lat: 43.7696, lon: 11.2558,
    }),
    makeArchitect({
      id: 'a5', name: 'Architect Five', gender: 'man', born: 1805, died: 1885,
      floruitStart: 1830, floruitEnd: 1880, movementId: 'beaux-arts', typology: 'civic',
      material: 'stone', lat: 48.8566, lon: 2.3522,
    }),
    makeArchitect({
      id: 'a6', name: 'Architect Six', gender: 'man', born: 1855, died: 1935,
      floruitStart: 1880, floruitEnd: 1930, movementId: 'art-nouveau', typology: 'commercial',
      material: 'brick', lat: 40.4168, lon: -3.7038,
    }),
    makeArchitect({
      id: 'a7', name: 'Architect Seven', gender: 'man', born: 1885, died: 1950,
      floruitStart: 1910, floruitEnd: 1945, movementId: 'international-style', typology: 'educational',
      material: 'concrete', lat: 30.0444, lon: 31.2357,
    }),
    makeArchitect({
      id: 'a8', name: 'Architect Eight', gender: 'man', born: 1905, died: 1975,
      floruitStart: 1930, floruitEnd: 1970, movementId: 'brutalism', typology: 'infrastructure',
      material: 'concrete', lat: 41.0082, lon: 28.9784,
    }),
  ];

  const buildings: Building[] = [
    makeBuilding({
      id: 'b1', architectId: 'a4', city: 'Florence', countryCode: 'IT', lat: 43.7696, lon: 11.2558,
      inception: 1650, completed: 1680, typology: 'sacral', material: 'stone',
      heritage: 'unesco', tier: 'canon',
    }),
    makeBuilding({
      id: 'b2', architectId: 'a5', city: 'Paris', countryCode: 'FR', lat: 48.8566, lon: 2.3522,
      inception: 1850, completed: 1860, typology: 'civic', material: 'stone',
      heritage: 'national', tier: 'canon',
    }),
    makeBuilding({
      id: 'b3', architectId: 'a6', city: 'Madrid', countryCode: 'ES', lat: 40.4168, lon: -3.7038,
      inception: 1900, completed: 1910, typology: 'commercial', material: 'brick',
      heritage: 'national', tier: 'canon',
    }),
    makeBuilding({
      id: 'b4', architectId: 'a7', city: 'Cairo', countryCode: 'EG', lat: 30.0444, lon: 31.2357,
      inception: 1930, completed: 1935, typology: 'educational', material: 'concrete',
      heritage: 'regional', tier: 'canon',
    }),
    makeBuilding({
      id: 'b5', architectId: 'a8', city: 'Istanbul', countryCode: 'TR', lat: 41.0082, lon: 28.9784,
      inception: 1955, completed: 1960, typology: 'infrastructure', material: 'concrete',
      heritage: 'none', tier: 'canon',
    }),
    makeBuilding({
      id: 'b6', architectId: 'a1', city: 'Tokyo', countryCode: 'JP', lat: 35.6762, lon: 139.6503,
      inception: 1965, completed: 1970, typology: 'cultural', material: 'concrete',
      heritage: 'none', tier: 'canon',
    }),
    makeBuilding({
      id: 'b7', architectId: 'a1', city: 'Ahmedabad', countryCode: 'IN', lat: 23.0225, lon: 72.5714,
      inception: 1980, completed: 1985, typology: 'cultural', material: 'concrete',
      heritage: 'none', tier: 'canon',
    }),
    makeBuilding({
      id: 'b8', architectId: 'a2', city: 'São Paulo', countryCode: 'BR', lat: -23.5505, lon: -46.6333,
      inception: 1990, completed: 1995, typology: 'housing', material: 'brick',
      heritage: 'none', tier: 'deep',
    }),
    makeBuilding({
      id: 'b9', architectId: 'a2', city: 'New York', countryCode: 'US', lat: 40.7128, lon: -74.0060,
      inception: 2005, completed: 2010, typology: 'tower', material: 'steel-and-glass',
      heritage: 'none', tier: 'deep',
    }),
    makeBuilding({
      id: 'b10', architectId: 'a3', city: 'Toronto', countryCode: 'CA', lat: 43.6532, lon: -79.3832,
      inception: 2015, completed: 2020, typology: 'tower', material: 'steel-and-glass',
      heritage: 'none', tier: 'deep',
    }),
  ];

  return { buildings, architects };
}

export function withBuilding(p: Pool, patch: Partial<Building>): Pool {
  const buildings = p.buildings.map((b) => ({ ...b }));
  buildings[0] = { ...buildings[0], ...patch };
  return { buildings, architects: p.architects.map((a) => ({ ...a })) };
}

export function withArchitect(p: Pool, patch: Partial<Architect>): Pool {
  const architects = p.architects.map((a) => ({ ...a }));
  architects[0] = { ...architects[0], ...patch };
  return { buildings: p.buildings.map((b) => ({ ...b })), architects };
}
