import React from 'react';
import { ArtworkSummary } from '../types/artwork.types';
import { ArtworkCard } from './ArtworkCard';
import { ACCESSIBILITY_LABELS } from '../constants/api.constants';

interface ArtworkGridProps {
  artworks: ArtworkSummary[];
  onArtworkClick?: ((artwork: ArtworkSummary) => void) | undefined;
}

/**
 * Grid layout component for displaying multiple artworks
 * Implements responsive design and accessibility features
 */
export const ArtworkGrid: React.FC<ArtworkGridProps> = React.memo(
  ({ artworks, onArtworkClick }) => {
    if (artworks.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Brak dzieł sztuki do wyświetlenia</p>
        </div>
      );
    }

    return (
      <section aria-label={ACCESSIBILITY_LABELS.ARTWORKS_LIST}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {artworks.map(artwork => (
            <div key={artwork.objectID} role="listitem">
              <ArtworkCard artwork={artwork} onArtworkClick={onArtworkClick} />
            </div>
          ))}
        </div>
      </section>
    );
  }
);

ArtworkGrid.displayName = 'ArtworkGrid';
