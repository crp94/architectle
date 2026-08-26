import { describe, it, expect } from 'vitest';
import { compareArchitects } from '@/lib/axes';
import { architect } from '../fixtures/architect';

describe('compareArchitects', () => {
  it('yields exact matches on every axis when comparing an architect with themselves', () => {
    const a = architect({
      movements: [{ id: 'brutalism', primary: true }],
      workRegions: ['Eastern Asia'],
      workCentroid: { lat: 35, lon: 139 },
      primaryTypology: 'civic',
      signatureMaterial: 'concrete',
    });

    const result = compareArchitects(a, a);

    expect(result.era.bucket).toBe('CONTEMPORARY');
    expect(result.movement).toBe('EXACT');
    expect(result.region.match).toBe('EXACT');
    expect(result.typology.match).toBe('EXACT');
  });
});
