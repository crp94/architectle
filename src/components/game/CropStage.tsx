import type { Rect } from '@/types/common';
import { cropAt } from '@/lib/crop';

export type CropStageProps = {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  detailRect: Rect;
  guess: number;
  totalGuesses?: number;
  /**
   * The stage's own width/height ratio. Ideally measured from the live
   * layout (the crop runs edge-to-edge across ~47% of viewport height per
   * design spec §3, so its true aspect varies with viewport), but a fixed
   * default keeps this component's output deterministic without a
   * ResizeObserver — a reasonable simplification for Task 11; a later pass
   * can thread a measured value in without touching the crop math below.
   */
  stageAspect?: number;
};

const DEFAULT_STAGE_ASPECT = 16 / 9;

/**
 * The photograph, edge-to-edge, cropped to `cropAt(...)`'s rect for the
 * current guess. `cropAt`'s own JSDoc is explicit that the returned rect is
 * not guaranteed to satisfy `stageAspect` exactly, so this component
 * contains/letterboxes it: an inner "window" is sized to the rect's own
 * aspect ratio and centred in the stage, then the image is scaled and
 * shifted (via percentage width/height/left/top, independent of any
 * measured pixel size) so that exactly `rect` fills that window.
 */
export function CropStage({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  detailRect,
  guess,
  totalGuesses = 6,
  stageAspect = DEFAULT_STAGE_ASPECT,
}: CropStageProps) {
  const imageAspect = imageWidth / imageHeight;
  const rect = cropAt(detailRect, guess, imageAspect, stageAspect, totalGuesses);

  const rectAspect = (rect.w * imageAspect) / rect.h;
  const innerWidthPct = rectAspect > stageAspect ? 100 : 100 * (rectAspect / stageAspect);
  const innerHeightPct = rectAspect > stageAspect ? 100 * (stageAspect / rectAspect) : 100;

  // Classic "zoom into a normalised rect" trick: size the image so that
  // `rect`'s own width/height would span exactly 100% of the window, then
  // shift it so `rect`'s top-left lands on the window's origin.
  const imgWidthPct = 100 / rect.w;
  const imgHeightPct = 100 / rect.h;
  const imgLeftPct = -100 * (rect.x / rect.w);
  const imgTopPct = -100 * (rect.y / rect.h);

  return (
    <div
      data-testid="crop-stage"
      className="relative w-full overflow-hidden bg-ink"
      style={{ aspectRatio: String(stageAspect) }}
    >
      <div
        data-testid="crop-window"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{ width: `${innerWidthPct}%`, height: `${innerHeightPct}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/image
            can't express the percentage-based scale+shift this crop math
            depends on; a plain <img> keeps that math exact. */}
        <img
          data-testid="crop-image"
          src={imageSrc}
          alt={imageAlt}
          style={{
            position: 'absolute',
            width: `${imgWidthPct}%`,
            height: `${imgHeightPct}%`,
            left: `${imgLeftPct}%`,
            top: `${imgTopPct}%`,
            maxWidth: 'none',
          }}
        />
      </div>
      <CornerTicks />
    </div>
  );
}

/** Drafting-tick marks burned into the stage's four corners (design spec §3). */
function CornerTicks() {
  const corners = [
    { pos: { top: 0, left: 0 }, rotate: 0 },
    { pos: { top: 0, right: 0 }, rotate: 90 },
    { pos: { bottom: 0, right: 0 }, rotate: 180 },
    { pos: { bottom: 0, left: 0 }, rotate: 270 },
  ];
  return (
    <>
      {corners.map(({ pos, rotate }, i) => (
        <svg
          key={i}
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="absolute stroke-paper"
          style={{ ...pos, margin: 6, transform: `rotate(${rotate}deg)` }}
        >
          <path d="M0 8 L0 0 L8 0" fill="none" strokeWidth="2" />
        </svg>
      ))}
    </>
  );
}
