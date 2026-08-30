import { describe, it, expect } from 'vitest';
import { STRINGS, LOCALES, t } from '@/lib/i18n';

describe('i18n', () => {
  it('has every key in every locale', () => {
    const keys = Object.keys(STRINGS.en);
    for (const locale of LOCALES) {
      for (const k of keys) {
        expect(STRINGS[locale][k as keyof typeof STRINGS.en], `${locale}.${k}`).toBeTruthy();
      }
      expect(Object.keys(STRINGS[locale]).sort()).toEqual(keys.sort());
    }
  });

  it('interpolates named params', () => {
    expect(t('en', 'guessCounter', { n: 3, total: 6 })).toBe('Guess 3 of 6');
  });

  it('falls back to the key rather than throwing on a missing string', () => {
    expect(t('en', 'nope' as never)).toBe('nope');
  });
});
