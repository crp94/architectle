import { theme } from '@/lib/theme';

export type SectionRuleProps = {
  /**
   * Small-caps section heading, e.g. "PROVENANCE" or "ALSO DESIGNED". Omit
   * for a plain, unlabeled hairline divider.
   */
  label?: string;
  className?: string;
};

/**
 * The quiet horizontal-rule-plus-heading treatment for section breaks —
 * replaces v1's heavy filled banner rules (`borderBottomWidth:
 * theme.rule.thick` on a `bg-accent` block) with a single hairline and an
 * optional small-caps label. Presentational only: the label text arrives as
 * a prop, no i18n calls, no game logic.
 */
export function SectionRule({ label, className = '' }: SectionRuleProps) {
  return (
    <div data-testid="section-rule" className={`flex items-center gap-3 ${className}`}>
      {label && (
        // `/70` opacity, not `/60`: at this 10px size, `text-ink/60` on
        // `bg-paper` measures 4.46:1 — just under the 4.5:1 AA floor
        // (caught by e2e/a11y.spec.ts against real archive pages). `/70`
        // clears it at ~6.2:1, matching the `opacity-70` convention already
        // used elsewhere in the app for this kind of quiet secondary text.
        <span
          data-testid="section-rule-label"
          className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink/70"
          style={{ fontFamily: theme.type.ui }}
        >
          {label}
        </span>
      )}
      <span
        data-testid="section-rule-line"
        aria-hidden="true"
        className="flex-1 bg-frame-line"
        style={{ height: theme.rule.hairline }}
      />
    </div>
  );
}
