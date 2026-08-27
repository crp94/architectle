import type { Architect } from '@/types/architect';
import type { Comparison } from '@/lib/axes';
import type { Locale } from '@/lib/i18n';
import { AxisChip } from '@/components/ui/AxisChip';
import { theme } from '@/lib/theme';

export type GuessRowProps = {
  guess: Architect;
  comparison: Comparison;
  locale: Locale;
};

/** One past guess: the architect's name plus its four axis chips. */
export function GuessRow({ guess, comparison, locale }: GuessRowProps) {
  return (
    <div
      data-testid="guess-row"
      className="flex flex-wrap items-center gap-2 border-b-2 border-ink py-2"
    >
      <span className="min-w-32 text-sm uppercase" style={{ fontFamily: theme.type.display }}>
        {guess.name}
      </span>
      <AxisChip axis="era" result={comparison.era} locale={locale} />
      <AxisChip axis="movement" result={comparison.movement} locale={locale} />
      <AxisChip axis="region" result={comparison.region} locale={locale} />
      <AxisChip axis="typology" result={comparison.typology} locale={locale} />
    </div>
  );
}
