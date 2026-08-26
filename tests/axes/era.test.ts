import { describe, it, expect } from 'vitest';
import { compareEra } from '@/lib/axes/era';
import { architect } from '../fixtures/architect';

const withFloruit = (start: number, end: number) =>
  architect({ floruit: { start, end, override: false } });

describe('compareEra', () => {
  it('calls a 10-year gap contemporary', () => {
    const r = compareEra(withFloruit(1950, 1980), withFloruit(1960, 1990));
    expect(r.bucket).toBe('CONTEMPORARY');
  });

  it('calls a 30-year gap near, with direction', () => {
    const r = compareEra(withFloruit(1920, 1950), withFloruit(1950, 1980));
    expect(r.bucket).toBe('NEAR');
    expect(r.direction).toBe('later');
    expect(r.deltaYears).toBe(30);
  });

  it('calls a 100-year gap far and earlier', () => {
    const r = compareEra(withFloruit(1950, 1980), withFloruit(1850, 1880));
    expect(r.bucket).toBe('FAR');
    expect(r.direction).toBe('earlier');
    expect(r.deltaYears).toBe(-100);
  });

  it('uses floruit midpoints, not birth years', () => {
    // A late bloomer and an early starter born 30 years apart but building together.
    const early = architect({ born: 1900, floruit: { start: 1955, end: 1975, override: false } });
    const late = architect({ born: 1930, floruit: { start: 1955, end: 1975, override: false } });
    expect(compareEra(early, late).bucket).toBe('CONTEMPORARY');
  });

  it('reports same when the midpoints coincide', () => {
    const r = compareEra(withFloruit(1950, 1980), withFloruit(1950, 1980));
    expect(r.direction).toBe('same');
    expect(r.deltaYears).toBe(0);
  });

  it('is boundary-exact at 15 and 40 years', () => {
    expect(compareEra(withFloruit(1950, 1950), withFloruit(1965, 1965)).bucket).toBe('CONTEMPORARY');
    expect(compareEra(withFloruit(1950, 1950), withFloruit(1966, 1966)).bucket).toBe('NEAR');
    expect(compareEra(withFloruit(1950, 1950), withFloruit(1990, 1990)).bucket).toBe('NEAR');
    expect(compareEra(withFloruit(1950, 1950), withFloruit(1991, 1991)).bucket).toBe('FAR');
  });
});
