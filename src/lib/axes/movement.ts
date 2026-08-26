import { familyOf } from '@/data/movements';
import type { Architect } from '@/types/architect';

export type MovementResult = 'EXACT' | 'SHARED' | 'FAMILY' | 'NONE';

export function compareMovement(guess: Architect, target: Architect): MovementResult {
  const guessMovements = guess.movements;
  const targetMovements = target.movements;

  // The absence of a movement label is not evidence of anything, even when
  // both architects lack one — never treat two 'unaffiliated' as a match.
  if (guessMovements === 'unaffiliated' || targetMovements === 'unaffiliated') {
    return 'NONE';
  }

  // Validate every movement id up front so an unknown id always throws,
  // regardless of whether it happens to affect the final verdict.
  for (const m of [...guessMovements, ...targetMovements]) {
    if (familyOf(m.id) === undefined) {
      throw new Error(`Unknown movement id: ${m.id}`);
    }
  }

  const guessPrimaryIds = new Set(guessMovements.filter((m) => m.primary).map((m) => m.id));
  const targetPrimaryIds = new Set(targetMovements.filter((m) => m.primary).map((m) => m.id));
  const guessIds = new Set(guessMovements.map((m) => m.id));
  const targetIds = new Set(targetMovements.map((m) => m.id));

  const bothPrimary = [...guessPrimaryIds].some((id) => targetPrimaryIds.has(id));
  if (bothPrimary) return 'EXACT';

  const sharedAnyMovement = [...guessIds].some((id) => targetIds.has(id));
  if (sharedAnyMovement) return 'SHARED';

  const guessFamilies = new Set([...guessIds].map((id) => familyOf(id)));
  const targetFamilies = new Set([...targetIds].map((id) => familyOf(id)));
  const sharedFamily = [...guessFamilies].some((f) => targetFamilies.has(f));
  if (sharedFamily) return 'FAMILY';

  return 'NONE';
}
