import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { GalleryFrame } from '@/components/ui/GalleryFrame';

// A stand-in for "the photograph" — GalleryFrame is agnostic about what its
// children actually are (a real caller passes a `next/image`), so a plain
// marker element is enough to test the frame itself without pulling in
// next/image or tripping the no-img-element lint rule for no reason.
function Photo({ label }: { label: string }) {
  return <div data-testid="photo" aria-label={label} />;
}

describe('GalleryFrame', () => {
  afterEach(() => {
    cleanup();
  });

  it('derives aspect-ratio from width/height with no separate measurement step', () => {
    render(
      <GalleryFrame width={1600} height={900}>
        <Photo label="A test building" />
      </GalleryFrame>,
    );
    const win = screen.getByTestId('gallery-frame-window');
    expect(win.style.aspectRatio).toBe(`${1600 / 900} / 1`);
  });

  it('prefers an explicit aspectRatio prop over width/height', () => {
    render(
      <GalleryFrame width={1600} height={900} aspectRatio={1}>
        <Photo label="A square crop" />
      </GalleryFrame>,
    );
    const win = screen.getByTestId('gallery-frame-window');
    expect(win.style.aspectRatio).toBe('1 / 1');
  });

  it('falls back to a sane default aspect ratio when neither prop is given', () => {
    render(
      <GalleryFrame>
        <Photo label="Unknown dimensions" />
      </GalleryFrame>,
    );
    const win = screen.getByTestId('gallery-frame-window');
    expect(win.style.aspectRatio).toBe(`${4 / 3} / 1`);
  });

  it('renders the supplied caption', () => {
    render(
      <GalleryFrame width={4} height={3} caption="Fallingwater · Photo: Jane Doe">
        <Photo label="Fallingwater" />
      </GalleryFrame>,
    );
    expect(screen.getByTestId('gallery-frame-caption').textContent).toContain('Fallingwater · Photo: Jane Doe');
  });

  it('omits the caption slot entirely when no caption prop is passed', () => {
    render(
      <GalleryFrame width={4} height={3}>
        <Photo label="No caption" />
      </GalleryFrame>,
    );
    expect(screen.queryByTestId('gallery-frame-caption')).toBeNull();
  });

  it('renders the children (the photograph) inside the frame window', () => {
    render(
      <GalleryFrame width={4} height={3}>
        <Photo label="Inside the window" />
      </GalleryFrame>,
    );
    const win = screen.getByTestId('gallery-frame-window');
    expect(win.querySelector('[data-testid="photo"]')).not.toBeNull();
  });
});
