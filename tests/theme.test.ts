import { describe, it, expect } from 'vitest';
import { theme } from '@/lib/theme';

describe('theme', () => {
  it('exposes the brutalist palette', () => {
    expect(theme.color.ink).toBe('#141414');
    expect(theme.color.paper).toBe('#d9d6d0');
    expect(theme.color.accent).toBe('#e8dc50');
    // #a3271a, not the spec's original #d4321e — that was only 3.38:1
    // against `paper`, below WCAG AA's 4.5:1 text minimum (every use is
    // small text, never a background). See e2e/a11y.spec.ts.
    expect(theme.color.warn).toBe('#a3271a');
  });

  it('has no soft shadows', () => {
    expect(theme.shadow.hard).toBe('6px 6px 0 #141414');
    expect(JSON.stringify(theme)).not.toMatch(/rgba|blur|border-radius/);
  });
});
