import type { Rect } from '@/types/common';

const FULL_FRAME: Rect = { x: 0, y: 0, w: 1, h: 1 };
const DEFAULT_TOTAL_GUESSES = 6;

/** Cubic ease-out: fast start, slow finish. Pins easeOutCubic(0) = 0 and easeOutCubic(1) = 1. */
export function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Expands `rect` so its aspect ratio matches the stage's, given the image's own
 * aspect ratio. Only the short dimension grows, so the rect is never distorted
 * or shrunk. The result is recentred on the original rect's centre; a rect
 * that ends up running past the image edge is left for the caller to clamp
 * (see `cropAt`, which fits then clamps as two distinct steps).
 *
 * Aspect ratios are width/height. `rect` is normalised to the image, so its
 * width and height must be scaled by `imageAspect` to compare against the
 * stage's own width/height ratio.
 *
 * Caveat: this only grows `rect`, it never shrinks it, and the caller's later
 * clamp step may shrink one dimension back down if the grown rect overflows
 * `[0,1]`. When that happens the returned rect no longer satisfies
 * `stageAspect` exactly — an image simply may not contain enough room, at
 * this rect's position and size, to carve out the requested stage aspect.
 * Callers must treat the aspect match as best-effort and letterbox/contain
 * the result rather than assume it exactly fills the stage.
 */
export function fitRectToAspect(rect: Rect, imageAspect: number, stageAspect: number): Rect {
  const cx = rect.x + rect.w / 2;
  const cy = rect.y + rect.h / 2;

  // Rect's aspect ratio in the same units as stageAspect (real-world width/height).
  const rectAspect = (rect.w * imageAspect) / rect.h;

  let w = rect.w;
  let h = rect.h;

  if (rectAspect < stageAspect) {
    // Rect is too tall/narrow for the stage: widen it.
    w = (h * stageAspect) / imageAspect;
  } else if (rectAspect > stageAspect) {
    // Rect is too wide/short for the stage: heighten it.
    h = (w * imageAspect) / stageAspect;
  }

  return { x: cx - w / 2, y: cy - h / 2, w, h };
}

/**
 * Slides `rect` back inside [0,1] on both axes, shrinking it only if it is
 * genuinely wider or taller than the image itself. Shift always happens
 * before shrink, so a rect that merely runs past an edge keeps its size —
 * only a rect that could never fit (w or h > 1) gets shrunk down.
 */
function clampToUnitSquare(rect: Rect): Rect {
  const w = Math.min(rect.w, 1);
  const h = Math.min(rect.h, 1);

  let x = rect.x;
  if (x < 0) x = 0;
  if (x + w > 1) x = 1 - w;

  let y = rect.y;
  if (y < 0) y = 0;
  if (y + h > 1) y = 1 - h;

  return { x, y, w, h };
}

/**
 * The crop shown on a given guess: interpolates the authored `detail` rect
 * toward the full frame using an ease-out curve, fits it to the stage's
 * aspect ratio, then clamps it inside the image bounds.
 *
 * Order matters: interpolate first (so the ladder's shape is defined purely
 * by the detail and the easing), then fit to aspect (which may grow the
 * rect), then clamp (which only ever shifts, and shrinks only if the fitted
 * rect is still too big after shifting).
 *
 * Caveat: the returned rect is not guaranteed to satisfy `stageAspect`
 * exactly. The final clamp can shrink a dimension that `fitRectToAspect`
 * grew past the image bounds, and there is no general way to carve an
 * arbitrary stage aspect out of a fixed-size image at an arbitrary position
 * — some combinations of `detail`, `imageAspect`, and `stageAspect` are
 * geometrically impossible to satisfy exactly. Consumers (e.g. `CropStage`)
 * must contain/letterbox the returned rect within the stage rather than
 * assume it exactly fills it.
 */
export function cropAt(
  detail: Rect,
  guess: number,
  imageAspect: number,
  stageAspect: number,
  total: number = DEFAULT_TOTAL_GUESSES,
): Rect {
  const clampedGuess = Math.min(Math.max(guess, 1), total);
  const t = total <= 1 ? 1 : easeOutCubic((clampedGuess - 1) / (total - 1));

  const interpolated: Rect = {
    x: lerp(detail.x, FULL_FRAME.x, t),
    y: lerp(detail.y, FULL_FRAME.y, t),
    w: lerp(detail.w, FULL_FRAME.w, t),
    h: lerp(detail.h, FULL_FRAME.h, t),
  };

  const fitted = fitRectToAspect(interpolated, imageAspect, stageAspect);
  return clampToUnitSquare(fitted);
}
