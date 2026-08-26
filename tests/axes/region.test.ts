import { describe, it, expect } from 'vitest';
import { compareRegion } from '@/lib/axes/region';
import { architect } from '../fixtures/architect';

const at = (regions: string[], lat: number, lon: number) =>
  architect({ workRegions: regions, workCentroid: { lat, lon } });

describe('compareRegion', () => {
  it('matches exactly on a shared subregion and omits the bearing', () => {
    const r = compareRegion(at(['Eastern Asia'], 35, 139), at(['Eastern Asia'], 31, 121));
    expect(r.match).toBe('EXACT');
    expect(r.bearing).toBeNull();
  });

  it('matches at region level (shared Asia, different subregion) with a pinned bearing', () => {
    // Tokyo (Eastern Asia) vs Mumbai (Southern Asia): same region, not same
    // subregion, and Tokyo→Mumbai is genuinely W — pins the actual branch
    // rather than just "some non-null bearing came out".
    const r = compareRegion(at(['Eastern Asia'], 35, 139), at(['Southern Asia'], 19, 72));
    expect(r.match).toBe('REGION');
    expect(r.bearing).toBe('W');
  });

  it('returns NONE with a bearing across continents', () => {
    const r = compareRegion(
      at(['Northern Europe'], 60, 24),
      at(['Latin America and the Caribbean'], -23, -46),
    );
    expect(r.match).toBe('NONE');
    expect(r.bearing).toBe('SW');
  });

  it('handles an architect who built in several subregions', () => {
    const r = compareRegion(
      at(['Western Europe', 'Southern Asia'], 46, 6),
      at(['Southern Asia'], 30, 76),
    );
    expect(r.match).toBe('EXACT');
  });

  it('returns NONE rather than throwing when workRegions is empty', () => {
    expect(compareRegion(at([], 0, 0), at(['Eastern Asia'], 35, 139)).match).toBe('NONE');
  });
});
