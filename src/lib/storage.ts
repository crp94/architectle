import { puzzleNumber } from '@/lib/daily';

const STORAGE_KEY = 'architectle:v1';

export type GameState = {
  puzzleNumber: number;
  /**
   * The target building's id. Checked on restore alongside `puzzleNumber`
   * so a fixed `building` override (used by tests and e2e/game.spec.ts's
   * `?e2eBuilding=` escape hatch) can never restore guesses that were
   * recorded against a *different* building sharing today's puzzle
   * number — see GameBoard.tsx's restore effect.
   */
  buildingId: string;
  guesses: string[];
  solved: boolean;
  finished: boolean;
  stats: {
    played: number;
    wins: number;
    streak: number;
    maxStreak: number;
    distribution: number[];
  };
};

function isGameState(value: unknown): value is GameState {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.puzzleNumber === 'number' &&
    typeof v.buildingId === 'string' &&
    Array.isArray(v.guesses) &&
    typeof v.solved === 'boolean' &&
    typeof v.finished === 'boolean' &&
    typeof v.stats === 'object' &&
    v.stats !== null
  );
}

/**
 * Loads today's saved game state. Every localStorage access is wrapped: a
 * throw (private browsing, blocked site data) or malformed/stale content all
 * degrade to `null` rather than crashing the game.
 */
export function loadState(): GameState | null {
  let raw: string | null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
  if (raw === null) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  if (!isGameState(parsed)) return null;
  if (parsed.puzzleNumber !== puzzleNumber(new Date())) return null;

  return parsed;
}

/** Persists the game state. Swallows any throw from a blocked or full store. */
export function saveState(s: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    // Storage is unavailable or full; the round simply won't resume/persist.
  }
}

/** Clears the saved game state. Swallows any throw from a blocked store. */
export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to do if the store is unavailable.
  }
}
