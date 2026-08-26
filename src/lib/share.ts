import type { Comparison } from '@/lib/axes';

// Re-pointed to `src/lib/i18n.ts` by Task 11; declared here as a placeholder so
// share.ts has somewhere to import it from until that module exists.
export type Locale = 'en' | 'es' | 'it';

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
}): string {
  const score = o.guessesUsed === null ? `X/${MAX_GUESSES}` : `${o.guessesUsed}/${MAX_GUESSES}`;
  const header = HEADER[o.locale](o.puzzleNumber, score);
  const grid = shareGrid(o.comparisons);
  return [header, grid, SHARE_URL].filter(Boolean).join('\n\n');
}
