import Image from 'next/image';
import type { ImageRecord } from '@/types/common';
import { t, type Locale } from '@/lib/i18n';
import { extraImageSrc } from '@/lib/facts';
import { GalleryFrame } from '@/components/ui/GalleryFrame';

export type ImageGalleryProps = {
  buildingId: string;
  buildingName: string;
  /** A building's `extraImages` (design spec §6) — 0-2 hand-picked extra
   * angles. Renders nothing at all when empty, so callers can pass
   * `building.extraImages ?? []` unconditionally and let this component
   * degrade gracefully instead of branching at every call site. */
  images: ImageRecord[];
  locale: Locale;
  className?: string;
};

/**
 * Renders a building's extra angles as a row of smaller gallery-framed
 * prints — the shared presentation used by both the post-game reveal
 * (`Reveal.tsx`) and the building archive page, so the two never drift on
 * how an extra image is captioned or where its file lives. Each print gets
 * its own alt text and photographer credit (never bare, uncredited images),
 * per design spec §6.
 */
export function ImageGallery({
  buildingId, buildingName, images, locale, className = '',
}: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div
      data-testid="image-gallery"
      className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${className}`}
    >
      {images.map((image, i) => {
        const angleLabel = `${t(locale, 'revealAnotherAngle')} ${i + 1}`;
        return (
          <GalleryFrame
            key={image.commonsFile}
            width={image.width}
            height={image.height}
            className="p-2 sm:p-3"
            caption={`${angleLabel} · ${t(locale, 'provenancePhotographerLabel')}: ${image.photographer}`}
          >
            <Image
              data-testid={`image-gallery-photo-${i}`}
              src={extraImageSrc(buildingId, i)}
              alt={`${buildingName} — ${angleLabel}`}
              width={image.width}
              height={image.height}
              sizes="(min-width: 768px) 20vw, 45vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </GalleryFrame>
        );
      })}
    </div>
  );
}
