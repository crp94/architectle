import type { EraResult, MovementResult, RegionResult, TypologyResult } from '@/lib/axes';
import { t, type Locale } from '@/lib/i18n';
import { SpecimenLabel, type SpecimenLabelState } from '@/components/ui/SpecimenLabel';

type Tone = SpecimenLabelState;

type AxisChipProps =
  | { axis: 'era'; result: EraResult; locale: Locale }
  | { axis: 'movement'; result: MovementResult; locale: Locale }
  | { axis: 'region'; result: RegionResult; locale: Locale }
  | { axis: 'typology'; result: TypologyResult; locale: Locale };

type ChipView = { tone: Tone; axisLabel: string; label: string; glyph: string; aria: string };

const COMPASS_KEY: Record<string, string> = {
  N: 'compassN', NE: 'compassNE', E: 'compassE', SE: 'compassSE',
  S: 'compassS', SW: 'compassSW', W: 'compassW', NW: 'compassNW',
};

// `SpecimenLabel`'s `partial` state tints only the VALUE text in `accent`
// on a plain `paper` background (9.18:1) — never `accent` as a fill behind
// `ink` text, which is the exact under-contrast pairing (~1.7:1) v1's flat
// `bg-accent`/`text-ink` chip used to render (see the t2b design-system
// report). Red is deliberately never used here — the design spec reserves
// it for the reveal/loss state, not this mid-round chip.
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
  return { tone, axisLabel: axis, label, glyph, aria };
}

function movementView(result: MovementResult, locale: Locale): ChipView {
  const key = result === 'EXACT' ? 'movementExact'
    : result === 'SHARED' ? 'movementShared'
      : result === 'FAMILY' ? 'movementFamily' : 'movementNone';
  const tone: Tone = result === 'EXACT' ? 'exact' : result === 'NONE' ? 'none' : 'partial';
  const label = t(locale, key);
  const axis = t(locale, 'axisMovement');
  return {
    tone, axisLabel: axis, label, glyph: '◆', aria: t(locale, 'movementChipAria', { axis, result: label }),
  };
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
  return {
    tone, axisLabel: axis, label: bearingLabel ? `${label} · ${bearingLabel}` : label, glyph: '◈', aria,
  };
}

function typologyView(result: TypologyResult, locale: Locale): ChipView {
  const key = result.match === 'EXACT' ? 'typologyExact'
    : result.match === 'PARTIAL' ? 'typologyPartial' : 'typologyNone';
  const tone: Tone = result.match === 'EXACT' ? 'exact' : result.match === 'PARTIAL' ? 'partial' : 'none';
  const label = t(locale, key);
  const axis = t(locale, 'axisTypology');
  return {
    tone, axisLabel: axis, label, glyph: '▧', aria: t(locale, 'typologyChipAria', { axis, result: label }),
  };
}

/**
 * Renders exactly one axis result as a `<SpecimenLabel />`: a decorative
 * glyph folded into the visible value, a short visible label, and a full
 * sentence on `aria-label` — the chips are the game's primary information
 * channel (design spec §4.4), so the accessible name carries the whole
 * comparison, not just the short label a sighted player sees. `role="img"`
 * on the outer wrapper replaces the whole subtree's accessible name with
 * `aria-label`, so folding the glyph into the visible text (rather than a
 * separately `aria-hidden` span, as v1 did) changes nothing for assistive
 * tech while letting the value render through `SpecimenLabel`'s own markup.
 */
export function AxisChip(props: AxisChipProps) {
  const view = props.axis === 'era' ? eraView(props.result, props.locale)
    : props.axis === 'movement' ? movementView(props.result, props.locale)
      : props.axis === 'region' ? regionView(props.result, props.locale)
        : typologyView(props.result, props.locale);

  return (
    <div
      role="img"
      aria-label={view.aria}
      data-testid={`axis-chip-${props.axis}`}
      data-tone={view.tone}
    >
      <SpecimenLabel label={view.axisLabel} value={`${view.glyph} ${view.label}`} state={view.tone} />
    </div>
  );
}
