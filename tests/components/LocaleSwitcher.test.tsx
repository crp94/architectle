import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { LocaleSwitcher } from '@/components/game/LocaleSwitcher';

describe('LocaleSwitcher', () => {
  afterEach(() => {
    cleanup();
  });

  it('preserves other query params on the current URL, overwriting only lang', () => {
    render(<LocaleSwitcher locale="en" searchParams={{ e2eBuilding: 'villa-la-rotonda' }} />);

    const href = screen.getByTestId('locale-link-es').getAttribute('href') ?? '';
    const url = new URL(href, 'https://example.test');
    expect(url.searchParams.get('lang')).toBe('es');
    expect(url.searchParams.get('e2eBuilding')).toBe('villa-la-rotonda');
  });

  it('overwrites an existing lang param rather than duplicating it', () => {
    render(<LocaleSwitcher locale="es" searchParams={{ lang: 'es', e2eBuilding: 'villa-la-rotonda' }} />);

    const href = screen.getByTestId('locale-link-it').getAttribute('href') ?? '';
    const url = new URL(href, 'https://example.test');
    expect(url.searchParams.getAll('lang')).toEqual(['it']);
    expect(url.searchParams.get('e2eBuilding')).toBe('villa-la-rotonda');
  });

  it('produces a plain /?lang= link when there are no other params', () => {
    render(<LocaleSwitcher locale="en" searchParams={{}} />);

    const href = screen.getByTestId('locale-link-it').getAttribute('href') ?? '';
    const url = new URL(href, 'https://example.test');
    expect(url.pathname).toBe('/');
    expect(url.searchParams.get('lang')).toBe('it');
    expect([...url.searchParams.keys()]).toEqual(['lang']);
  });
});
