import type { LocalizedString } from '@/types/common';
import type { Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';

/** Renders any trilingual prose block (a building's dossier, an
 * architect's portrait bio) in the locale requested, falling back to
 * English — same fallback rule as the reveal and the fact strip. */
export function Dossier({ text, locale }: { text: LocalizedString; locale: Locale }) {
  const body = text[locale] ?? text.en;
  return (
    <div
      data-testid="archive-dossier"
      className="max-w-[70ch] text-sm leading-relaxed"
      style={{ fontFamily: theme.type.body }}
    >
      <p>{body}</p>
    </div>
  );
}
