import type { LocalizedString, Source } from './common';

export type FamilyId =
  | 'classical' | 'medieval' | 'islamic' | 'renaissance-baroque'
  | 'revivalist' | 'modernism' | 'postmodernism' | 'contemporary' | 'vernacular';

export type MovementId = string;

export type Movement = {
  id: MovementId;
  family: FamilyId;
  name: string;
  blurb: LocalizedString;
  approxSpan: { start: number; end: number | null };
  sources: Source[];
};
