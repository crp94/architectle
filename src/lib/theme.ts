export const theme = {
  color: {
    ink: '#141414',
    paper: '#d9d6d0',
    paperAlt: '#c8c4bc',
    accent: '#e8dc50',
    // Darkened from the spec's original #d4321e (3.38:1 against `paper`,
    // fails WCAG AA's 4.5:1 text minimum) to #a3271a (5.06:1) — every use
    // is small text (kicker labels on archive pages / Reveal), never a
    // background, so this had to move to stay legible. Kept in sync with
    // `--color-warn` in src/app/globals.css. See e2e/a11y.spec.ts.
    warn: '#a3271a',
    white: '#ffffff',
  },
  shadow: { hard: '6px 6px 0 #141414' },
  rule: { thin: '2px', thick: '3px' },
  type: {
    display: "'Archivo Black', 'Arial Black', Impact, sans-serif",
    body: "Georgia, 'Times New Roman', serif",
    mono: "'IBM Plex Mono', ui-monospace, monospace",
  },
} as const;
