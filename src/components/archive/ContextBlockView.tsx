import type { ContextBlock } from '@/types/common';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';

/** The optional deeper-context block (design spec §4.6 / §8): its prose
 * plus the sources it's drawn from. Mirrors the reveal's rendering of the
 * same `ContextBlock` shape. Renders nothing when `context` is null —
 * callers should only mount this when they have one. */
export function ContextBlockView({ context, locale }: { context: ContextBlock; locale: Locale }) {
  return (
    <div data-testid="archive-context" className="flex flex-col gap-2 border-t-2 border-ink pt-3">
      <h3 className="text-xs uppercase tracking-wide" style={{ fontFamily: theme.type.mono }}>
        {t(locale, 'revealContext')}
      </h3>
      <p className="text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
        {context.body[locale] ?? context.body.en}
      </p>
      <ul
        data-testid="archive-context-sources"
        className="flex flex-col gap-1 text-xs"
        style={{ fontFamily: theme.type.mono }}
      >
        {context.sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer" className="underline">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
