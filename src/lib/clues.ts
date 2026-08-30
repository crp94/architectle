// The "case file" clue ladder (design spec §4). Pure and locale-independent:
// every clue carries raw data (a year, a country code, an ImageRecord, an
// architect id...) — never a rendered string — so the UI (Wave V2-4) is
// solely responsible for translating a clue into copy via
// `t(locale, CLUE_I18N_KEYS[clue.kind], ...)`.
//
// `GameState` (src/lib/storage.ts) is unchanged: the whole ladder is a pure
// function of (building, architect, siblingBuildings, missCount) that the
// UI recomputes on every render — nothing about which clues are unlocked is
// ever persisted separately from the guess count already being saved.
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { ImageRecord, Material, Typology } from '@/types/common';
import type { MovementId } from '@/types/movement';

// `yearKind` distinguishes a building that has actually finished
// construction (`completed`) from one still under construction/of unknown
// completion, whose year is `inception` instead (design spec review B3/B4
// Critical #2: Sagrada Família and 6 other pool buildings carry
// `completed: null`, and silently falling back to `inception` under a
// "Completed" label misrepresents a building that isn't finished — the UI
// must render a truthful "Begun" label whenever `yearKind` is `'begun'`).
export type YearClue = { kind: 'year'; year: number; yearKind: 'completed' | 'begun' };
export type CountryClue = { kind: 'country'; countryCode: string };
export type TypologyMaterialClue = { kind: 'typology-material'; typology: Typology; material: Material };
export type SecondPhotoClue = { kind: 'second-photo'; image: ImageRecord };
export type MovementSiblingClue = {
  kind: 'movement-sibling';
  // null exactly when the architect is `'unaffiliated'` (src/types/
  // architect.ts) — never invented, per the project's `unaffiliated` rule.
  movementId: MovementId | null;
  // null only when no sibling building was available to show (an
  // architect whose only pool building is the target itself). Never the
  // target building — see `pickSibling` below.
  sibling: { id: string; name: Building['name'] } | null;
};

export type Clue = YearClue | CountryClue | TypologyMaterialClue | SecondPhotoClue | MovementSiblingClue;

// Keys the UI (Wave V2-4) is expected to add to `src/lib/i18n.ts`'s STRINGS
// table — one label per clue kind. Exported so the UI task has a single,
// typo-proof source for which keys it must define; this module never reads
// or calls `t()` itself.
export const CLUE_I18N_KEYS: Record<Clue['kind'], string> = {
  year: 'clueYear',
  country: 'clueCountry',
  'typology-material': 'clueTypologyMaterial',
  'second-photo': 'clueSecondPhoto',
  'movement-sibling': 'clueMovementSibling',
};

function primaryMovementId(architect: Architect): MovementId | null {
  if (architect.movements === 'unaffiliated') return null;
  const primary = architect.movements.find((m) => m.primary);
  return (primary ?? architect.movements[0])?.id ?? null;
}

// Never the target building, per design spec §4: filters the target out of
// whatever candidate list the caller passes (a caller may pass a list that
// still includes the target — this is the one place that's guaranteed
// safe), then deterministically picks the first remaining building. Returns
// null when nothing is left, rather than fabricating a sibling.
function pickSibling(building: Building, siblingBuildings: Building[]): { id: string; name: Building['name'] } | null {
  const sibling = siblingBuildings.find((b) => b.id !== building.id);
  return sibling ? { id: sibling.id, name: sibling.name } : null;
}

// One producer per schedule slot, in miss order. A producer returns `null`
// when its clue has nothing to show (currently only the second-photo slot,
// when `extraImages` is empty/absent) — see the degradation rule below.
type ClueProducer = () => Clue | null;

function buildProducers(building: Building, architect: Architect, siblingBuildings: Building[]): ClueProducer[] {
  return [
    () => (building.completed !== null
      ? { kind: 'year', year: building.completed, yearKind: 'completed' }
      : { kind: 'year', year: building.inception, yearKind: 'begun' }),
    () => ({ kind: 'country', countryCode: building.location.countryCode }),
    () => ({ kind: 'typology-material', typology: building.typology, material: architect.signatureMaterial }),
    () => {
      const image = building.extraImages?.[0];
      return image ? { kind: 'second-photo', image } : null;
    },
    () => ({
      kind: 'movement-sibling',
      movementId: primaryMovementId(architect),
      sibling: pickSibling(building, siblingBuildings),
    }),
  ];
}

// Returns every clue unlocked by `missCount` wrong guesses so far. A
// producer returning `null` (only the second-photo slot lacking
// `extraImages`) is skipped WITHOUT consuming a position in the output —
// the next producer is promoted up instead, so the ladder degrades
// gracefully to a shorter total (4 clues, not 5) rather than ever leaving a
// blank slot. `missCount` is clamped by simply running out of producers,
// so any `missCount` >= the number of real clues returns all of them.
export function cluesAt(
  building: Building,
  architect: Architect,
  siblingBuildings: Building[],
  missCount: number,
): Clue[] {
  if (missCount <= 0) return [];

  const producers = buildProducers(building, architect, siblingBuildings);
  const out: Clue[] = [];
  for (const produce of producers) {
    if (out.length >= missCount) break;
    const clue = produce();
    if (clue) out.push(clue);
  }
  return out;
}
