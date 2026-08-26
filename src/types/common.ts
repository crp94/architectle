export type LocalizedString = { en: string; es: string; it: string };
export type Rect = { x: number; y: number; w: number; h: number };
export type Tier = 'canon' | 'deep';

export type Typology =
  | 'housing' | 'civic' | 'sacral' | 'cultural' | 'commercial'
  | 'industrial' | 'educational' | 'infrastructure' | 'tower' | 'domestic';

export type Material =
  | 'concrete' | 'brick' | 'steel-and-glass' | 'timber' | 'stone' | 'earth' | 'mixed';

export type Source = {
  kind: 'wikidata' | 'wikipedia' | 'publication' | 'institution';
  url: string;
  title: string;
  license: string | null;
};

export type ImageRecord = {
  commonsFile: string;
  photographer: string;
  license:
    | 'CC0' | 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY 4.0'
    | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'PD';
  sourceUrl: string;
  width: number;
  height: number;
};

export type ContextBlock = {
  body: LocalizedString;
  sources: Source[];
};
