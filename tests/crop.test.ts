import { describe, it, expect } from 'vitest';
import { cropAt, easeOutCubic, fitRectToAspect } from '@/lib/crop';

const DETAIL = { x: 0.4, y: 0.4, w: 0.2, h: 0.2 };
const SQUARE = 1;

describe('easeOutCubic', () => {
  it('pins the endpoints', () => {
    expect(easeOutCubic(0)).toBe(0);
    expect(easeOutCubic(1)).toBe(1);
  });
  it('opens up faster than linear', () => {
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
  });
});

describe('cropAt', () => {
  it('shows the authored detail on guess 1', () => {
    expect(cropAt(DETAIL, 1, SQUARE, SQUARE)).toEqual(DETAIL);
  });

  it('shows the whole image on guess 6', () => {
    expect(cropAt(DETAIL, 6, SQUARE, SQUARE)).toEqual({ x: 0, y: 0, w: 1, h: 1 });
  });

  it('widens monotonically', () => {
    let prev = 0;
    for (let g = 1; g <= 6; g++) {
      const r = cropAt(DETAIL, g, SQUARE, SQUARE);
      const area = r.w * r.h;
      expect(area).toBeGreaterThanOrEqual(prev);
      prev = area;
    }
  });

  it('clamps out-of-range guesses instead of throwing', () => {
    expect(cropAt(DETAIL, 0, SQUARE, SQUARE)).toEqual(DETAIL);
    expect(cropAt(DETAIL, 99, SQUARE, SQUARE)).toEqual({ x: 0, y: 0, w: 1, h: 1 });
  });

  it('never leaves the image bounds', () => {
    const edge = { x: 0.9, y: 0.9, w: 0.1, h: 0.1 };
    for (let g = 1; g <= 6; g++) {
      const r = cropAt(edge, g, SQUARE, SQUARE);
      expect(r.x).toBeGreaterThanOrEqual(0);
      expect(r.y).toBeGreaterThanOrEqual(0);
      expect(r.x + r.w).toBeLessThanOrEqual(1 + 1e-9);
      expect(r.y + r.h).toBeLessThanOrEqual(1 + 1e-9);
    }
  });
});

describe('fitRectToAspect', () => {
  it('widens a tall rect to fill a wide stage without distorting', () => {
    // image 1:1, stage 2:1, rect 0.2x0.2 -> must become 0.4 wide
    const r = fitRectToAspect({ x: 0.4, y: 0.4, w: 0.2, h: 0.2 }, 1, 2);
    expect(r.w / r.h).toBeCloseTo(2, 5);
    expect(r.h).toBeCloseTo(0.2, 5);
  });

  it('keeps the rect centred on its original centre where bounds allow', () => {
    const r = fitRectToAspect({ x: 0.4, y: 0.4, w: 0.2, h: 0.2 }, 1, 2);
    expect(r.x + r.w / 2).toBeCloseTo(0.5, 5);
  });
});
