import type { Architect } from '@/types/architect';

export type EraResult = {
  bucket: 'CONTEMPORARY' | 'NEAR' | 'FAR';
  deltaYears: number;
  direction: 'earlier' | 'later' | 'same';
};

// Floruit midpoint stands in for "when this architect was actually building",
// which is what the player is triangulating — not birth year.
function midpoint(a: Architect): number {
  return (a.floruit.start + a.floruit.end) / 2;
}

export function compareEra(guess: Architect, target: Architect): EraResult {
  // Positive deltaYears means the target built later than the guess.
  const deltaYears = midpoint(target) - midpoint(guess);
  const abs = Math.abs(deltaYears);
  const bucket = abs <= 15 ? 'CONTEMPORARY' : abs <= 40 ? 'NEAR' : 'FAR';
  const direction = deltaYears === 0 ? 'same' : deltaYears > 0 ? 'later' : 'earlier';
  return { bucket, deltaYears, direction };
}
