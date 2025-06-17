import { useState, useEffect, useCallback } from 'react';
import { ArtworkSummary, LoadingState } from '../types/artwork.types';
import { MetMuseumApiService } from '../services/met-api.service';

/**
 * Custom hook for managing artwork data fetching and state
 * Implements error handling and loading states
 */
export const useArtworks = (limit?: number, startIndex?: number) => {
  const [artworks, setArtworks] = useState<ArtworkSummary[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    error: null,
  });

  /**
   * Fetches artworks from the Met API
   * Uses useCallback to prevent unnecessary re-renders
   */
  const fetchArtworks = useCallback(async () => {
    setLoadingState({ isLoading: true, error: null });

    try {
      const fetchedArtworks = await MetMuseumApiService.fetchArtworkCollection(limit, startIndex);

      setArtworks(fetchedArtworks);
      setLoadingState({ isLoading: false, error: null });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setLoadingState({ isLoading: false, error: errorMessage });
      setArtworks([]);
    }
  }, [limit, startIndex]);

  /**
   * Retry function for failed requests
   */
  const retryFetch = useCallback(() => {
    fetchArtworks();
  }, [fetchArtworks]);

  // Fetch artworks on mount and when dependencies change
  useEffect(() => {
    fetchArtworks();
  }, [fetchArtworks]);

  return {
    artworks,
    isLoading: loadingState.isLoading,
    error: loadingState.error,
    retryFetch,
  };
};
