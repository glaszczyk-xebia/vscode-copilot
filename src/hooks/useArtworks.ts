import { useEffect, useState } from 'react';
import { API_CONFIG, ERROR_MESSAGES } from '../constants';

export type Artwork = {
  objectID: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  department?: string;
  culture?: string;
  period?: string;
  medium?: string;
  dimensions?: string;
};

type UseArtworksResult = {
  artworks: Artwork[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export const useArtworks = (
  count: number = API_CONFIG.DEFAULT_ARTWORK_COUNT, 
  offset: number = API_CONFIG.DEFAULT_OFFSET
): UseArtworksResult => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch list of object IDs
      const response = await fetch(`${API_CONFIG.BASE_URL}/objects`);
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.FETCH_LIST_FAILED);
      }
      
      const data = await response.json();
      const selectedIds = data.objectIDs.slice(offset, offset + count);
      
      // Fetch details for selected artworks
      const artworkDetails = await Promise.allSettled(
        selectedIds.map(async (id: number) => {
          const response = await fetch(`${API_CONFIG.BASE_URL}/objects/${id}`);
          if (!response.ok) {
            throw new Error(ERROR_MESSAGES.FETCH_ARTWORK_FAILED(id));
          }
          return response.json();
        })
      );
      
      // Filter successful responses and ensure they have required fields
      const validArtworks = artworkDetails
        .filter((result): result is PromiseFulfilledResult<Artwork> => 
          result.status === 'fulfilled' && 
          result.value.title && 
          result.value.primaryImageSmall
        )
        .map(result => result.value);
      
      setArtworks(validArtworks);
    } catch (err) {
      setError(err instanceof Error ? err.message : ERROR_MESSAGES.UNKNOWN_ERROR);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, [count, offset]);

  return {
    artworks,
    loading,
    error,
    refetch: fetchArtworks,
  };
};
