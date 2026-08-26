import { describe, it, expect } from 'vitest';
import { validateImages } from '@/scripts/validators/images';
import { validPool, withBuilding } from '../fixtures/pool';

describe('validateImages', () => {
  it('accepts a valid pool', () => {
    expect(validateImages(validPool())).toEqual([]);
  });

  it('rejects an unknown licence string', () => {
    const p = validPool();
    const v = validateImages(withBuilding(p, { image: { ...p.buildings[0].image, license: 'All rights reserved' as never } }));
    expect(v.map((x) => x.rule)).toContain('image-license-allowed');
  });

  it('rejects an empty photographer', () => {
    const p = validPool();
    const v = validateImages(withBuilding(p, { image: { ...p.buildings[0].image, photographer: '  ' } }));
    expect(v.map((x) => x.rule)).toContain('image-photographer-required');
  });

  it('rejects the same commonsFile reused on two buildings', () => {
    const p = validPool();
    const v = validateImages(withBuilding(p, { image: { ...p.buildings[0].image, commonsFile: p.buildings[1].image.commonsFile } }));
    expect(v.map((x) => x.rule)).toContain('image-file-unique');
  });

  it('rejects a non-Commons sourceUrl', () => {
    const p = validPool();
    const v = validateImages(withBuilding(p, { image: { ...p.buildings[0].image, sourceUrl: 'https://example.com/photo.jpg' } }));
    expect(v.map((x) => x.rule)).toContain('image-source-url');
  });

  it('rejects zero width or height', () => {
    const p = validPool();
    const v = validateImages(withBuilding(p, { image: { ...p.buildings[0].image, width: 0 } }));
    expect(v.map((x) => x.rule)).toContain('image-dimensions-recorded');
  });

  it('names the offending building and the bad value in the detail', () => {
    const p = validPool();
    const v = validateImages(withBuilding(p, { image: { ...p.buildings[0].image, photographer: '' } }));
    const violation = v.find((x) => x.rule === 'image-photographer-required')!;
    expect(violation.subject).toBe('b1');
  });
});
