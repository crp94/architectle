import { MOVEMENTS } from '@/data/movements';
import type { Pool, Violation } from './schema';

const EARTH_RADIUS_KM = 6371;
// `possible-duplicate-site` targets a curation mistake — the same building
// entered twice, possibly under two ids and two slightly different names —
// not mere proximity. At the ~40-building scale a same-metro pair was
// almost certainly a mistake, so a 25 km radius alone was a fine proxy; at
// ~200 buildings a metro can legitimately hold several distinct entries
// (multiple Gaudí buildings in Barcelona, several Wright buildings in
// Chicago, etc.), so radius alone can no longer carry the rule.
//
// The radius below is deliberately NOT razor-thin, and the name-similarity
// check below it is what actually carries precision:
//   - Precision (rejecting distinct buildings): closely-sited, genuinely
//     distinct landmarks by the same architect (Gaudí's Casa Batlló and
//     Casa Milà are ~0.48 km apart on Barcelona's Passeig de Gràcia) sit
//     inside almost any radius tight enough to matter, so distance alone
//     was never going to carry precision — that job belongs to the name
//     gate below, which rejects that pair on name alone.
//   - Recall (still catching real duplicates): two entries for the same
//     building routinely sit more than a trivial "coordinate collision"
//     distance apart when one is geocoded to a street address and the
//     other to a building centroid — and this pool includes palace,
//     temple and mosque *complexes* (footprints of several hundred metres)
//     where that drift is entirely plausible. A radius tightened only far
//     enough to defeat Casa Batlló/Milà (~0.5 km) would silently miss that
//     realistic drift. 1.5 km stays well below "same city/metro" (the
//     property that made the old 25 km value wrong) while comfortably
//     covering plausible geocoding drift across one building's own site.
const DUPLICATE_SITE_RADIUS_KM = 1.5;
// Below this name-token containment ratio, two buildings are treated as
// distinct even if they sit within the radius above.
const NAME_SIMILARITY_THRESHOLD = 0.7;

// Small, purely grammatical words in the languages this pool draws names
// from — excluded so they don't inflate the containment ratio between two
// otherwise-unrelated names.
const NAME_STOPWORDS = new Set([
  'the', 'a', 'an', 'of', 'and', 'de', 'del', 'la', 'le', 'lo', 'el', 'los', 'las', 'di', 'da',
]);

// Turkish letters whose lowercase/uppercase forms don't round-trip through
// NFD + accent-stripping the way other Latin diacritics do (dotless ı/İ
// have no NFD decomposition at all, so they'd otherwise survive into the
// ASCII strip below and get replaced by a space, fragmenting one word into
// several meaningless tokens — e.g. "Kızılkule" -> "k", "z", "lkule").
// Folded to their plain-ASCII base letter before normalization so Turkish
// names (this pool curates Mimar Sinan's work) tokenize as whole words.
const TURKISH_FOLD: Record<string, string> = {
  İ: 'I', ı: 'i', Ğ: 'G', ğ: 'g', Ş: 'S', ş: 's', Ç: 'C', ç: 'c', Ö: 'O', ö: 'o', Ü: 'U', ü: 'u',
};

function normalizedNameTokens(name: string): Set<string> {
  const cleaned = name
    .replace(/[İıĞğŞşÇçÖöÜü]/g, (ch) => TURKISH_FOLD[ch])
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining accents (NFD diacritics)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ');
  return new Set(cleaned.split(/\s+/).filter((t) => t.length > 0 && !NAME_STOPWORDS.has(t)));
}

// A containment ratio (shared tokens over the *smaller* name's token count)
// rather than a symmetric similarity: it's built to recognize one name as a
// fuller form of the other — e.g. "Sagrada Família" is entirely contained in
// "Temple Expiatori de la Sagrada Família" — which is exactly the shape a
// duplicate-entered-under-a-different-name mistake takes.
//
// Assumes `name.en` is a Latin-script (transliterated, where needed) form —
// the only script this tokenizer folds/strips correctly. If a curated `en`
// name ever holds Arabic, Japanese, Cyrillic or Greek characters, both
// token sets would collapse to empty here and the size===0 guard below
// would silently skip the pair — a genuine duplicate missed with no error,
// distinct from the empty-string case `localized-complete` already catches.
function namesLikelySameBuilding(a: string, b: string): boolean {
  const tokensA = normalizedNameTokens(a);
  const tokensB = normalizedNameTokens(b);
  if (tokensA.size === 0 || tokensB.size === 0) return false;
  let shared = 0;
  for (const t of tokensA) if (tokensB.has(t)) shared += 1;
  return shared / Math.min(tokensA.size, tokensB.size) >= NAME_SIMILARITY_THRESHOLD;
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

// Great-circle distance between two lat/lon points, in kilometres.
function haversineKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }): number {
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function validateCrossRefs(pool: Pool): Violation[] {
  const out: Violation[] = [];
  const architectsById = new Map(pool.architects.map((a) => [a.id, a]));

  // --- architect-exists ---
  for (const b of pool.buildings) {
    if (!architectsById.has(b.architectId)) {
      out.push({
        rule: 'architect-exists',
        subject: b.id,
        detail: `${b.id} references architectId "${b.architectId}", which is not in the pool`,
      });
    }
  }

  // --- co-architect-exists ---
  // Same referential-integrity check as `architect-exists` above, applied to
  // the display-only `coArchitects` list rather than the answer-key
  // `architectId`. Kept as a sibling rule (not folded into `architect-exists`)
  // so a curator can tell from the rule name alone whether the broken
  // reference is the building's answer or a co-credit.
  for (const b of pool.buildings) {
    for (const coId of b.coArchitects ?? []) {
      if (!architectsById.has(coId)) {
        out.push({
          rule: 'co-architect-exists',
          subject: b.id,
          detail: `${b.id} references coArchitects id "${coId}", which is not in the pool`,
        });
      }
    }
  }

  // --- co-architect-duplicate ---
  // Two distinct ways a `coArchitects` list can duplicate a credit rather
  // than add a genuine second author: (1) it re-lists the building's own
  // `architectId`, or (2) it lists the same co-architect more than once.
  // Both are curation mistakes, not partnerships, so both are hard failures.
  for (const b of pool.buildings) {
    const coArchitects = b.coArchitects ?? [];
    if (coArchitects.includes(b.architectId)) {
      out.push({
        rule: 'co-architect-duplicate',
        subject: b.id,
        detail: `${b.id} lists its own architectId "${b.architectId}" in coArchitects — a co-credit must name a different architect`,
      });
    }
    const seen = new Set<string>();
    const repeated = new Set<string>();
    for (const coId of coArchitects) {
      if (seen.has(coId)) repeated.add(coId);
      seen.add(coId);
    }
    if (repeated.size > 0) {
      out.push({
        rule: 'co-architect-duplicate',
        subject: b.id,
        detail: `${b.id} lists coArchitects id(s) [${[...repeated].join(', ')}] more than once`,
      });
    }
  }

  // --- architect-orphan ---
  // An architect co-credited on a building — never the answer, but a
  // legitimate second author — is enough to keep them out of this rule:
  // they genuinely worked on something in the pool, so they belong in it
  // even though they'll never be the day's target (see `roster()` in
  // src/lib/pool.ts, which still keys strictly off `architectId`).
  const architectIdsWithBuildings = new Set<string>();
  for (const b of pool.buildings) {
    architectIdsWithBuildings.add(b.architectId);
    for (const coId of b.coArchitects ?? []) architectIdsWithBuildings.add(coId);
  }
  for (const a of pool.architects) {
    if (!architectIdsWithBuildings.has(a.id)) {
      out.push({
        rule: 'architect-orphan',
        subject: a.id,
        detail: `${a.id} has no buildings in the pool`,
      });
    }
  }

  // --- movement-resolves ---
  for (const a of pool.architects) {
    if (a.movements === 'unaffiliated') continue;
    for (const m of a.movements) {
      if (!MOVEMENTS[m.id]) {
        out.push({
          rule: 'movement-resolves',
          subject: a.id,
          detail: `${a.id} references movement id "${m.id}", which is not in MOVEMENTS`,
        });
      }
    }
  }

  // --- floruit-consistent ---
  for (const a of pool.architects) {
    if (a.floruit.override) continue;
    const mismatches = pool.buildings
      .filter((b) => b.architectId === a.id)
      .map((b) => ({ id: b.id, year: b.completed ?? b.inception }))
      .filter(({ year }) => year < a.floruit.start || year > a.floruit.end);
    if (mismatches.length > 0) {
      const summary = mismatches.map(({ id, year }) => `${id} (${year})`).join(', ');
      out.push({
        rule: 'floruit-consistent',
        subject: a.id,
        detail: `${a.id} floruit [${a.floruit.start}-${a.floruit.end}] is inconsistent with: ${summary}`,
      });
    }
  }

  // --- possible-duplicate-site ---
  // Flags a likely curation mistake, not proximity: both a tight coordinate
  // match AND a name-similarity match are required, so two distinct,
  // differently-named buildings that merely share a city (or even a block)
  // never trip this.
  for (let i = 0; i < pool.buildings.length; i += 1) {
    for (let j = i + 1; j < pool.buildings.length; j += 1) {
      const bi = pool.buildings[i];
      const bj = pool.buildings[j];
      const distance = haversineKm(bi.location, bj.location);
      if (distance > DUPLICATE_SITE_RADIUS_KM) continue;
      if (!namesLikelySameBuilding(bi.name.en, bj.name.en)) continue;
      out.push({
        rule: 'possible-duplicate-site',
        subject: `${bi.id},${bj.id}`,
        detail: `${bi.id} ("${bi.name.en}") and ${bj.id} ("${bj.name.en}") are ${distance.toFixed(3)} km apart with near-identical names — likely the same building entered twice (within ${DUPLICATE_SITE_RADIUS_KM} km, name-similarity ≥ ${NAME_SIMILARITY_THRESHOLD})`,
      });
    }
  }

  return out;
}
