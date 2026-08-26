import type { Architect } from '@/types/architect';

export type TypologyResult = { match: 'EXACT' | 'PARTIAL' | 'NONE'; typologyMatch: boolean; materialMatch: boolean };

export function compareTypology(guess: Architect, target: Architect): TypologyResult {
  const typologyMatch = guess.primaryTypology === target.primaryTypology;
  const materialMatch = guess.signatureMaterial === target.signatureMaterial;

  const match = typologyMatch && materialMatch ? 'EXACT' : typologyMatch || materialMatch ? 'PARTIAL' : 'NONE';

  return { match, typologyMatch, materialMatch };
}
