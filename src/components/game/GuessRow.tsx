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

/** One past guess: the architect's name plus its four specimen-label axis
 * chips (design spec §5: chips → specimen labels), laid out as a quiet
 * hairline-divided row rather than v1's heavy 2px border. */
export function GuessRow({ guess, comparison, locale }: GuessRowProps) {
  return (
    <div
      data-testid="guess-row"
      className="flex flex-wrap items-center gap-2 border-b py-3"
      style={{ borderBottomWidth: theme.rule.hairline, borderColor: theme.color.frameLine }}
    >
      <span className="min-w-28 text-sm uppercase tracking-wide sm:min-w-32" style={{ fontFamily: theme.type.display }}>
        {guess.name}
      </span>
      <div className="flex flex-1 flex-wrap gap-2">
        <AxisChip axis="era" result={comparison.era} locale={locale} />
        <AxisChip axis="movement" result={comparison.movement} locale={locale} />
        <AxisChip axis="region" result={comparison.region} locale={locale} />
        <AxisChip axis="typology" result={comparison.typology} locale={locale} />
      </div>
    </div>
  );
}
