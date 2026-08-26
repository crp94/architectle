import { describe, it, expect } from 'vitest';
import { compareMovement } from '@/lib/axes/movement';
import { architect } from '../fixtures/architect';

describe('compareMovement', () => {
  it('reports EXACT when both are primary in the same movement', () => {
    const guess = architect({ movements: [{ id: 'brutalism', primary: true }] });
    const target = architect({ movements: [{ id: 'brutalism', primary: true }] });
    expect(compareMovement(guess, target)).toBe('EXACT');
  });

  it('reports SHARED when the movement is shared but not primary for both', () => {
    const guess = architect({ movements: [{ id: 'brutalism', primary: true }] });
    const target = architect({
      movements: [
        { id: 'metabolism', primary: true },
        { id: 'brutalism', primary: false },
      ],
    });
    expect(compareMovement(guess, target)).toBe('SHARED');
  });

  it('reports FAMILY when movements differ but share a family', () => {
    const guess = architect({ movements: [{ id: 'brutalism', primary: true }] });
    const target = architect({ movements: [{ id: 'metabolism', primary: true }] });
    expect(compareMovement(guess, target)).toBe('FAMILY');
  });

  it('reports NONE when movements are in different families', () => {
    const guess = architect({ movements: [{ id: 'brutalism', primary: true }] });
    const target = architect({ movements: [{ id: 'gothic', primary: true }] });
    expect(compareMovement(guess, target)).toBe('NONE');
  });

  it('reports NONE when the guess is unaffiliated and the target has a movement', () => {
    const guess = architect({ movements: 'unaffiliated' });
    const target = architect({ movements: [{ id: 'brutalism', primary: true }] });
    expect(compareMovement(guess, target)).toBe('NONE');
  });

  it('reports NONE when the target is unaffiliated and the guess has a movement (reverse direction)', () => {
    const guess = architect({ movements: [{ id: 'brutalism', primary: true }] });
    const target = architect({ movements: 'unaffiliated' });
    expect(compareMovement(guess, target)).toBe('NONE');
  });

  it('reports NONE when both are unaffiliated — absence of a label is not evidence', () => {
    const guess = architect({ movements: 'unaffiliated' });
    const target = architect({ movements: 'unaffiliated' });
    expect(compareMovement(guess, target)).toBe('NONE');
  });

  it('throws on an unknown movement id so curation catches the typo', () => {
    const guess = architect({ movements: [{ id: 'not-a-real-movement', primary: true }] });
    const target = architect({ movements: [{ id: 'brutalism', primary: true }] });
    expect(() => compareMovement(guess, target)).toThrow();
  });
});
