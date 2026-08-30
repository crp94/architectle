// Presentational data shared between the post-game reveal
// (src/components/reveal/Reveal.tsx, Task 12) and the static archive pages
// (Task 13): the four-cell fact strip, the provenance line, and the
// architect subtitle (span + movement label). Pulled out to one place so
// the archive doesn't reimplement — and drift from — the reveal's reading
// of the same `Building`/`Architect` fields.
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { ImageRecord, Material, Typology } from '@/types/common';
import type { FamilyId } from '@/types/movement';
import type { GameState } from '@/lib/storage';
import { t, type Locale } from '@/lib/i18n';
import { MOVEMENTS } from '@/data/movements';

export const TYPOLOGY_KEY: Record<Typology, string> = {
  housing: 'typologyHousing',
  civic: 'typologyCivic',
  sacral: 'typologySacral',
  cultural: 'typologyCultural',
  commercial: 'typologyCommercial',
  industrial: 'typologyIndustrial',
  educational: 'typologyEducational',
  infrastructure: 'typologyInfrastructure',
  tower: 'typologyTower',
  domestic: 'typologyDomestic',
};

export const MATERIAL_KEY: Record<Material, string> = {
  concrete: 'materialConcrete',
  brick: 'materialBrick',
  'steel-and-glass': 'materialSteelGlass',
  timber: 'materialTimber',
  stone: 'materialStone',
  earth: 'materialEarth',
  mixed: 'materialMixed',
};

/** Best-effort human label for the architect's dominant movement (design
 * spec §4.4's "unaffiliated never matches anything" carries over here: an
 * unaffiliated architect gets a plain label, never an invented one).
 * Movement names (`Movement.name` in src/data/movements.ts) are not
 * localized in the data — they're proper nouns treated the same across
 * locales, the same way "Brutalism" reads unchanged in en/es/it prose. */
export function architectMovementLabel(architect: Architect, locale: Locale): string {
  if (architect.movements === 'unaffiliated') return t(locale, 'architectUnaffiliated');
  const primary = architect.movements.find((m) => m.primary) ?? architect.movements[0];
  if (!primary) return t(locale, 'architectUnaffiliated');
  return MOVEMENTS[primary.id]?.name ?? primary.id;
}

export function architectSpan(architect: Architect): string {
  const born = architect.born ?? '?';
  const died = architect.died ?? '—';
  return `${born}–${died}`;
}

export type FactCell = { key: string; label: string; value: string };

export function buildFacts(building: Building, locale: Locale): FactCell[] {
  const completed = building.completed !== null ? String(building.completed) : '—';
  const location = `${building.location.city}, ${building.location.countryCode}`;
  const typology = t(locale, TYPOLOGY_KEY[building.typology]);
  const material = building.materials.map((m) => t(locale, MATERIAL_KEY[m])).join(' / ');
  return [
    { key: 'completed', label: t(locale, 'factCompleted'), value: completed },
    { key: 'location', label: t(locale, 'factLocation'), value: location },
    { key: 'typology', label: t(locale, 'factTypology'), value: typology },
    { key: 'material', label: t(locale, 'factMaterial'), value: material },
  ];
}

export const FAMILY_KEY: Record<FamilyId, string> = {
  classical: 'familyClassical',
  medieval: 'familyMedieval',
  islamic: 'familyIslamic',
  'renaissance-baroque': 'familyRenaissanceBaroque',
  revivalist: 'familyRevivalist',
  modernism: 'familyModernism',
  postmodernism: 'familyPostmodernism',
  contemporary: 'familyContemporary',
  vernacular: 'familyVernacular',
};

/** Human label for a movement's `FamilyId` (used on the movement archive
 * page) — routed through i18n.ts like every other player-facing label,
 * rather than titlecasing the raw enum id. */
export function familyLabel(family: FamilyId, locale: Locale): string {
  return t(locale, FAMILY_KEY[family]);
}

/** Short in-game photographer credit (design spec §5: "photographer credit
 * visible in-game" under the gallery frame, previously reveal-only) — just
 * the photographer + licence, not the full `provenanceLine` (which also
 * carries the Wikidata id and Commons filename, appropriate for the
 * post-game reveal but too long for a caption shown during play). */
export function imageCredit(image: ImageRecord, locale: Locale): string {
  return `${t(locale, 'provenancePhotographerLabel')}: ${image.photographer} · ${t(locale, 'provenanceLicenseLabel')}: ${image.license}`;
}

/** One-line autocomplete descriptor (design spec §4: "primary movement +
 * typology" — no new curated field, purely derived from data already on
 * `Architect`). Reuses `architectMovementLabel`'s `unaffiliated` handling
 * rather than inventing a movement label for an architect who has none. */
export function architectDescriptor(architect: Architect, locale: Locale): string {
  const movement = architectMovementLabel(architect, locale);
  const typology = t(locale, TYPOLOGY_KEY[architect.primaryTypology]);
  return `${movement} · ${typology}`;
}

export function provenanceLine(building: Building, locale: Locale): string {
  const wikidata = building.wikidataId
    ? `${t(locale, 'provenanceWikidataLabel')} ${building.wikidataId}`
    : t(locale, 'provenanceNoWikidata');
  const parts = [
    wikidata,
    `${t(locale, 'provenanceCommonsLabel')}: ${building.image.commonsFile}`,
    `${t(locale, 'provenancePhotographerLabel')}: ${building.image.photographer}`,
    `${t(locale, 'provenanceLicenseLabel')}: ${building.image.license}`,
  ];
  return parts.join(' · ');
}

/**
 * Public path to one of a building's `extraImages` entries (design spec
 * §6). Mirrors `fetchImages.ts`'s `targetPath` convention exactly:
 * `extraImages[0]` is fetched to `<id>-2.avif`, `extraImages[1]` to
 * `<id>-3.avif` — the primary `image` keeps the unsuffixed `<id>.avif` and
 * is addressed directly by callers, not through this helper.
 */
export function extraImageSrc(buildingId: string, index: number): string {
  return `/buildings/${buildingId}-${index + 2}.avif`;
}

/** A guess count (1..6) paired with how many finished daily rounds took
 * exactly that many guesses — one row of the reveal's distribution bar. */
export type DistributionBar = { guesses: number; count: number; pct: number };

export type StatsSummary = {
  played: number;
  winPct: string;
  streak: number;
  maxStreak: number;
  distribution: DistributionBar[];
};

/**
 * Derives the reveal's stats-block display values from raw
 * `GameState.stats` (played/wins/streak/maxStreak/distribution counts) —
 * pure formatting, no game logic of its own. `winPct` is a bare
 * `"{n}%"` string (like `architectSpan`'s bare year range above): a
 * formatted statistic, not a sentence, so it isn't routed through
 * `t()`. Each distribution bar's `pct` is scaled against the single
 * largest bucket (never against `played`), so the most-common guess count
 * always draws a full-width bar and the rest read relative to it — the
 * same "distribution shape", not raw share of games played.
 */
export function statsSummary(stats: GameState['stats']): StatsSummary {
  const winPct = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
  const max = Math.max(1, ...stats.distribution);
  const distribution = stats.distribution.map((count, i) => ({
    guesses: i + 1,
    count,
    pct: Math.round((count / max) * 100),
  }));
  return {
    played: stats.played,
    winPct: `${winPct}%`,
    streak: stats.streak,
    maxStreak: stats.maxStreak,
    distribution,
  };
}
