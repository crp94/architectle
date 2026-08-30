import type { Pool, Violation } from './schema';
import { validateSchema } from './schema';
import { validateCrossRefs } from './crossRefs';
import { validateImages } from './images';
import { validateProvenance } from './provenance';
import { validateCoverage } from './coverage';

export type { Pool, Violation } from './schema';
export { validateSchema } from './schema';
export { validateCrossRefs } from './crossRefs';
export { validateImages } from './images';
export { validateProvenance } from './provenance';
export {
  validateCoverage,
  ERA_MIN, GEOGRAPHY_MAX, GEOGRAPHY_MIN, GENDER_MIN, MAX_BUILDINGS_PER_ARCHITECT, CANON_TIER_MIN,
  yearOf, eraOf, geographyBucketOf,
} from './coverage';
export type { Era, GeographyBucket } from './coverage';
// Not part of ALL_VALIDATORS/validatePool below: unlike the other five,
// validateFeatured's default argument reaches outside the `Pool` it's
// given (the real FEATURED_ARCHITECT_IDS list, src/scripts/curated/
// featured.ts) — folding it into the pool-agnostic `validatePool(pool)`
// composition would make that function's result depend on which pool a
// caller passes AND on unrelated global curated data, which every existing
// caller (including this file's own validatePool tests, run against the
// small tests/fixtures/pool.ts fixture) does not expect. buildCuratedPool.ts
// calls it explicitly instead, exactly like validateCoverage's
// `--skip-coverage` handling already is a case handled outside this
// generic composition.
export { validateFeatured } from './featured';

export const ALL_VALIDATORS = [
  validateSchema, validateCrossRefs, validateImages, validateProvenance, validateCoverage,
] as const;

export function validatePool(pool: Pool): Violation[] {
  return ALL_VALIDATORS.flatMap((v) => v(pool));
}
