import { initialBearing, toCompass8, type Compass8 } from '@/lib/geo';
import { REGION_OF_SUBREGION } from '@/lib/m49';
import type { Architect } from '@/types/architect';

export type RegionResult = { match: 'EXACT' | 'REGION' | 'NONE'; bearing: Compass8 | null };

// Practice geography of the architect (workRegions/workCentroid), not the
// building's location — an architect's oeuvre routinely spans elsewhere.
export function compareRegion(guess: Architect, target: Architect): RegionResult {
  const guessSubregions = new Set(guess.workRegions);
  const targetSubregions = new Set(target.workRegions);

  const sharedSubregion = [...guessSubregions].some((s) => targetSubregions.has(s));
  if (sharedSubregion) {
    return { match: 'EXACT', bearing: null };
  }

  // A subregion missing from the table (bad/incomplete source data) simply
  // fails to contribute — it never throws, matching REGION_OF_SUBREGION's
  // own contract.
  const guessRegions = new Set(
    [...guessSubregions].map((s) => REGION_OF_SUBREGION[s]).filter((r): r is string => r !== undefined),
  );
  const targetRegions = new Set(
    [...targetSubregions].map((s) => REGION_OF_SUBREGION[s]).filter((r): r is string => r !== undefined),
  );

  const bearing = toCompass8(initialBearing(guess.workCentroid, target.workCentroid));
  const sharedRegion = [...guessRegions].some((r) => targetRegions.has(r));

  return { match: sharedRegion ? 'REGION' : 'NONE', bearing };
}
