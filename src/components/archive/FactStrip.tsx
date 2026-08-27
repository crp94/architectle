import type { Building } from '@/types/building';
import type { Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { buildFacts } from '@/lib/facts';

/** The same four-cell completed/location/typology/material strip as the
 * post-game reveal (src/components/reveal/Reveal.tsx), reading from the
 * shared `buildFacts` in src/lib/facts.ts so the two never drift. */
export function FactStrip({ building, locale }: { building: Building; locale: Locale }) {
  const facts = buildFacts(building, locale);
  return (
    <dl className="grid grid-cols-2 gap-px border-2 border-ink bg-ink sm:grid-cols-4">
      {facts.map((fact) => (
        <div key={fact.key} data-testid={`archive-fact-${fact.key}`} className="bg-paper p-2">
          <dt
            className="text-[10px] uppercase tracking-wide opacity-60"
            style={{ fontFamily: theme.type.mono }}
          >
            {fact.label}
          </dt>
          <dd className="mt-1 text-sm uppercase" style={{ fontFamily: theme.type.display }}>
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
