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
  jobTitle: 'Architect';
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
 * "the architect" in structured data. `jobTitle` is the documented
 * schema.org pattern for a named professional when no dedicated `Architect`
 * type exists (see the module comment above) — every architect in this
 * pool is here BECAUSE they designed buildings, so the claim is always
 * true and needs no per-record data to back it. */
function personNode(architect: Architect): JsonLdPerson {
  return {
    '@type': 'Person',
    name: architect.name,
    jobTitle: 'Architect',
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
  const sameAs = wikidataSameAs(building.wikidataId);
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'LandmarksOrHistoricalBuildings' as const,
    name: building.name.en,
    image: `${SITE_URL}/buildings/${building.id}.avif`,
    dateCreated: String(building.completed ?? building.inception),
    ...(sameAs ? { sameAs } : {}),
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

/** Pulls a `sameAs` straight out of a movement's own recorded provenance —
 * `Movement` (unlike `Building`/`Architect`) has no dedicated `wikidataId`
 * field, but its `sources` array often already carries a `kind: 'wikidata'`
 * entry (src/types/common.ts). Reusing that recorded URL is real, sourced
 * data; inventing a `wikidataId` field or a Wikidata link with no backing
 * source would not be. */
function movementSameAs(movement: Movement): string | undefined {
  return movement.sources.find((s) => s.kind === 'wikidata')?.url;
}

export function movementJsonLd(movement: Movement) {
  const sameAs = movementSameAs(movement);
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm' as const,
    name: movement.name,
    description: movement.blurb.en,
    ...(sameAs ? { sameAs } : {}),
    inDefinedTermSet: `${SITE_URL}/movements`,
    url: `${SITE_URL}/movement/${movement.id}`,
  };
}

/**
 * The site-level `WebSite` node (design spec §7), added once on the home
 * page. Deliberately carries NO `potentialAction`/`SearchAction`: nothing
 * in this app exposes a real search endpoint (`/architects` is a static,
 * unfiltered index — no `?q=` handling anywhere), and a `SearchAction`
 * pointing at a URL that doesn't actually search anything would be fake
 * structured data. If a real search surface is ever added, this is where
 * its `SearchAction` belongs.
 */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'WebSite' as const,
    name: 'Architectle',
    url: SITE_URL,
  };
}

export type BreadcrumbItem = { name: string; url: string };

/**
 * A `BreadcrumbList` (design spec §7) for the archive detail pages —
 * building/architect/movement — each of which sits two levels below home
 * (home -> index -> detail). Generic over `items` so every call site
 * supplies its own trail rather than this module guessing route shapes.
 */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
