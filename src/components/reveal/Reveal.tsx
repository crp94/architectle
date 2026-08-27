import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { Comparison } from '@/lib/axes';
import { t, type Locale } from '@/lib/i18n';

const MAX_GUESSES = 6;

export type RevealProps = {
  building: Building;
  architect: Architect;
  solved: boolean;
  guessesUsed: number | null;
  comparisons: Comparison[];
  locale?: Locale;
};

/**
 * PLACEHOLDER — Task 12 owns the real `<Reveal />` (design spec §4.6 /
 * task-12-brief.md: full photograph, architect portrait, fact strip,
 * trilingual dossier, context block, provenance line, and a share button
 * wired to `shareText`/`shareGrid`). This stub exists only so `<GameBoard />`
 * (Task 11) has a stable, already-agreed prop interface to resolve into —
 * `{ building, architect, solved, guessesUsed, comparisons, locale }` — and
 * so the GameBoard test suite can assert the win/loss transition without
 * guessing at Task 12's eventual internals.
 *
 * Task 12 should extend/replace the JSX below; keep the prop signature and
 * the `data-testid="reveal"` root (GameBoard.test.tsx asserts on it) unless
 * GameBoard's usage is updated to match.
 */
export function Reveal({
  building, architect, solved, guessesUsed, comparisons, locale = 'en',
}: RevealProps) {
  const buildingName = building.name[locale] ?? building.name.en;
  return (
    <section data-testid="reveal" aria-live="polite" className="flex flex-col gap-2 p-4">
      <h2 className="text-2xl uppercase">
        {solved ? t(locale, 'winTitle') : t(locale, 'lossTitle')}
      </h2>
      <p data-testid="reveal-message">
        {solved
          ? t(locale, 'winMessage', { n: guessesUsed ?? comparisons.length, total: MAX_GUESSES })
          : t(locale, 'lossMessage', { name: architect.name })}
      </p>
      <p data-testid="reveal-building" className="text-sm">
        {buildingName}
      </p>
    </section>
  );
}
