import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import type { ImageRecord } from '@/types/common';
import { ImageGallery } from '@/components/archive/ImageGallery';

const images: ImageRecord[] = [
  {
    commonsFile: 'File:Angle-2.jpg',
    photographer: 'Photographer Two',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Angle-2.jpg',
    width: 1200,
    height: 900,
  },
  {
    commonsFile: 'File:Angle-3.jpg',
    photographer: 'Photographer Three',
    license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Angle-3.jpg',
    width: 1200,
    height: 900,
  },
];

describe('ImageGallery', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders nothing at all when there are no extra images', () => {
    const { container } = render(
      <ImageGallery buildingId="test-building" buildingName="Test Building" images={[]} locale="en" />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders one gallery-framed print per extra image, addressed by the fetchImages.ts suffix convention', () => {
    render(
      <ImageGallery buildingId="test-building" buildingName="Test Building" images={images} locale="en" />,
    );
    // extraImages[0] -> <slug>-2.avif, extraImages[1] -> <slug>-3.avif (see
    // src/lib/facts.ts's extraImageSrc, mirroring fetchImages.ts's targetPath).
    const first = screen.getByTestId('image-gallery-photo-0');
    expect(decodeURIComponent(first.getAttribute('src') ?? '')).toContain('/buildings/test-building-2.avif');
    const second = screen.getByTestId('image-gallery-photo-1');
    expect(decodeURIComponent(second.getAttribute('src') ?? '')).toContain('/buildings/test-building-3.avif');
  });

  it('gives each print its own alt text and a caption crediting its photographer', () => {
    render(
      <ImageGallery buildingId="test-building" buildingName="Test Building" images={images} locale="en" />,
    );
    const first = screen.getByTestId('image-gallery-photo-0');
    const second = screen.getByTestId('image-gallery-photo-1');
    expect(first.getAttribute('alt')).not.toBe(second.getAttribute('alt'));
    expect(first.getAttribute('alt')).toContain('Test Building');

    const captions = screen.getAllByTestId('gallery-frame-caption').map((c) => c.textContent ?? '');
    expect(captions.some((c) => c.includes('Photographer Two'))).toBe(true);
    expect(captions.some((c) => c.includes('Photographer Three'))).toBe(true);
  });

  it('localizes the "another angle" caption text', () => {
    render(
      <ImageGallery buildingId="test-building" buildingName="Test Building" images={[images[0]]} locale="es" />,
    );
    const caption = screen.getByTestId('gallery-frame-caption').textContent ?? '';
    expect(caption.toLowerCase()).toContain('ángulo');
  });
});
