// schema.org structured data for the archive (design spec §8). Every export
// here returns a plain, JSON-serializable object — no `undefined` values,
// no class instances, no Dates — so it can be dropped verbatim into a
// `<script type="application/ld+json">` via `JSON.stringify`.
//
// Type choices:
// - Building -> `LandmarksOrHistoricalBuildings`: the brief's own call: a
//   schema.org type built for exactly this (a built landmark with a
//   `geo`), closer than the generic `Building` (a schema.org sub-type of
//   `Place`, RealEstate-flavoured) or `CivicStructure`.
// - Architect -> `Person`: schema.org has no `Architect` type; `Person`
//   plus `jobTitle`/`sameAs` is the documented pattern for a named
//   professional.
// - Movement -> `DefinedTerm`: a movement here is a curated taxonomy label
//   (src/data/movements.ts), not a physical or creative work — `DefinedTerm`
//   (optionally scoped to a `DefinedTermSet`) is schema.org's shape for
//   exactly that, and reads better than forcing it into `Thing` or
//   `CreativeWork`.
import type { Architect } from '@/types/architect';
import type { Building } from '@/types/building';
import type { Movement } from '@/types/movement';
import { SITE_URL } from '@/lib/site';

type JsonLdPerson = {
  '@type': 'Person';
  name: string;
  sameAs?: string;
  birthDate?: string;
  deathDate?: string;
};

/** `null` wikidataId is a real, valid pool state (no Wikidata item exists
 * for this architect/building) — resolve to `undefined` so callers can
 * spread it away instead of ever emitting a broken `wikidata.org/wiki/null`
 * link. */
function wikidataSameAs(wikidataId: string | null): string | undefined {
  return wikidataId ? `https://www.wikidata.org/wiki/${wikidataId}` : undefined;
}

/** The `Person` node shared between a standalone `architectJsonLd` and the
 * nested `creator` on `buildingJsonLd` — one place decides what counts as
 * "the architect" in structured data. */
function personNode(architect: Architect): JsonLdPerson {
  return {
    '@type': 'Person',
    name: architect.name,
    ...(wikidataSameAs(architect.wikidataId) ? { sameAs: wikidataSameAs(architect.wikidataId) } : {}),
    ...(architect.born !== null ? { birthDate: String(architect.born) } : {}),
    ...(architect.died !== null ? { deathDate: String(architect.died) } : {}),
  };
}

export function architectJsonLd(architect: Architect) {
  return {
    '@context': 'https://schema.org' as const,
    ...personNode(architect),
    url: `${SITE_URL}/architect/${architect.id}`,
  };
}

export function buildingJsonLd(building: Building, architect: Architect) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'LandmarksOrHistoricalBuildings' as const,
    name: building.name.en,
    image: `${SITE_URL}/buildings/${building.id}.avif`,
    dateCreated: String(building.completed ?? building.inception),
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: building.location.city,
      addressCountry: building.location.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates' as const,
      latitude: building.location.lat,
      longitude: building.location.lon,
    },
    creator: personNode(architect),
    url: `${SITE_URL}/building/${building.id}`,
  };
}

export function movementJsonLd(movement: Movement) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm' as const,
    name: movement.name,
    description: movement.blurb.en,
    inDefinedTermSet: `${SITE_URL}/movements`,
    url: `${SITE_URL}/movement/${movement.id}`,
  };
}
