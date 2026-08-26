import type {
  ContextBlock, ImageRecord, LocalizedString, Material, Rect, Source, Tier, Typology,
} from './common';

export type HeritageStatus = 'unesco' | 'national' | 'regional' | 'none';

export type Building = {
  id: string;
  wikidataId: string;
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
