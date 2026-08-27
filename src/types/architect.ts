import type { ContextBlock, LocalizedString, Material, Source, Tier, Typology } from './common';
import type { MovementId } from './movement';

export type Gender = 'woman' | 'man' | 'non-binary' | 'unknown';

export type Architect = {
  id: string;
  // A verified Wikidata Q-id, or `null` when a curator genuinely checked
  // and found no matching item — never an empty string. `undefined` (the
  // field omitted) is a schema failure (`wikidata-id-present` in
  // schema.ts): it means the field was never checked at all, which must
  // not look the same as a checked, confirmed absence.
  wikidataId: string | null;
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
