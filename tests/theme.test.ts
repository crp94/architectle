import { describe, it, expect } from 'vitest';
import { theme } from '@/lib/theme';

describe('theme', () => {
  it('exposes the brutalist palette', () => {
    expect(theme.color.ink).toBe('#141414');
    expect(theme.color.paper).toBe('#d9d6d0');
    expect(theme.color.accent).toBe('#e8dc50');
    expect(theme.color.warn).toBe('#d4321e');
  });

  it('has no soft shadows', () => {
    expect(theme.shadow.hard).toBe('6px 6px 0 #141414');
    expect(JSON.stringify(theme)).not.toMatch(/rgba|blur|border-radius/);
  });
});
