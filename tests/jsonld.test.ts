import { describe, it, expect } from 'vitest';
import { buildingJsonLd, architectJsonLd, movementJsonLd, websiteJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/site';
import { architect } from './fixtures/architect';
import type { Building } from '@/types/building';
import type { Movement } from '@/types/movement';

function ls(en: string, es: string, it: string) {
  return { en, es, it };
}

function building(patch: Partial<Building> = {}): Building {
  return {
    id: 'cupola-di-santa-maria-del-fiore',
    wikidataId: 'Q3699556',
    name: ls('Dome of Santa Maria del Fiore', 'Cúpula de Santa María del Fiore', 'Cupola di Santa Maria del Fiore'),
    architectId: 'filippo-brunelleschi',
    location: { city: 'Florence', countryCode: 'IT', lat: 43.7727, lon: 11.25582 },
    inception: 1420,
    completed: 1436,
    demolished: null,
    typology: 'sacral',
    materials: ['brick', 'stone'],
    structure: ls('A structure.', 'Una estructura.', 'Una struttura.'),
    program: ls('A program.', 'Un programa.', 'Un programma.'),
    heritage: 'unesco',
    currentUse: null,
    detailRect: { x: 0.2, y: 0.2, w: 0.3, h: 0.3 },
    image: {
      commonsFile: 'File:Il_Duomo_di_Firenze.jpg',
      photographer: 'Jane Photographer',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Il_Duomo_di_Firenze.jpg',
      width: 4000,
      height: 3000,
    },
    dossier: ls('Dossier.', 'Ficha.', 'Scheda.'),
    context: null,
    sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q3699556', title: 'Q3699556', license: null }],
    tier: 'canon',
    ...patch,
  };
}

function movement(patch: Partial<Movement> = {}): Movement {
  return {
    id: 'renaissance',
    family: 'renaissance-baroque',
    name: 'Renaissance Architecture',
    blurb: ls('A revival of classical orders.', 'Un renacer de los órdenes clásicos.', 'Una rinascita degli ordini classici.'),
    approxSpan: { start: 1400, end: 1600 },
    sources: [{ kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Renaissance_architecture', title: 'Renaissance architecture', license: 'CC BY-SA 4.0' }],
    ...patch,
  };
}

describe('buildingJsonLd', () => {
  it('emits a LandmarksOrHistoricalBuildings node with the required fields', () => {
    const a = architect({ id: 'filippo-brunelleschi', name: 'Filippo Brunelleschi', wikidataId: 'Q154934' });
    const b = building();
    const node = buildingJsonLd(b, a);

    expect(node['@type']).toBe('LandmarksOrHistoricalBuildings');
    expect(node.name).toBe('Dome of Santa Maria del Fiore');
    expect(node.dateCreated).toBe('1436');
    expect(node.geo).toEqual({ '@type': 'GeoCoordinates', latitude: 43.7727, longitude: 11.25582 });

    // image must be an ABSOLUTE url, not a bare path.
    expect(node.image.startsWith(SITE_URL)).toBe(true);
    expect(node.image).toContain('cupola-di-santa-maria-del-fiore');

    // creator is a nested Person carrying the architect's Wikidata sameAs.
    expect(node.creator).toEqual({
      '@type': 'Person',
      name: 'Filippo Brunelleschi',
      jobTitle: 'Architect',
      sameAs: 'https://www.wikidata.org/wiki/Q154934',
      birthDate: String(a.born),
      deathDate: String(a.died),
    });
  });

  it('emits the building\'s own sameAs from wikidataId', () => {
    const b = building({ wikidataId: 'Q3699556' });
    const node = buildingJsonLd(b, architect());
    expect(node.sameAs).toBe('https://www.wikidata.org/wiki/Q3699556');
  });

  it('omits sameAs gracefully when the building has no Wikidata item', () => {
    const b = building({ wikidataId: null });
    const node = buildingJsonLd(b, architect());
    expect(node.sameAs).toBeUndefined();
    expect('sameAs' in node).toBe(false);
  });

  it('falls back to inception when completed is null', () => {
    const a = architect({ wikidataId: null });
    const b = building({ completed: null, inception: 1420 });
    expect(buildingJsonLd(b, a).dateCreated).toBe('1420');
  });

  it('omits sameAs gracefully when the architect has no Wikidata item', () => {
    const a = architect({ wikidataId: null });
    const b = building();
    const node = buildingJsonLd(b, a);

    expect(node.creator.sameAs).toBeUndefined();
    expect('sameAs' in node.creator).toBe(false);
  });
});

describe('architectJsonLd', () => {
  it('emits a Person node carrying the Wikidata sameAs', () => {
    const a = architect({ name: 'Lina Bo Bardi', wikidataId: 'Q733498' });
    const node = architectJsonLd(a);

    expect(node['@type']).toBe('Person');
    expect(node.name).toBe('Lina Bo Bardi');
    expect(node.jobTitle).toBe('Architect');
    expect(node.sameAs).toBe('https://www.wikidata.org/wiki/Q733498');
  });

  it('omits sameAs gracefully when wikidataId is null', () => {
    const a = architect({ wikidataId: null });
    const node = architectJsonLd(a);

    expect(node.sameAs).toBeUndefined();
    expect('sameAs' in node).toBe(false);
  });
});

describe('movementJsonLd', () => {
  it('emits a defined-term node describing the movement', () => {
    const m = movement();
    const node = movementJsonLd(m);

    expect(node.name).toBe('Renaissance Architecture');
    expect(node.description).toBe(m.blurb.en);
    expect(node.url).toContain('/movement/renaissance');
  });

  it('omits sameAs when no source in the movement is wikidata-kind', () => {
    const m = movement();
    expect(movementJsonLd(m).sameAs).toBeUndefined();
    expect('sameAs' in movementJsonLd(m)).toBe(false);
  });

  it('surfaces sameAs from a recorded wikidata-kind source', () => {
    const m = movement({
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Renaissance_architecture', title: 'Renaissance architecture', license: 'CC BY-SA 4.0' },
        { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q45604', title: 'Q45604', license: null },
      ],
    });
    expect(movementJsonLd(m).sameAs).toBe('https://www.wikidata.org/wiki/Q45604');
  });
});

describe('websiteJsonLd', () => {
  it('emits a WebSite node with no fake SearchAction', () => {
    const node = websiteJsonLd();
    expect(node['@type']).toBe('WebSite');
    expect(node.name).toBe('Architectle');
    expect(node.url).toBe(SITE_URL);
    expect('potentialAction' in node).toBe(false);
  });
});

describe('breadcrumbJsonLd', () => {
  it('emits a positioned BreadcrumbList from the given trail', () => {
    const node = breadcrumbJsonLd([
      { name: 'Architectle', url: SITE_URL },
      { name: 'Buildings', url: `${SITE_URL}/buildings` },
      { name: 'Dome of Santa Maria del Fiore', url: `${SITE_URL}/building/cupola-di-santa-maria-del-fiore` },
    ]);

    expect(node['@type']).toBe('BreadcrumbList');
    expect(node.itemListElement).toHaveLength(3);
    expect(node.itemListElement[0]).toEqual({ '@type': 'ListItem', position: 1, name: 'Architectle', item: SITE_URL });
    expect(node.itemListElement[2].position).toBe(3);
  });
});

describe('JSON-LD round-tripping', () => {
  it('every emitted object round-trips through JSON.parse(JSON.stringify(x)) unchanged', () => {
    const cases = [
      buildingJsonLd(building(), architect({ wikidataId: 'Q1' })),
      buildingJsonLd(building({ wikidataId: null }), architect({ wikidataId: null })),
      architectJsonLd(architect({ wikidataId: 'Q1' })),
      architectJsonLd(architect({ wikidataId: null, born: null, died: null })),
      movementJsonLd(movement()),
      websiteJsonLd(),
      breadcrumbJsonLd([{ name: 'Architectle', url: SITE_URL }]),
    ];

    for (const node of cases) {
      const roundTripped = JSON.parse(JSON.stringify(node));
      expect(roundTripped).toEqual(node);
      // No key should hold `undefined` — JSON.stringify silently drops
      // those, which is exactly the failure mode this asserts against.
      expect(JSON.stringify(node)).not.toContain('undefined');
    }
  });
});
