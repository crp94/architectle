import type {
  ContextBlock, ImageRecord, LocalizedString, Material, Rect, Source, Tier, Typology,
} from './common';

export type HeritageStatus = 'unesco' | 'national' | 'regional' | 'none';

export type Building = {
  id: string;
  // null when no Wikidata item exists for this specific building (as
  // opposed to none having been looked up). A record with a null
  // wikidataId must carry at least 2 non-Wikidata/Wikipedia sources — see
  // the `wikidata-null-needs-sources` rule in
  // src/scripts/validators/provenance.ts. Requiring a Q-number on every
  // building reproduces the same coverage bias the curated pool exists to
  // correct: buildings by under-represented architects are systematically
  // less likely to have a Wikidata item at all.
  wikidataId: string | null;
  name: LocalizedString;
  architectId: string;
  location: { city: string; countryCode: string; lat: number; lon: number };
  inception: number;
  completed: number | null;
  demolished: number | null;
  typology: Typology;
  materials: Material[];
  structure: LocalizedString;
  program: LocalizedString;
  heritage: HeritageStatus | null;
  currentUse: LocalizedString | null;
  detailRect: Rect;
  image: ImageRecord;
  dossier: LocalizedString;
  context: ContextBlock | null;
  sources: Source[];
  tier: Tier;
};
