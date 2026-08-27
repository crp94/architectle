import { describe, it, expect } from 'vitest';
import { validateProvenance } from '@/scripts/validators/provenance';
import { validPool, withBuilding, withArchitect } from '../fixtures/pool';

describe('validateProvenance', () => {
  it('accepts a valid pool', () => {
    expect(validateProvenance(validPool())).toEqual([]);
  });

  it('rejects a building whose dossier is non-empty but sources is empty', () => {
    const v = validateProvenance(withBuilding(validPool(), { sources: [] }));
    expect(v.map((x) => x.rule)).toContain('prose-requires-source');
  });

  it('rejects a building ContextBlock with no sources', () => {
    const v = validateProvenance(withBuilding(validPool(), {
      context: { body: { en: 'Context.', es: 'Contexto.', it: 'Contesto.' }, sources: [] },
    }));
    expect(v.map((x) => x.rule)).toContain('context-requires-source');
  });

  it('rejects an architect ContextBlock with no sources', () => {
    const v = validateProvenance(withArchitect(validPool(), {
      context: { body: { en: 'Context.', es: 'Contexto.', it: 'Contesto.' }, sources: [] },
    }));
    expect(v.map((x) => x.rule)).toContain('context-requires-source');
  });

  it('rejects a wikipedia Source with license: null', () => {
    const v = validateProvenance(withBuilding(validPool(), {
      sources: [{ kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Example', title: 'Example', license: null }],
    }));
    expect(v.map((x) => x.rule)).toContain('wikipedia-requires-license');
  });

  it('names the offending building in the subject', () => {
    const v = validateProvenance(withBuilding(validPool(), { sources: [] }));
    const violation = v.find((x) => x.rule === 'prose-requires-source')!;
    expect(violation.subject).toBe('b1');
  });

  it('rejects a building with wikidataId: null and fewer than 2 non-Wikidata/Wikipedia sources', () => {
    const v = validateProvenance(withBuilding(validPool(), {
      wikidataId: null,
      sources: [
        { kind: 'publication', url: 'https://example.org/paper', title: 'A paper', license: null },
      ],
    }));
    expect(v.map((x) => x.rule)).toContain('wikidata-null-needs-sources');
  });

  it('does not count wikidata/wikipedia sources toward the wikidataId: null minimum', () => {
    const v = validateProvenance(withBuilding(validPool(), {
      wikidataId: null,
      sources: [
        { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1', title: 'Q1', license: null },
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Example', title: 'Example', license: 'CC BY-SA 4.0' },
        { kind: 'publication', url: 'https://example.org/paper', title: 'A paper', license: null },
      ],
    }));
    expect(v.map((x) => x.rule)).toContain('wikidata-null-needs-sources');
  });

  it('accepts a building with wikidataId: null and 2 non-Wikidata/Wikipedia sources', () => {
    const v = validateProvenance(withBuilding(validPool(), {
      wikidataId: null,
      sources: [
        { kind: 'publication', url: 'https://example.org/paper', title: 'A paper', license: null },
        { kind: 'institution', url: 'https://example.org/museum', title: 'A museum record', license: null },
      ],
    }));
    expect(v.map((x) => x.rule)).not.toContain('wikidata-null-needs-sources');
  });

  it('rejects an architect with wikidataId: null and fewer than 2 non-Wikidata/Wikipedia sources', () => {
    const v = validateProvenance(withArchitect(validPool(), {
      wikidataId: null,
      sources: [
        { kind: 'publication', url: 'https://example.org/paper', title: 'A paper', license: null },
      ],
    }));
    expect(v.map((x) => x.rule)).toContain('wikidata-null-needs-sources');
  });

  it('accepts an architect with wikidataId: null and 2 non-Wikidata/Wikipedia sources', () => {
    const v = validateProvenance(withArchitect(validPool(), {
      wikidataId: null,
      sources: [
        { kind: 'publication', url: 'https://example.org/paper', title: 'A paper', license: null },
        { kind: 'institution', url: 'https://example.org/archive', title: 'An archive record', license: null },
      ],
    }));
    expect(v.map((x) => x.rule)).not.toContain('wikidata-null-needs-sources');
  });

  it('does not flag a record with a non-null wikidataId regardless of source mix', () => {
    const v = validateProvenance(withBuilding(validPool(), {
      sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1', title: 'Q1', license: null }],
    }));
    expect(v.map((x) => x.rule)).not.toContain('wikidata-null-needs-sources');
  });
});
