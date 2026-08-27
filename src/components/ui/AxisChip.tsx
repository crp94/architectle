import type { EraResult, MovementResult, RegionResult, TypologyResult } from '@/lib/axes';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';

type Tone = 'exact' | 'partial' | 'none';

type AxisChipProps =
  | { axis: 'era'; result: EraResult; locale: Locale }
  | { axis: 'movement'; result: MovementResult; locale: Locale }
  | { axis: 'region'; result: RegionResult; locale: Locale }
  | { axis: 'typology'; result: TypologyResult; locale: Locale };

type ChipView = { tone: Tone; label: string; glyph: string; aria: string };

const COMPASS_KEY: Record<string, string> = {
  N: 'compassN', NE: 'compassNE', E: 'compassE', SE: 'compassSE',
  S: 'compassS', SW: 'compassSW', W: 'compassW', NW: 'compassNW',
};

// Acid-yellow (`bg-accent`) is reserved for a genuine partial match; a
// normal "no relation" chip stays in the plain paper/ink palette. Red is
// deliberately never used here — the design spec reserves it for the
// reveal/loss state (design spec §3), which is Task 12's `<Reveal />`, not
// this mid-round chip.
function eraView(result: EraResult, locale: Locale): ChipView {
  const bucketKey = result.bucket === 'CONTEMPORARY' ? 'eraContemporary'
    : result.bucket === 'NEAR' ? 'eraNear' : 'eraFar';
  const tone: Tone = result.bucket === 'CONTEMPORARY' ? 'exact' : result.bucket === 'NEAR' ? 'partial' : 'none';
  const label = t(locale, bucketKey);
  const axis = t(locale, 'axisEra');
  const years = Math.round(Math.abs(result.deltaYears));
  const aria = result.direction === 'same'
    ? t(locale, 'eraChipAriaSame', { axis, bucket: label })
    : t(locale, 'eraChipAriaDiff', {
      axis,
      bucket: label,
      years,
      direction: t(locale, result.direction === 'earlier' ? 'eraDirectionEarlier' : 'eraDirectionLater'),
    });
  const glyph = result.direction === 'earlier' ? '←' : result.direction === 'later' ? '→' : '=';
  return { tone, label, glyph, aria };
}

function movementView(result: MovementResult, locale: Locale): ChipView {
  const key = result === 'EXACT' ? 'movementExact'
    : result === 'SHARED' ? 'movementShared'
      : result === 'FAMILY' ? 'movementFamily' : 'movementNone';
  const tone: Tone = result === 'EXACT' ? 'exact' : result === 'NONE' ? 'none' : 'partial';
  const label = t(locale, key);
  const axis = t(locale, 'axisMovement');
  return { tone, label, glyph: '◆', aria: t(locale, 'movementChipAria', { axis, result: label }) };
}

function regionView(result: RegionResult, locale: Locale): ChipView {
  const key = result.match === 'EXACT' ? 'regionExact'
    : result.match === 'REGION' ? 'regionRegionMatch' : 'regionNone';
  const tone: Tone = result.match === 'EXACT' ? 'exact' : result.match === 'REGION' ? 'partial' : 'none';
  const label = t(locale, key);
  const axis = t(locale, 'axisRegion');
  const aria = result.bearing
    ? t(locale, 'regionChipAriaBearing', { axis, result: label, bearing: t(locale, COMPASS_KEY[result.bearing]) })
    : t(locale, 'regionChipAria', { axis, result: label });
  const bearingLabel = result.bearing ? t(locale, COMPASS_KEY[result.bearing]) : null;
  return { tone, label: bearingLabel ? `${label} · ${bearingLabel}` : label, glyph: '◈', aria };
}

function typologyView(result: TypologyResult, locale: Locale): ChipView {
  const key = result.match === 'EXACT' ? 'typologyExact'
    : result.match === 'PARTIAL' ? 'typologyPartial' : 'typologyNone';
  const tone: Tone = result.match === 'EXACT' ? 'exact' : result.match === 'PARTIAL' ? 'partial' : 'none';
  const label = t(locale, key);
  const axis = t(locale, 'axisTypology');
  return { tone, label, glyph: '▧', aria: t(locale, 'typologyChipAria', { axis, result: label }) };
}

const TONE_CLASS: Record<Tone, string> = {
  exact: 'bg-ink text-paper',
  partial: 'bg-accent text-ink',
  none: 'bg-paper text-ink',
};

/**
 * Renders exactly one axis result: a decorative glyph, a short visible
 * label, and a full sentence on `aria-label` — the chips are the game's
 * primary information channel (design spec §4.4), so the accessible name
 * carries the whole comparison, not just the short label a sighted player
 * sees.
 */
export function AxisChip(props: AxisChipProps) {
  const view = props.axis === 'era' ? eraView(props.result, props.locale)
    : props.axis === 'movement' ? movementView(props.result, props.locale)
      : props.axis === 'region' ? regionView(props.result, props.locale)
        : typologyView(props.result, props.locale);

  return (
    <span
      role="img"
      aria-label={view.aria}
      data-testid={`axis-chip-${props.axis}`}
      data-tone={view.tone}
      className={`inline-flex items-center gap-1 border-2 border-ink px-2 py-1 text-xs uppercase tracking-wide ${TONE_CLASS[view.tone]}`}
      style={{ fontFamily: theme.type.mono }}
    >
      <span aria-hidden="true">{view.glyph}</span>
      <span>{view.label}</span>
    </span>
  );
}
