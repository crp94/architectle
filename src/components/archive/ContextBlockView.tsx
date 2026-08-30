import type { ContextBlock } from '@/types/common';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { SectionRule } from '@/components/ui/SectionRule';

/** The optional deeper-context block (design spec §4.6 / §8): its prose
 * plus the sources it's drawn from. Mirrors the reveal's rendering of the
 * same `ContextBlock` shape. Renders nothing when `context` is null —
 * callers should only mount this when they have one. */
export function ContextBlockView({ context, locale }: { context: ContextBlock; locale: Locale }) {
  return (
    <div data-testid="archive-context" className="flex flex-col gap-3">
      <SectionRule label={t(locale, 'revealContext')} />
      <p className="max-w-[70ch] text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
        {context.body[locale] ?? context.body.en}
      </p>
      <ul
        data-testid="archive-context-sources"
        className="flex flex-col gap-1 text-xs"
        style={{ fontFamily: theme.type.mono }}
      >
        {context.sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer" className="text-accent underline">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
