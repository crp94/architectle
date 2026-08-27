import type { Building } from '@/types/building';
import type { Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { provenanceLine } from '@/lib/facts';

/**
 * One line carrying the building's full provenance: Wikidata id (or its
 * documented absence), Commons file, photographer and licence — the same
 * `provenanceLine` the reveal shows, so every archive page and the reveal
 * make the same sourcing claim about the same photograph. This single line
 * is deliberately both "the provenance block" and "the licensed image
 * credit" the e2e spec checks for: photographer and licence are always
 * present in the same string as the Wikidata/Commons reference.
 */
export function Provenance({ building, locale }: { building: Building; locale: Locale }) {
  return (
    <p
      data-testid="archive-provenance"
      className="text-xs opacity-70"
      style={{ fontFamily: theme.type.mono }}
    >
      {provenanceLine(building, locale)}
    </p>
  );
}
