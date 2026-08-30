import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { SpecimenLabel } from '@/components/ui/SpecimenLabel';

describe('SpecimenLabel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the label and value text', () => {
    render(<SpecimenLabel label="Typology" value="Museum" />);
    expect(screen.getByTestId('specimen-label-label').textContent).toContain('Typology');
    expect(screen.getByTestId('specimen-label-value').textContent).toContain('Museum');
  });

  it('defaults to a neutral, untinted state', () => {
    render(<SpecimenLabel label="Typology" value="Museum" />);
    const root = screen.getByTestId('specimen-label');
    expect(root.dataset.state).toBe('none');
    expect(screen.getByTestId('specimen-label-value').className).toContain('text-ink');
  });

  it('knocks out the label (ink fill, paper text) for an exact match', () => {
    render(<SpecimenLabel label="Movement" value="Brutalism" state="exact" />);
    const root = screen.getByTestId('specimen-label');
    expect(root.dataset.state).toBe('exact');
    expect(root.className).toContain('bg-ink');
    expect(screen.getByTestId('specimen-label-value').className).toContain('text-paper');
  });

  it('tints only the value in accent for a partial match, without filling the container', () => {
    render(<SpecimenLabel label="Era" value="Near" state="partial" />);
    const root = screen.getByTestId('specimen-label');
    expect(root.dataset.state).toBe('partial');
    expect(root.className).not.toContain('bg-ink');
    expect(screen.getByTestId('specimen-label-value').className).toContain('text-accent');
  });

  it('accepts an additional className without dropping the base classes', () => {
    render(<SpecimenLabel label="Region" value="Europe" className="extra-class" />);
    const root = screen.getByTestId('specimen-label');
    expect(root.className).toContain('extra-class');
    expect(root.className).toContain('inline-flex');
  });
});
