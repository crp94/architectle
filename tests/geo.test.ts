import { describe, it, expect } from 'vitest';
import { initialBearing, toCompass8, centroid } from '@/lib/geo';

describe('initialBearing', () => {
  it('is ~90 degrees due east along the equator', () => {
    const bearing = initialBearing({ lat: 0, lon: 0 }, { lat: 0, lon: 40 });
    expect(bearing).toBeCloseTo(90, 0);
  });

  it('is ~0 degrees due north', () => {
    const bearing = initialBearing({ lat: 0, lon: 0 }, { lat: 40, lon: 0 });
    expect(bearing).toBeCloseTo(0, 0);
  });
});

describe('toCompass8', () => {
  it('maps 0 degrees to N', () => {
    expect(toCompass8(0)).toBe('N');
  });

  it('maps 45 degrees to NE', () => {
    expect(toCompass8(45)).toBe('NE');
  });

  it('maps 350 degrees to N', () => {
    expect(toCompass8(350)).toBe('N');
  });

  it('maps 200 degrees to S', () => {
    expect(toCompass8(200)).toBe('S');
  });
});

describe('centroid', () => {
  it('averages a set of points', () => {
    const c = centroid([{ lat: 0, lon: 0 }, { lat: 10, lon: 20 }]);
    expect(c.lat).toBeCloseTo(5, 5);
    expect(c.lon).toBeCloseTo(10, 5);
  });
});
