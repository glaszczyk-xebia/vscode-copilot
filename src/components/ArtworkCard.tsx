import React from 'react';
import { Artwork } from '../hooks/useArtworks';

interface ArtworkCardProps {
  artwork: Artwork;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <div className="artwork-card">
      <div className="artwork-image-container">
        <img 
          src={artwork.primaryImageSmall} 
          alt={artwork.title}
          className="artwork-image"
          loading="lazy"
        />
      </div>
      <div className="artwork-info">
        <h3 className="artwork-title">{artwork.title}</h3>
        <p className="artwork-artist">{artwork.artistDisplayName || 'Unknown Artist'}</p>
        {artwork.department && (
          <p className="artwork-department">{artwork.department}</p>
        )}
        {artwork.culture && (
          <p className="artwork-culture">{artwork.culture}</p>
        )}
        {artwork.medium && (
          <p className="artwork-medium">{artwork.medium}</p>
        )}
      </div>
    </div>
  );
};
