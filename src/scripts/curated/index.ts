import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';

import { AFRICA_ARCHITECTS } from './architects/africa';
import { AMERICAS_ARCHITECTS } from './architects/americas';
import { ASIA_ARCHITECTS } from './architects/asia';
import { EUROPE_ARCHITECTS } from './architects/europe';
import { WESTASIA_ARCHITECTS } from './architects/westasia';

import { AFRICA_BUILDINGS } from './buildings/africa';
import { AMERICAS_BUILDINGS } from './buildings/americas';
import { ASIA_BUILDINGS } from './buildings/asia';
import { EUROPE_BUILDINGS } from './buildings/europe';
import { WESTASIA_BUILDINGS } from './buildings/westasia';

const REAL_BUILDINGS: Building[] = [
  ...EUROPE_BUILDINGS, ...AMERICAS_BUILDINGS, ...ASIA_BUILDINGS, ...AFRICA_BUILDINGS, ...WESTASIA_BUILDINGS,
];
const REAL_ARCHITECTS: Architect[] = [
  ...EUROPE_ARCHITECTS, ...AMERICAS_ARCHITECTS, ...ASIA_ARCHITECTS, ...AFRICA_ARCHITECTS, ...WESTASIA_ARCHITECTS,
];

// --- TASK 8 DEV FALLBACK -------------------------------------------------
// Task 9 is five curator agents, each authoring one region file above in
// parallel. Until at least one of them lands real data, every array above
// is an empty stub and there is nothing for `data:curate` to validate or
// for this pipeline to be exercised against. Fall back to Task 3's coherent
// fixture pool so the pipeline has something to chew on during Task 8's own
// development.
//
// This block is self-retiring, not something Task 9 must remember to
// delete: the instant ANY region file gains a single real building, the
// `REAL_BUILDINGS.length === 0` check below stops being true and this
// import is bypassed. Deleting the block once all five files are filled in
// is tidy but not load-bearing — nothing breaks if it's left in place.
import { validPool } from '../../../tests/fixtures/pool';

const FALLBACK = REAL_BUILDINGS.length === 0 ? validPool() : null;
// --------------------------------------------------------------------------

export const CURATED_BUILDINGS: Building[] = FALLBACK ? FALLBACK.buildings : REAL_BUILDINGS;
export const CURATED_ARCHITECTS: Architect[] = FALLBACK ? FALLBACK.architects : REAL_ARCHITECTS;
