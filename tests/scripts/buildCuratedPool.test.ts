import { describe, it, expect } from 'vitest';
import { deriveArchitectGeography } from '@/scripts/buildCuratedPool';
import type { Building } from '@/types/building';
import { validPool } from '../fixtures/pool';

// Ruling A: `workRegions` must be UN M49 *subregion* strings, verbatim —
// this is the single highest-risk thing in Task 8. `compareRegion` (Task 6)
// matches guess/target `workRegions` directly against that vocabulary; a
// region-level name ("Asia"), a country name, or free text here would make
// every EXACT and REGION match silently collapse to NONE for every real
// architect, with nothing in the existing suite to catch it.
describe('deriveArchitectGeography', () => {
  it('derives the M49 subregion (not the country, not the region) from a single-country architect', () => {
    // a4 in the fixture builds only in Florence, IT.
    const { buildings } = validPool();
    const result = deriveArchitectGeography('a4', buildings);
    expect(result.workRegions).toEqual(['Southern Europe']);
    expect(result.workRegions).not.toContain('Europe');
    expect(result.workRegions).not.toContain('IT');
  });

  it('keeps every subregion holding >=15% of the architect\'s output, drops none held below it', () => {
    const buildings: Building[] = [
      building('b1', 'arch', 'IT'), // Southern Europe
      building('b2', 'arch', 'FR'), // Western Europe
      building('b3', 'arch', 'FR'), // Western Europe
      building('b4', 'arch', 'FR'), // Western Europe
      building('b5', 'arch', 'FR'), // Western Europe
      building('b6', 'arch', 'FR'), // Western Europe
      building('b7', 'arch', 'FR'), // Western Europe
    ];
    // Southern Europe: 1/7 ≈ 14.3% < 15% -> dropped.
    // Western Europe: 6/7 ≈ 85.7% -> kept.
    const result = deriveArchitectGeography('arch', buildings);
    expect(result.workRegions).toEqual(['Western Europe']);
  });

  it('keeps a subregion sitting exactly at the 15% threshold', () => {
    // 3/20 = exactly 15% for Northern Africa (EG); the remaining 17/20 for
    // Northern America (US). Both must be kept — "≥15%" includes the edge.
    const exact: Building[] = [
      building('x1', 'arch', 'EG'),
      building('x2', 'arch', 'EG'),
      building('x3', 'arch', 'EG'),
      ...Array.from({ length: 17 }, (_, i) => building(`y${i}`, 'arch', 'US')),
    ];
    const result = deriveArchitectGeography('arch', exact);
    expect(result.workRegions).toContain('Northern Africa');
    expect(result.workRegions).toContain('Northern America');
  });

  it('returns multiple subregions when an architect works across regions above the threshold', () => {
    const { buildings } = validPool();
    // a1 in the fixture has one building in JP (Eastern Asia) and one in IN
    // (Southern Asia) — a 50/50 split, both above 15%.
    const result = deriveArchitectGeography('a1', buildings);
    expect(result.workRegions.sort()).toEqual(['Eastern Asia', 'Southern Asia']);
  });

  it('derives workCentroid as the arithmetic mean of the architect\'s building locations', () => {
    const buildings: Building[] = [
      building('b1', 'arch', 'US', { lat: 0, lon: 0 }),
      building('b2', 'arch', 'US', { lat: 10, lon: 20 }),
    ];
    const result = deriveArchitectGeography('arch', buildings);
    expect(result.workCentroid).toEqual({ lat: 5, lon: 10 });
  });

  it('returns an empty workRegions and a zero centroid for an architect with no buildings', () => {
    const result = deriveArchitectGeography('nobody', []);
    expect(result.workRegions).toEqual([]);
    expect(result.workCentroid).toEqual({ lat: 0, lon: 0 });
  });
});

function building(
  id: string, architectId: string, countryCode: string, coords?: { lat: number; lon: number },
): Building {
  const base = validPool().buildings[0];
  return {
    ...base,
    id,
    architectId,
    location: { ...base.location, countryCode, lat: coords?.lat ?? 0, lon: coords?.lon ?? 0 },
  };
}
