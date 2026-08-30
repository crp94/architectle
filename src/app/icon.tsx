import { ImageResponse } from 'next/og';
import { theme } from '@/lib/theme';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * The dynamic favicon/tab icon (design spec §7): an "A" monogram in the
 * gallery's own paper/ink/accent register, matching `public/icon-192.png`
 * / `public/icon-512.png` (the larger, static PWA install icons — see
 * `manifest.ts`) and `apple-icon.tsx`. Kept to generic serif font stacks
 * rather than the self-hosted Fraunces binary: `next/og`'s renderer needs
 * raw font file bytes passed through its own `fonts` option, and extracting
 * those from `next/font/google`'s build-time-only asset pipeline isn't
 * straightforward — the existing static OG template
 * (`src/app/opengraph-image.tsx`) already made this same simplification.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.color.paper,
          color: theme.color.ink,
          fontSize: 22,
          fontWeight: 700,
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
