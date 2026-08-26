import type { Architect } from '@/types/architect';

// A single valid, minimal Architect for axis tests. Task 6 owns this file;
// the coherent-pool factory in tests/fixtures/pool.ts belongs to Task 3.
export function architect(patch: Partial<Architect> = {}): Architect {
  return {
    id: 'base-architect',
    wikidataId: 'Q0',
    name: 'Base Architect',
    alternativeNames: [],
    gender: 'unknown',
    born: 1920,
    died: 1990,
    floruit: { start: 1950, end: 1980, override: false },
    movements: 'unaffiliated',
    workRegions: ['Western Europe'],
    workCentroid: { lat: 48, lon: 2 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: { en: '', es: '', it: '' },
    awards: [],
    tier: 'canon',
    context: null,
    sources: [],
    ...patch,
  };
}
