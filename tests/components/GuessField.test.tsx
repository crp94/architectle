import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import type { Architect } from '@/types/architect';

function ls(en: string, es: string, it: string) {
  return { en, es, it };
}

const architectOne: Architect = {
  id: 'architect-one',
  wikidataId: 'Q1',
  name: 'Architect One',
  alternativeNames: [],
  gender: 'woman',
  born: 1920,
  died: 1990,
  floruit: { start: 1950, end: 1980, override: false },
  movements: [{ id: 'brutalism', primary: true }],
  workRegions: ['Western Europe'],
  workCentroid: { lat: 48, lon: 2 },
  primaryTypology: 'civic',
  signatureMaterial: 'concrete',
  portrait: ls('Portrait.', 'Retrato.', 'Ritratto.'),
  awards: [],
  tier: 'canon',
  context: null,
  sources: [],
};

vi.mock('@/lib/pool', () => ({
  featuredRoster: () => [architectOne],
}));

const { GuessField } = await import('@/components/game/GuessField');

describe('GuessField', () => {
  afterEach(() => {
    cleanup();
  });

  it('refocuses the guess input after a suggestion is selected with the pointer', () => {
    const onGuess = vi.fn();
    render(<GuessField locale="en" onGuess={onGuess} />);
    const input = screen.getByLabelText('Name the architect');

    fireEvent.change(input, { target: { value: 'Architect' } });
    const suggestion = screen.getByRole('button', { name: 'Architect One' });
    fireEvent.click(suggestion);

    expect(onGuess).toHaveBeenCalledWith(architectOne);
    // Selecting a suggestion clears `value`, which unmounts the suggestion
    // list — including the button that was just clicked. A keyboard/
    // screen-reader user must not be left with focus dropped to
    // `document.body`; it must return to the guess input.
    expect(document.activeElement).toBe(input);
  });
});
