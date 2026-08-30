import type { ReactNode } from 'react';
import { theme } from '@/lib/theme';

export type GalleryFrameProps = {
  /**
   * The photograph itself — typically a `next/image` or `<img>` element,
   * supplied fully-formed by the caller (this component renders no image
   * logic of its own).
   */
  children: ReactNode;
  /**
   * Small-caps caption rendered under the mat, e.g. a building name plus
   * photographer credit. Omit entirely for no caption slot at all — a
   * `caption=""` still renders an (empty) caption region, since the
   * decision to have a caption slot at all is the caller's, not this
   * component's.
   */
  caption?: string;
  /** The photograph's own width, in any unit consistent with `height`
   * (typically its natural pixel width). Used only to derive an aspect
   * ratio; ignored if `aspectRatio` is supplied. */
  width?: number;
  /** The photograph's own height — see `width`. */
  height?: number;
  /**
   * The window's width/height ratio directly (e.g. `4 / 3`, `16 / 9`).
   * Takes precedence over `width`/`height` when both are given. Supplying
   * either this or `width`+`height` is what lets an arbitrary photo aspect
   * render with zero layout shift: the window's `aspect-ratio` is set
   * up-front from props, never measured after the image loads.
   */
  aspectRatio?: number;
  className?: string;
};

const DEFAULT_ASPECT_RATIO = 4 / 3;

function resolveAspectRatio(props: Pick<GalleryFrameProps, 'width' | 'height' | 'aspectRatio'>): number {
  if (props.aspectRatio) return props.aspectRatio;
  if (props.width && props.height) return props.width / props.height;
  return DEFAULT_ASPECT_RATIO;
}

/**
 * Presents a photograph as a gallery print: a generous paper `mat` around
 * it, a hairline `frameLine` border closing the edge, a soft lifted-off-
 * the-wall shadow, and an optional small-caps caption underneath. Purely
 * presentational — no image-loading logic, no i18n, no game state; every
 * piece of text and the photograph element both arrive as props/children.
 */
export function GalleryFrame({
  children, caption, width, height, aspectRatio, className = '',
}: GalleryFrameProps) {
  const ratio = resolveAspectRatio({ width, height, aspectRatio });

  return (
    <figure
      data-testid="gallery-frame"
      className={`flex flex-col gap-3 bg-mat p-3 sm:p-5 ${className}`}
      style={{
        borderWidth: theme.rule.hairline,
        borderStyle: 'solid',
        borderColor: theme.color.frameLine,
        boxShadow: theme.shadow.hard,
      }}
    >
      <div
        data-testid="gallery-frame-window"
        className="relative w-full overflow-hidden bg-paper"
        style={{ aspectRatio: String(ratio) }}
      >
        {children}
      </div>
      {caption !== undefined && (
        <figcaption
          data-testid="gallery-frame-caption"
          className="text-center text-xs uppercase tracking-[0.15em] text-ink"
          style={{ fontFamily: theme.type.ui }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
