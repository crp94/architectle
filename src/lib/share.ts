import type { Comparison } from '@/lib/axes';
import type { Locale } from '@/lib/i18n';

const SHARE_URL = 'architectle.carlosrodriguezpardo.es';

const MAX_GUESSES = 6;

function eraBlock(bucket: Comparison['era']['bucket']): string {
  switch (bucket) {
    case 'CONTEMPORARY':
      return '⬛';
    case 'NEAR':
      return '🟨';
    case 'FAR':
      return '⬜';
  }
}

function movementBlock(m: Comparison['movement']): string {
  switch (m) {
    case 'EXACT':
      return '⬛';
    case 'SHARED':
    case 'FAMILY':
      return '🟨';
    case 'NONE':
      return '⬜';
  }
}

function regionBlock(match: Comparison['region']['match']): string {
  switch (match) {
    case 'EXACT':
      return '⬛';
    case 'REGION':
      return '🟨';
    case 'NONE':
      return '⬜';
  }
}

function typologyBlock(match: Comparison['typology']['match']): string {
  switch (match) {
    case 'EXACT':
      return '⬛';
    case 'PARTIAL':
      return '🟨';
    case 'NONE':
      return '⬜';
  }
}

/** Renders one row of four blocks per guess. Never includes any identifying text. */
export function shareGrid(comparisons: Comparison[]): string {
  return comparisons
    .map((c) => eraBlock(c.era.bucket) + movementBlock(c.movement) + regionBlock(c.region.match) + typologyBlock(c.typology.match))
    .join('\n');
}

const HEADER: Record<Locale, (puzzleNumber: number, score: string) => string> = {
  en: (n, score) => `Architectle #${n} ${score}`,
  es: (n, score) => `Architectle #${n} ${score}`,
  it: (n, score) => `Architectle #${n} ${score}`,
};

/**
 * Builds the text a player pastes into social media. Takes only the comparison
 * grid, puzzle number, guess count and locale — it has no access to the
 * architect or building, so it cannot leak the answer.
 */
export function shareText(o: {
  puzzleNumber: number;
  guessesUsed: number | null;
  comparisons: Comparison[];
  locale: Locale;
  /**
   * The player's current daily win streak (`GameState.stats.streak`) after
   * this round, if tracked. A bare integer — same "cannot leak the answer"
   * guarantee as everything else this function reads, since a streak count
   * says nothing about who today's architect is. Rendered inline on the
   * header line (not a separate line) to keep the whole payload short —
   * long share texts don't get posted. Shown only once the player has
   * actually strung two-plus wins together: a single win is a win, not yet
   * "a streak" worth flagging, and omitting it there keeps the header
   * exactly as short as it always was for a first-time or occasional
   * player. Omit entirely for unlimited-mode rounds, which never track one.
   */
  streak?: number;
}): string {
  const score = o.guessesUsed === null ? `X/${MAX_GUESSES}` : `${o.guessesUsed}/${MAX_GUESSES}`;
  const streakSuffix = o.streak !== undefined && o.streak >= 2 ? ` 🔥${o.streak}` : '';
  const header = HEADER[o.locale](o.puzzleNumber, score) + streakSuffix;
  const grid = shareGrid(o.comparisons);
  return [header, grid, SHARE_URL].filter(Boolean).join('\n\n');
}
