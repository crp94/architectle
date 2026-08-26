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

export const ALL_VALIDATORS = [
  validateSchema, validateCrossRefs, validateImages, validateProvenance, validateCoverage,
] as const;

export function validatePool(pool: Pool): Violation[] {
  return ALL_VALIDATORS.flatMap((v) => v(pool));
}
