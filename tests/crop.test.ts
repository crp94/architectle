import { describe, it, expect } from 'vitest';
import { cropAt, easeOutGentle, fitRectToAspect } from '@/lib/crop';

const DETAIL = { x: 0.4, y: 0.4, w: 0.2, h: 0.2 };
const SQUARE = 1;

describe('easeOutGentle', () => {
  it('pins the endpoints', () => {
    expect(easeOutGentle(0)).toBe(0);
    expect(easeOutGentle(1)).toBe(1);
  });
  it('opens up faster than linear', () => {
    expect(easeOutGentle(0.5)).toBeGreaterThan(0.5);
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

  it('shifts an overrunning fit right/bottom instead of shrinking it', () => {
    // corner detail + a wide stage forces fitRectToAspect to grow past x+w=1;
    // the clamp must slide it back rather than cut it down to fit.
    const corner = { x: 0.9, y: 0.9, w: 0.1, h: 0.1 };
    const r = cropAt(corner, 1, SQUARE, 2);
    expect(r.w).toBeCloseTo(0.2, 10); // unchanged from the fit -> shift, not shrink
    expect(r.h).toBeCloseTo(0.1, 10);
    expect(r.x).toBeCloseTo(0.8, 10);
    expect(r.y).toBeCloseTo(0.9, 10);
  });

  it('shifts a fit that runs past the left/top edge', () => {
    // a detail near the left edge, widened by a wide stage, pushes x below 0;
    // the clamp must slide it back to x=0 without shrinking w.
    const nearEdge = { x: 0.05, y: 0.4, w: 0.1, h: 0.2 };
    const r = cropAt(nearEdge, 1, SQUARE, 2);
    expect(r.w).toBeCloseTo(0.4, 10); // unchanged from the fit -> shift, not shrink
    expect(r.h).toBeCloseTo(0.2, 10);
    expect(r.x).toBeCloseTo(0, 10);
    expect(r.y).toBeCloseTo(0.4, 10);
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

  it('heightens a wide rect to fit a narrower stage without distorting', () => {
    // image 2:1, stage 1:1, rect 0.2x0.2 -> must become 0.4 tall, centre preserved
    const r = fitRectToAspect({ x: 0.4, y: 0.4, w: 0.2, h: 0.2 }, 2, 1);
    expect(r).toEqual({ x: 0.4, y: 0.3, w: 0.2, h: 0.4 });
  });
});
