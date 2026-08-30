import { t } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { markDataUri } from '@/lib/brandArt';

/**
 * Shared "text specimen card" template (codereview finding #9) behind
 * `architect/[slug]/opengraph-image.tsx` and `movement/[slug]/
 * opengraph-image.tsx` — neither an architect nor a movement has a
 * photograph of its own (only buildings do — see `building/[slug]`'s own OG
 * route), so both routes render the same paper/ink/accent register: the
 * brand mark + "Architectle Archive" eyebrow, a large serif name, an
 * optional uppercase meta line, and a closing accent rule. The two routes
 * had drifted (72 vs 76 `fontSize` on the name) before this extraction; one
 * size is now picked deliberately below rather than by accident.
 *
 * English-only (`name`/`meta` are passed in already resolved) — every
 * archive page these routes back is itself hardcoded to `'en'` today, a
 * pre-existing limitation each route's own file documents.
 */
export type SpecimenCardProps = {
  /** The architect's or movement's name — falls back to "Architectle" at
   * each call site when the slug doesn't resolve to a real record. */
  name: string;
  /** e.g. `"{span} · {movement}"` or `"{family} · {span}"` — the call site
   * decides the shape; pass `''` to omit the meta line entirely. */
  meta: string;
};

// Deliberately the larger of the two pre-extraction sizes (76, from the
// architect route) — picked once, on purpose, rather than left to whichever
// route happened to be edited last.
const NAME_FONT_SIZE = 76;

export async function specimenCard({ name, meta }: SpecimenCardProps) {
  const paper = theme.color.paper;
  const ink = theme.color.ink;
  const accent = theme.color.accent;
  const mark = await markDataUri();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: paper,
        color: ink,
        padding: '80px 96px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og's
            ImageResponse renderer (satori) doesn't run through next/image at
            all; a plain <img> is the only option here. The two call sites'
            own `opengraph-image.tsx` filenames are exempted from this rule
            automatically, but this shared helper's filename isn't. */}
        <img src={mark} alt="" width={22} height={22} style={{ display: 'flex' }} />
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: accent,
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          {t('en', 'ogArchiveLabel')}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 24,
          fontSize: NAME_FONT_SIZE,
          fontWeight: 700,
          lineHeight: 1.05,
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        {name}
      </div>
      {meta.length > 0 && (
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 30,
            textTransform: 'uppercase',
            letterSpacing: 1,
            opacity: 0.75,
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          {meta}
        </div>
      )}
      <div style={{ display: 'flex', marginTop: 40, width: 120, height: 6, backgroundColor: accent }} />
    </div>
  );
}
