import type { Building } from '@/types/building';
import type { Locale } from '@/lib/i18n';
import { buildFacts } from '@/lib/facts';
import { SpecimenLabel } from '@/components/ui/SpecimenLabel';

/** The same four-cell completed/location/typology/material strip as the
 * post-game reveal (src/components/reveal/Reveal.tsx), reading from the
 * shared `buildFacts` in src/lib/facts.ts so the two never drift. Each cell
 * is a `SpecimenLabel` — the museum-label idiom replacing v1's heavy
 * bordered `<dl>` grid. */
export function FactStrip({ building, locale }: { building: Building; locale: Locale }) {
  const facts = buildFacts(building, locale);
  return (
    <div className="flex flex-wrap gap-3">
      {facts.map((fact) => (
        <div key={fact.key} data-testid={`archive-fact-${fact.key}`}>
          <SpecimenLabel label={fact.label} value={fact.value} />
        </div>
      ))}
    </div>
  );
}
