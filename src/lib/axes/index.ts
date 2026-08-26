import type { Architect } from '@/types/architect';
import { compareEra, type EraResult } from './era';
import { compareMovement, type MovementResult } from './movement';
import { compareRegion, type RegionResult } from './region';
import { compareTypology, type TypologyResult } from './typology';

export type { EraResult } from './era';
export type { MovementResult } from './movement';
export type { RegionResult } from './region';
export type { TypologyResult } from './typology';
export type { Compass8 } from '@/lib/geo';

export type Comparison = {
  era: EraResult;
  movement: MovementResult;
  region: RegionResult;
  typology: TypologyResult;
};

export function compareArchitects(guess: Architect, target: Architect): Comparison {
  return {
    era: compareEra(guess, target),
    movement: compareMovement(guess, target),
    region: compareRegion(guess, target),
    typology: compareTypology(guess, target),
  };
}
