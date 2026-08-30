import { puzzleNumber } from '@/lib/daily';

const STORAGE_KEY = 'architectle:v1';
// A separate, day-independent record (codereview finding #1): stats used to
// live embedded inside the day-keyed GameState below, so `loadState()`
// returning null for any day but today wiped `played`/`streak`/etc. back to
// zero every morning. Keeping stats under their own key means they survive
// past the daily round that produced them.
const STATS_KEY = 'architectle:v1:stats';

/**
 * One finished (or in-progress) daily round. Deliberately carries ONLY
 * round-scoped fields — see `Stats` below for the persistent counters that
 * used to be embedded here.
 */
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
};

/**
 * The persistent, cross-day counters (codereview finding #1). Lives under
 * `STATS_KEY`, independent of any single day's `GameState`.
 */
export type Stats = {
  played: number;
  wins: number;
  streak: number;
  maxStreak: number;
  distribution: number[];
  /**
   * The puzzle number of the player's most recent WIN (not merely the most
   * recent round played), or `null` if they've never won one. This is the
   * anchor `nextStats` reads to decide whether today's win continues an
   * unbroken day-over-day streak — winning puzzle N when
   * `lastWinPuzzle === N - 1` continues it; any other win (a missed day, or
   * a first-ever win) starts a fresh streak of 1.
   */
  lastWinPuzzle: number | null;
};

function isGameState(value: unknown): value is GameState {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.puzzleNumber === 'number' &&
    typeof v.buildingId === 'string' &&
    Array.isArray(v.guesses) &&
    typeof v.solved === 'boolean' &&
    typeof v.finished === 'boolean'
  );
}

function isNumberArray(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((n) => typeof n === 'number');
}

// Guards every numeric field individually and `Array.isArray(distribution)`
// (codereview finding #3): a malformed `{}` — or a `distribution` that
// isn't even an array — used to pass the old, looser
// `typeof v.stats === 'object'` guard and only crash later, deep inside
// `statsSummary`'s `Math.max(1, ...stats.distribution)` or `handleGuess`'s
// `[...prev.distribution]`. Never crash on a malformed store: a value that
// fails this degrades to `defaultStats()` instead.
function isStats(value: unknown): value is Stats {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.played === 'number' &&
    typeof v.wins === 'number' &&
    typeof v.streak === 'number' &&
    typeof v.maxStreak === 'number' &&
    isNumberArray(v.distribution) &&
    (v.lastWinPuzzle === null || typeof v.lastWinPuzzle === 'number')
  );
}

// The pre-separation combined `GameState.stats` shape had no
// `lastWinPuzzle` field at all — validated on its own so `loadStats()` can
// migrate one of these into the new record (below) rather than discarding
// a returning player's history the first time they load after this change
// ships.
function isLegacyStats(value: unknown): value is Omit<Stats, 'lastWinPuzzle'> {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.played === 'number' &&
    typeof v.wins === 'number' &&
    typeof v.streak === 'number' &&
    typeof v.maxStreak === 'number' &&
    isNumberArray(v.distribution)
  );
}

export function defaultStats(): Stats {
  return {
    played: 0, wins: 0, streak: 0, maxStreak: 0, distribution: [0, 0, 0, 0, 0, 0], lastWinPuzzle: null,
  };
}

/**
 * Advances `prev` by one finished daily round (codereview finding #1's
 * streak semantics). A win only CONTINUES the streak when the player's
 * last win was exactly the previous puzzle (`prev.lastWinPuzzle ===
 * puzzleNum - 1`); any other win — a missed day, or the player's first-ever
 * win — starts a fresh streak of 1. A loss always resets the streak to 0.
 * `maxStreak` is the running high-water mark, never decremented.
 */
export function nextStats(prev: Stats, solved: boolean, guessesUsed: number, puzzleNum: number): Stats {
  const distribution = [...prev.distribution];
  if (solved) distribution[guessesUsed - 1] = (distribution[guessesUsed - 1] ?? 0) + 1;
  const streak = solved
    ? (prev.lastWinPuzzle === puzzleNum - 1 ? prev.streak + 1 : 1)
    : 0;
  return {
    played: prev.played + 1,
    wins: prev.wins + (solved ? 1 : 0),
    streak,
    maxStreak: Math.max(prev.maxStreak, streak),
    distribution,
    lastWinPuzzle: solved ? puzzleNum : prev.lastWinPuzzle,
  };
}

/**
 * Loads the persistent stats record. Every localStorage access and
 * `JSON.parse` is guarded exactly like `loadState()` below: any throw or
 * malformed content degrades to `defaultStats()`, never a crash.
 *
 * On a first load where the new `STATS_KEY` record doesn't exist yet, this
 * checks for a pre-separation combined save still sitting under
 * `STORAGE_KEY` (this change's own migration path) and, if its embedded
 * `stats` is a valid legacy shape, migrates it into the new record — a
 * returning player's played/wins/streak history is carried forward rather
 * than silently reset to zero.
 */
export function loadStats(): Stats {
  let raw: string | null;
  try {
    raw = localStorage.getItem(STATS_KEY);
  } catch {
    return defaultStats();
  }

  if (raw !== null) {
    try {
      const parsed: unknown = JSON.parse(raw);
      if (isStats(parsed)) return parsed;
    } catch {
      // Malformed JSON — fall through to the default below.
    }
    return defaultStats();
  }

  try {
    const oldRaw = localStorage.getItem(STORAGE_KEY);
    if (oldRaw !== null) {
      const oldParsed: unknown = JSON.parse(oldRaw);
      if (oldParsed !== null && typeof oldParsed === 'object') {
        const o = oldParsed as Record<string, unknown>;
        if (isLegacyStats(o.stats)) {
          const migrated: Stats = {
            ...o.stats,
            // Best-effort: if the legacy record's own last round was a win,
            // carry its puzzleNumber forward as `lastWinPuzzle` so a very
            // next-day win still continues the streak. A recorded loss (or
            // an unfinished round) leaves it `null` — consistent with a
            // loss having already reset `streak` to 0 in that same record.
            lastWinPuzzle: o.solved === true && typeof o.puzzleNumber === 'number' ? o.puzzleNumber : null,
          };
          saveStats(migrated);
          return migrated;
        }
      }
    }
  } catch {
    // Nothing usable to migrate from — fall through to a clean default.
  }

  return defaultStats();
}

/** Persists the stats record. Swallows any throw from a blocked or full store. */
export function saveStats(stats: Stats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // Storage is unavailable or full; stats simply won't persist this round.
  }
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
