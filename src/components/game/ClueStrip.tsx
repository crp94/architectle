import type { Clue } from '@/lib/clues';
import type { MovementId } from '@/types/movement';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { MOVEMENTS } from '@/data/movements';
import { imageCredit, MATERIAL_KEY, TYPOLOGY_KEY } from '@/lib/facts';
import { SpecimenLabel } from '@/components/ui/SpecimenLabel';
import { SectionRule } from '@/components/ui/SectionRule';
import { GalleryFrame } from '@/components/ui/GalleryFrame';

export type ClueStripProps = {
  locale: Locale;
  clues: Clue[];
  /** The target building's id — used only to build the second-photo's
   * `<img>` src (`/buildings/<id>-2.avif`, matching `fetchImages.ts`'s
   * `extraImages[0]` suffix convention). Never displayed. */
  buildingId: string;
  /** Localized building name, reused as the second photo's `alt` text. */
  buildingName: string;
};

function movementLabel(movementId: MovementId | null, locale: Locale): string {
  if (!movementId) return t(locale, 'architectUnaffiliated');
  return MOVEMENTS[movementId]?.name ?? movementId;
}

/**
 * The "case file" clue ladder (design spec §4): one entry per clue unlocked
 * by `cluesAt()` so far, rendered in the specimen-label idiom. Purely
 * presentational over whatever `clues` the caller already computed —
 * `cluesAt()`'s own degradation rule (skip second-photo without extraImages,
 * promote movement-sibling up a slot) means this component never has to
 * know why a particular clue kind is missing, only how to render whichever
 * ones are present.
 */
export function ClueStrip({
  locale, clues, buildingId, buildingName,
}: ClueStripProps) {
  if (clues.length === 0) return null;

  return (
    <div data-testid="clue-strip" className="flex flex-col gap-3">
      <SectionRule label={t(locale, 'clueStripHeading')} />
      <div className="flex flex-wrap items-end gap-3">
        {clues.map((clue) => (
          <ClueEntry
            key={clue.kind}
            clue={clue}
            locale={locale}
            buildingId={buildingId}
            buildingName={buildingName}
          />
        ))}
      </div>
    </div>
  );
}

function ClueEntry({
  clue, locale, buildingId, buildingName,
}: { clue: Clue; locale: Locale; buildingId: string; buildingName: string }) {
  switch (clue.kind) {
    case 'year':
      return (
        <div data-testid="clue-year">
          <SpecimenLabel label={t(locale, 'clueYear')} value={String(clue.year)} />
        </div>
      );

    case 'country':
      return (
        <div data-testid="clue-country">
          <SpecimenLabel label={t(locale, 'clueCountry')} value={clue.countryCode} />
        </div>
      );

    case 'typology-material':
      return (
        <div data-testid="clue-typology-material">
          <SpecimenLabel
            label={t(locale, 'clueTypologyMaterial')}
            value={`${t(locale, TYPOLOGY_KEY[clue.typology])} · ${t(locale, MATERIAL_KEY[clue.material])}`}
          />
        </div>
      );

    case 'second-photo':
      return (
        <div data-testid="clue-second-photo" className="flex flex-col gap-1">
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-ink/60"
            style={{ fontFamily: theme.type.ui }}
          >
            {t(locale, 'clueSecondPhoto')}
          </span>
          <GalleryFrame
            aspectRatio={clue.image.width / clue.image.height}
            caption={imageCredit(clue.image, locale)}
            className="w-40 sm:w-48"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- a
                fixed extra angle, shown small; next/image's responsive
                sizing machinery is overkill for this thumbnail. */}
            <img
              data-testid="clue-second-photo-image"
              src={`/buildings/${buildingId}-2.avif`}
              alt={buildingName}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
              }}
            />
          </GalleryFrame>
        </div>
      );

    case 'movement-sibling':
      return (
        <div data-testid="clue-movement-sibling" className="flex flex-wrap gap-3">
          <SpecimenLabel
            label={t(locale, 'clueMovementSibling')}
            value={movementLabel(clue.movementId, locale)}
          />
          {clue.sibling && (
            <SpecimenLabel
              label={t(locale, 'clueAlsoDesigned')}
              value={clue.sibling.name[locale] ?? clue.sibling.name.en}
            />
          )}
        </div>
      );

    default:
      return null;
  }
}
