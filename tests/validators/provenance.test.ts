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
});
