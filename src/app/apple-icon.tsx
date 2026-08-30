import { ImageResponse } from 'next/og';
import { theme } from '@/lib/theme';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/**
 * The apple-touch-icon (design spec §7) — same "A" monogram as `icon.tsx`,
 * at the 180x180 size iOS home-screen bookmarks expect. Filled edge to
 * edge (iOS applies its own corner-rounding mask), no transparency.
 */
export default function AppleIcon() {
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
          fontSize: 108,
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
