import type {
  ContextBlock, ImageRecord, LocalizedString, Material, Rect, Source, Tier, Typology,
} from './common';

export type HeritageStatus = 'unesco' | 'national' | 'regional' | 'none';

export type Building = {
  id: string;
  // A verified Wikidata Q-id, or `null` when a curator genuinely checked
  // and found no matching item — never an empty string. `undefined` (the
  // field omitted) is a schema failure (`wikidata-id-present` in
  // schema.ts): it means the field was never checked at all, which must
  // not look the same as a checked, confirmed absence.
  wikidataId: string | null;
  name: LocalizedString;
  architectId: string;
  // Other architects credited alongside `architectId` on this building (ids
  // into the architect pool; excludes `architectId` itself — no duplicate
  // credit). Exists so genuine partnerships and joint credits (Wang Shu +
  // Lu Wenyu on Ningbo Museum, Kazuyo Sejima + Ryue Nishizawa/SANAA on the
  // Kanazawa 21st Century Museum, joint competition wins like Emin Onat +
  // Orhan Arda on Anıtkabir) don't force sole authorship onto a building
  // that had more than one author.
  //
  // Display-only: this field is NOT part of the game's answer key. The game
  // asks the player to name one architect, and `architectId` alone is that
  // answer — nothing in src/lib/axes/, src/lib/daily.ts, or any comparison/
  // selection code may read `coArchitects`. It exists purely for the
  // post-game reveal and archive pages, so a co-credited architect can be
  // shown and correctly attributed without becoming a guessable target.
  coArchitects?: string[];
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
