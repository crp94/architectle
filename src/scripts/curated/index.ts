import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';

import { EUROPE_ARCHITECTS } from './architects/europe';
import { EUROPE_WEST_ARCHITECTS } from './architects/europe-west';
import { EUROPE_BRITISH_ARCHITECTS } from './architects/europe-british';
import { EUROPE_GERMANIC_ARCHITECTS } from './architects/europe-germanic';
import { EUROPE_NORDIC_ARCHITECTS } from './architects/europe-nordic';
import { EUROPE_CENTRAL_ARCHITECTS } from './architects/europe-central';
import { ASIA_ARCHITECTS } from './architects/asia';
import { ASIA_SOUTH_ARCHITECTS } from './architects/asia-south';
import { ASIA_SOUTHEAST_ARCHITECTS } from './architects/asia-southeast';
import { AMERICAS_ARCHITECTS } from './architects/americas';
import { AMERICAS_SOUTHERN_ARCHITECTS } from './architects/americas-southern';
import { AMERICAS_ANDEAN_ARCHITECTS } from './architects/americas-andean';
import { AMERICAS_MEXICO_ARCHITECTS } from './architects/americas-mexico';
import { AFRICA_ARCHITECTS } from './architects/africa';
import { AFRICA_WEST_ARCHITECTS } from './architects/africa-west';
import { AFRICA_EASTSOUTH_ARCHITECTS } from './architects/africa-eastsouth';
import { WESTASIA_ARCHITECTS } from './architects/westasia';
import { WESTASIA_GULF_ARCHITECTS } from './architects/westasia-gulf';

import { EUROPE_BUILDINGS } from './buildings/europe';
import { EUROPE_WEST_BUILDINGS } from './buildings/europe-west';
import { EUROPE_BRITISH_BUILDINGS } from './buildings/europe-british';
import { EUROPE_GERMANIC_BUILDINGS } from './buildings/europe-germanic';
import { EUROPE_NORDIC_BUILDINGS } from './buildings/europe-nordic';
import { EUROPE_CENTRAL_BUILDINGS } from './buildings/europe-central';
import { ASIA_BUILDINGS } from './buildings/asia';
import { ASIA_SOUTH_BUILDINGS } from './buildings/asia-south';
import { ASIA_SOUTHEAST_BUILDINGS } from './buildings/asia-southeast';
import { AMERICAS_BUILDINGS } from './buildings/americas';
import { AMERICAS_SOUTHERN_BUILDINGS } from './buildings/americas-southern';
import { AMERICAS_ANDEAN_BUILDINGS } from './buildings/americas-andean';
import { AMERICAS_MEXICO_BUILDINGS } from './buildings/americas-mexico';
import { AFRICA_BUILDINGS } from './buildings/africa';
import { AFRICA_WEST_BUILDINGS } from './buildings/africa-west';
import { AFRICA_EASTSOUTH_BUILDINGS } from './buildings/africa-eastsouth';
import { WESTASIA_BUILDINGS } from './buildings/westasia';
import { WESTASIA_GULF_BUILDINGS } from './buildings/westasia-gulf';

const REAL_BUILDINGS: Building[] = [
  ...EUROPE_BUILDINGS,
  ...EUROPE_WEST_BUILDINGS,
  ...EUROPE_BRITISH_BUILDINGS,
  ...EUROPE_GERMANIC_BUILDINGS,
  ...EUROPE_NORDIC_BUILDINGS,
  ...EUROPE_CENTRAL_BUILDINGS,
  ...ASIA_BUILDINGS,
  ...ASIA_SOUTH_BUILDINGS,
  ...ASIA_SOUTHEAST_BUILDINGS,
  ...AMERICAS_BUILDINGS,
  ...AMERICAS_SOUTHERN_BUILDINGS,
  ...AMERICAS_ANDEAN_BUILDINGS,
  ...AMERICAS_MEXICO_BUILDINGS,
  ...AFRICA_BUILDINGS,
  ...AFRICA_WEST_BUILDINGS,
  ...AFRICA_EASTSOUTH_BUILDINGS,
  ...WESTASIA_BUILDINGS,
  ...WESTASIA_GULF_BUILDINGS,
];
const REAL_ARCHITECTS: Architect[] = [
  ...EUROPE_ARCHITECTS,
  ...EUROPE_WEST_ARCHITECTS,
  ...EUROPE_BRITISH_ARCHITECTS,
  ...EUROPE_GERMANIC_ARCHITECTS,
  ...EUROPE_NORDIC_ARCHITECTS,
  ...EUROPE_CENTRAL_ARCHITECTS,
  ...ASIA_ARCHITECTS,
  ...ASIA_SOUTH_ARCHITECTS,
  ...ASIA_SOUTHEAST_ARCHITECTS,
  ...AMERICAS_ARCHITECTS,
  ...AMERICAS_SOUTHERN_ARCHITECTS,
  ...AMERICAS_ANDEAN_ARCHITECTS,
  ...AMERICAS_MEXICO_ARCHITECTS,
  ...AFRICA_ARCHITECTS,
  ...AFRICA_WEST_ARCHITECTS,
  ...AFRICA_EASTSOUTH_ARCHITECTS,
  ...WESTASIA_ARCHITECTS,
  ...WESTASIA_GULF_ARCHITECTS,
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
