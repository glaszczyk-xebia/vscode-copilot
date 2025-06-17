import React from 'react';
import { ArtworkSummary } from '../types/artwork.types';
import { ACCESSIBILITY_LABELS } from '../constants/api.constants';

interface ArtworkCardProps {
  artwork: ArtworkSummary;
  onArtworkClick?: ((artwork: ArtworkSummary) => void) | undefined;
}

/**
 * Card component for displaying artwork summary information
 * Implements accessibility best practices and semantic HTML
 */
export const ArtworkCard: React.FC<ArtworkCardProps> = React.memo(({ artwork, onArtworkClick }) => {
  const handleClick = () => {
    onArtworkClick?.(artwork);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Pokaż szczegóły dzieła: ${artwork.title}`}
    >
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        {artwork.primaryImageSmall ? (
          <img
            src={artwork.primaryImageSmall}
            alt={ACCESSIBILITY_LABELS.ARTWORK_IMAGE_ALT(artwork.title, artwork.artistDisplayName)}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div
          className={`flex items-center justify-center text-gray-500 ${artwork.primaryImageSmall ? 'hidden' : ''}`}
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{artwork.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-1">{artwork.artistDisplayName}</p>
      </div>
    </article>
  );
});

ArtworkCard.displayName = 'ArtworkCard';
