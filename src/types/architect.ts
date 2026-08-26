import type { ContextBlock, LocalizedString, Material, Source, Tier, Typology } from './common';
import type { MovementId } from './movement';

export type Gender = 'woman' | 'man' | 'non-binary' | 'unknown';

export type Architect = {
  id: string;
  wikidataId: string;
  name: string;
  alternativeNames: string[];
  gender: Gender;
  born: number | null;
  died: number | null;
  floruit: { start: number; end: number; override: boolean };
  movements: { id: MovementId; primary: boolean }[] | 'unaffiliated';
  workRegions: string[];
  workCentroid: { lat: number; lon: number };
  primaryTypology: Typology;
  signatureMaterial: Material;
  portrait: LocalizedString;
  awards: string[];
  tier: Tier;
  context: ContextBlock | null;
  sources: Source[];
};
