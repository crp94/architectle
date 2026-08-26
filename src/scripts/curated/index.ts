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
//
// Fallback is keyed on buildings only, not architects, and deliberately so:
// see the loud check below this block for why an agent landing architects
// before buildings must never silently fall through to here.
import { validPool } from '../../../tests/fixtures/pool';

const FALLBACK = REAL_BUILDINGS.length === 0 ? validPool() : null;
// --------------------------------------------------------------------------

// An agent that commits `architects/<region>.ts` before `buildings/<region>.ts`
// (or ships one without the other by mistake) must never lose those
// architect entries silently. If we keyed FALLBACK on
// `REAL_BUILDINGS.length === 0` alone and used REAL_ARCHITECTS whenever
// REAL_BUILDINGS is non-empty, an architect written into a still-empty
// region would vanish from CURATED_ARCHITECTS with no diagnostic the moment
// any OTHER region's buildings landed. Fail loudly instead: this can only
// mean an out-of-order commit, and the fix is always "add the matching
// buildings," never "silently substitute fixture architects."
if (REAL_ARCHITECTS.length > 0 && REAL_BUILDINGS.length === 0) {
  throw new Error(
    'src/scripts/curated/index.ts: at least one architects/<region>.ts file has '
    + 'real entries, but every buildings/<region>.ts file is still an empty stub. '
    + 'workRegions/workCentroid are derived from an architect\'s buildings, and an '
    + 'architect with no buildings fails the architect-orphan rule — so architect '
    + 'entries with no buildings yet are not useful on their own. Add the matching '
    + 'building entries in buildings/<region>.ts before running data:curate again.',
  );
}

export const CURATED_BUILDINGS: Building[] = FALLBACK ? FALLBACK.buildings : REAL_BUILDINGS;
export const CURATED_ARCHITECTS: Architect[] = FALLBACK ? FALLBACK.architects : REAL_ARCHITECTS;
