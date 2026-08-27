import type { ContextBlock, LocalizedString, Material, Source, Tier, Typology } from './common';
import type { MovementId } from './movement';

export type Gender = 'woman' | 'man' | 'non-binary' | 'unknown';

export type Architect = {
  id: string;
  // null when this architect has no Wikidata item at all. See the
  // parallel note on Building.wikidataId in src/types/building.ts: a
  // record with a null wikidataId must carry at least 2 non-Wikidata/
  // Wikipedia sources (`wikidata-null-needs-sources` in
  // src/scripts/validators/provenance.ts).
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
