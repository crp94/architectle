import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { SectionRule } from '@/components/ui/SectionRule';
import { theme } from '@/lib/theme';

describe('SectionRule', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a hairline-height rule with the label omitted', () => {
    render(<SectionRule />);
    expect(screen.queryByTestId('section-rule-label')).toBeNull();
    expect(screen.getByTestId('section-rule-line').style.height).toBe(theme.rule.hairline);
  });

  it('renders the label when supplied', () => {
    render(<SectionRule label="Provenance" />);
    expect(screen.getByTestId('section-rule-label').textContent).toContain('Provenance');
  });

  it('hides the decorative rule line from assistive tech', () => {
    render(<SectionRule label="Also designed" />);
    expect(screen.getByTestId('section-rule-line').getAttribute('aria-hidden')).toBe('true');
  });
});
