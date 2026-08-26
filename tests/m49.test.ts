import { describe, it, expect } from 'vitest';
import { m49For } from '@/lib/m49';

describe('m49For', () => {
  it('maps countries to region and subregion', () => {
    expect(m49For('JP')).toEqual({ region: 'Asia', subregion: 'Eastern Asia' });
    expect(m49For('BR')).toEqual({ region: 'Americas', subregion: 'Latin America and the Caribbean' });
    expect(m49For('EG')).toEqual({ region: 'Africa', subregion: 'Northern Africa' });
    expect(m49For('FI')).toEqual({ region: 'Europe', subregion: 'Northern Europe' });
  });

  it('returns undefined for an unknown code rather than throwing', () => {
    expect(m49For('ZZ')).toBeUndefined();
  });
});
