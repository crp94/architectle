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
export { validateCoverage } from './coverage';

export const ALL_VALIDATORS = [
  validateSchema, validateCrossRefs, validateImages, validateProvenance, validateCoverage,
] as const;

export function validatePool(pool: Pool): Violation[] {
  return ALL_VALIDATORS.flatMap((v) => v(pool));
}
