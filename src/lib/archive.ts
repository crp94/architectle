// Cross-link derivations for the static archive (design spec §8): building
// -> architect -> movement -> contemporaries, and the reverse (movement ->
// its architects and buildings). Pure functions over the pool so every
// archive page (and generateStaticParams) reads the same definitions.
import { ARCHITECTS, BUILDINGS } from '@/lib/pool';
import { MOVEMENTS } from '@/data/movements';
import type { Architect } from '@/types/architect';
import type { Building } from '@/types/building';
import type { MovementId } from '@/types/movement';

/** Every building this architect is credited on, as principal architect or
 * as a co-credit (design spec: coArchitects is display-only, but an
 * archive page for a co-credited architect should still show their work). */
export function buildingsByArchitect(architectId: string): Building[] {
  return BUILDINGS.filter(
    (b) => b.architectId === architectId || (b.coArchitects?.includes(architectId) ?? false),
  );
}

/** Every architect who lists `movementId` among their movements, primary or
 * not. 'unaffiliated' architects never match any movement. */
export function architectsByMovement(movementId: MovementId): Architect[] {
  return ARCHITECTS.filter(
    (a) => a.movements !== 'unaffiliated' && a.movements.some((m) => m.id === movementId),
  );
}

/** Every building credited (principal or co-credit) to an architect who
 * shares this movement — the buildings a movement's page shows. */
export function buildingsByMovement(movementId: MovementId): Building[] {
  const ids = new Set(architectsByMovement(movementId).map((a) => a.id));
  return BUILDINGS.filter(
    (b) => ids.has(b.architectId) || (b.coArchitects?.some((id) => ids.has(id)) ?? false),
  );
}

/** Other architects sharing any of this architect's movements — the
 * "contemporaries" cross-link from an architect page. Excludes the
 * architect themselves; 'unaffiliated' architects have none. */
export function contemporariesOf(architect: Architect): Architect[] {
  if (architect.movements === 'unaffiliated') return [];
  const movementIds = new Set(architect.movements.map((m) => m.id));
  return ARCHITECTS.filter((a) => {
    if (a.id === architect.id) return false;
    if (a.movements === 'unaffiliated') return false;
    return a.movements.some((m) => movementIds.has(m.id));
  });
}

/** Every movement id actually referenced by at least one architect in the
 * pool — the archive only generates pages for movements that have
 * something to show, not every id `src/data/movements.ts` happens to
 * define (some are defined for future curation and aren't in use yet). */
export function referencedMovementIds(): MovementId[] {
  const ids = new Set<MovementId>();
  for (const a of ARCHITECTS) {
    if (a.movements === 'unaffiliated') continue;
    for (const m of a.movements) ids.add(m.id);
  }
  return [...ids].sort();
}

export function movementById(id: string) {
  return Object.hasOwn(MOVEMENTS, id) ? MOVEMENTS[id] : undefined;
}
