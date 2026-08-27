'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { roster } from '@/lib/pool';
import type { Architect } from '@/types/architect';
import { t, type Locale } from '@/lib/i18n';

export type GuessFieldProps = {
  locale: Locale;
  onGuess: (architect: Architect) => void;
  disabled?: boolean;
};

const MAX_SUGGESTIONS = 6;

/**
 * Diacritic-folded, case-insensitive comparison key. NFD-decomposes and
 * strips combining marks so "Jeanneret" matches "Jeanneret" regardless of
 * how either string is authored, and so a plain-ASCII guess still matches
 * an accented roster name.
 */
function fold(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining accents (NFD diacritics)
    .toLowerCase()
    .trim();
}

function matches(architect: Architect, query: string): boolean {
  if (fold(architect.name).includes(query)) return true;
  return architect.alternativeNames.some((alt) => fold(alt).includes(query));
}

function resolve(architects: Architect[], input: string): Architect | undefined {
  const query = fold(input);
  if (!query) return undefined;
  return architects.find(
    (a) => fold(a.name) === query || a.alternativeNames.some((alt) => fold(alt) === query),
  );
}

/**
 * The only place the game refuses a player (design spec §4.3): guesses are
 * limited to `roster()` — every architect referenced by at least one
 * building — matched by a diacritic-folded substring against the full name
 * or any documented alternative name, so "Le Corbusier" is reachable by
 * typing "Jeanneret".
 */
export function GuessField({ locale, onGuess, disabled = false }: GuessFieldProps) {
  const [value, setValue] = useState('');
  const [rejected, setRejected] = useState<string | null>(null);
  const architects = roster();

  const suggestions = useMemo(() => {
    const query = fold(value);
    if (!query) return [];
    return architects.filter((a) => matches(a, query)).slice(0, MAX_SUGGESTIONS);
  }, [architects, value]);

  function handleSelect(architect: Architect) {
    onGuess(architect);
    setValue('');
    setRejected(null);
  }

  function handleSubmit(input: string) {
    const trimmed = input.trim();
    if (!trimmed) return;
    const match = resolve(architects, trimmed);
    if (match) {
      handleSelect(match);
    } else {
      setRejected(trimmed);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!disabled) handleSubmit(value);
      }}
      className="flex flex-col gap-2"
    >
      <label htmlFor="architect-guess" className="sr-only">
        {t(locale, 'guessFieldLabel')}
      </label>
      <div className="flex gap-2">
        <input
          id="architect-guess"
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => {
            setValue(e.target.value);
            setRejected(null);
          }}
          placeholder={t(locale, 'guessFieldPlaceholder')}
          autoComplete="off"
          className="flex-1 border-2 border-ink bg-paper px-3 py-2 text-ink"
        />
        <button
          type="submit"
          disabled={disabled}
          className="border-2 border-ink bg-ink px-4 py-2 uppercase text-paper"
        >
          {t(locale, 'guessSubmit')}
        </button>
      </div>

      {value.trim().length > 0 && suggestions.length > 0 && (
        <ul role="listbox" aria-label={t(locale, 'guessFieldLabel')} className="flex flex-col border-2 border-ink">
          {suggestions.map((a) => (
            <li key={a.id}>
              <button
                type="button"
                onClick={() => handleSelect(a)}
                className="w-full px-3 py-1 text-left hover:bg-paper-alt"
              >
                {a.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {rejected && (
        <p role="alert" data-testid="roster-rejection" className="text-sm">
          {t(locale, 'rosterRejection', { name: rejected })}{' '}
          <Link href="/architects" className="underline">
            {t(locale, 'rosterRejectionLink')}
          </Link>
        </p>
      )}
    </form>
  );
}
