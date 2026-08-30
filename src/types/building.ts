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
  // 0-2 additional hand-picked angles of the same building (design spec §6),
  // populated only for featured buildings. Optional and capped at 2 —
  // `extra-images-max` in src/scripts/validators/schema.ts enforces the cap.
  // The first entry is what src/lib/clues.ts's miss-4 "second photo" clue
  // shows; archive-only (non-featured) entries are untouched and simply
  // never carry this field.
  extraImages?: ImageRecord[];
  dossier: LocalizedString;
  context: ContextBlock | null;
  sources: Source[];
  tier: Tier;
};
