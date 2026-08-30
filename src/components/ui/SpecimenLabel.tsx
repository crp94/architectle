import { theme } from '@/lib/theme';

export type SpecimenLabelState = 'exact' | 'partial' | 'none';

export type SpecimenLabelProps = {
  /** Small-caps field name, e.g. "TYPOLOGY" or "COMPLETED". */
  label: string;
  /** The value shown under the label. */
  value: string;
  /**
   * Optional comparison-result tint — the refined replacement for a v1
   * chip's fill color. Omit (or pass `'none'`) for a plain specimen label
   * with nothing to compare (e.g. an archive fact strip). `'exact'` knocks
   * the whole label out (ink fill, paper text) for the strongest possible
   * emphasis; `'partial'` colors just the value in the sparing `accent`
   * hue; `'none'` stays entirely neutral.
   */
  state?: SpecimenLabelState;
  className?: string;
};

const CONTAINER_TONE: Record<SpecimenLabelState, string> = {
  exact: 'bg-ink border-ink',
  partial: 'bg-paper border-accent',
  none: 'bg-paper border-frame-line',
};

// `/60` opacity on ink-over-paper measures 4.46:1 — just under the 4.5:1
// AA floor for this 10px label text (confirmed by e2e/a11y.spec.ts against
// the real rendered archive pages). `/70` clears it comfortably (~6.2:1),
// matching the `opacity-70` convention already used elsewhere in the app
// for this exact kind of quiet secondary text.
const LABEL_TONE: Record<SpecimenLabelState, string> = {
  exact: 'text-paper/70',
  partial: 'text-ink/70',
  none: 'text-ink/70',
};

const VALUE_TONE: Record<SpecimenLabelState, string> = {
  exact: 'text-paper',
  partial: 'text-accent',
  none: 'text-ink',
};

/**
 * A small-caps label + value pair with a hairline underline, tinted (or
 * not) by an optional comparison result. Replaces v1's brutalist filled
 * chip idiom (`<AxisChip />`) with a quieter, museum-label treatment.
 * Presentational only — the label and value text both arrive as props;
 * this component makes no i18n calls and holds no game logic.
 */
export function SpecimenLabel({
  label, value, state = 'none', className = '',
}: SpecimenLabelProps) {
  return (
    <div
      data-testid="specimen-label"
      data-state={state}
      className={`inline-flex flex-col gap-0.5 border-b px-2 py-1 ${CONTAINER_TONE[state]} ${className}`}
      style={{ borderBottomWidth: theme.rule.hairline }}
    >
      <span
        data-testid="specimen-label-label"
        className={`text-[10px] uppercase tracking-[0.2em] ${LABEL_TONE[state]}`}
        style={{ fontFamily: theme.type.ui }}
      >
        {label}
      </span>
      <span
        data-testid="specimen-label-value"
        className={`text-sm uppercase tracking-wide ${VALUE_TONE[state]}`}
        style={{ fontFamily: theme.type.ui }}
      >
        {value}
      </span>
    </div>
  );
}
