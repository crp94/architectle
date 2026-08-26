import { describe, it, expect } from 'vitest';
import { compareTypology } from '@/lib/axes/typology';
import { architect } from '../fixtures/architect';

describe('compareTypology', () => {
  it('reports EXACT when both typology and material match', () => {
    const guess = architect({ primaryTypology: 'civic', signatureMaterial: 'concrete' });
    const target = architect({ primaryTypology: 'civic', signatureMaterial: 'concrete' });
    const r = compareTypology(guess, target);
    expect(r.match).toBe('EXACT');
    expect(r.typologyMatch).toBe(true);
    expect(r.materialMatch).toBe(true);
  });

  it('reports PARTIAL with typologyMatch true when only the typology matches', () => {
    const guess = architect({ primaryTypology: 'civic', signatureMaterial: 'concrete' });
    const target = architect({ primaryTypology: 'civic', signatureMaterial: 'timber' });
    const r = compareTypology(guess, target);
    expect(r.match).toBe('PARTIAL');
    expect(r.typologyMatch).toBe(true);
    expect(r.materialMatch).toBe(false);
  });

  it('reports PARTIAL with materialMatch true when only the material matches', () => {
    const guess = architect({ primaryTypology: 'civic', signatureMaterial: 'concrete' });
    const target = architect({ primaryTypology: 'housing', signatureMaterial: 'concrete' });
    const r = compareTypology(guess, target);
    expect(r.match).toBe('PARTIAL');
    expect(r.typologyMatch).toBe(false);
    expect(r.materialMatch).toBe(true);
  });

  it('reports NONE when neither typology nor material match', () => {
    const guess = architect({ primaryTypology: 'civic', signatureMaterial: 'concrete' });
    const target = architect({ primaryTypology: 'housing', signatureMaterial: 'timber' });
    const r = compareTypology(guess, target);
    expect(r.match).toBe('NONE');
    expect(r.typologyMatch).toBe(false);
    expect(r.materialMatch).toBe(false);
  });
});
