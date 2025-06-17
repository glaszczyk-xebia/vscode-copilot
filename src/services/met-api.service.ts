import { ArtworkSummary, Artwork, SearchResult } from '../types/artwork.types';
import { API_ENDPOINTS, ARTWORK_DISPLAY_LIMITS } from '../constants/api.constants';

/**
 * Service for interacting with The Metropolitan Museum of Art API
 * Implements error handling and data transformation
 */
export class MetMuseumApiService {
  /**
   * Fetches a list of object IDs from the Met API
   * @returns Promise with search results containing object IDs
   */
  private static async fetchObjectIds(): Promise<SearchResult> {
    try {
      const response = await fetch(API_ENDPOINTS.OBJECTS);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.objectIDs || !Array.isArray(data.objectIDs)) {
        throw new Error('Invalid response format: objectIDs not found');
      }

      return {
        total: data.total || data.objectIDs.length,
        objectIDs: data.objectIDs,
      };
    } catch (error) {
      console.error('Error fetching object IDs:', error);
      throw new Error('Failed to fetch artwork collection');
    }
  }

  /**
   * Fetches detailed information about a specific artwork
   * @param objectId - The ID of the artwork to fetch
   * @returns Promise with artwork details
   */
  private static async fetchArtworkDetails(objectId: number): Promise<Artwork> {
    try {
      const response = await fetch(API_ENDPOINTS.OBJECT_DETAILS(objectId));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const artwork = await response.json();

      if (!artwork.objectID) {
        throw new Error(`Invalid artwork data for ID: ${objectId}`);
      }

      return artwork;
    } catch (error) {
      console.error(`Error fetching artwork details for ID ${objectId}:`, error);
      throw new Error(`Failed to fetch artwork details for ID: ${objectId}`);
    }
  }

  /**
   * Transforms full artwork data to summary format for display
   * @param artwork - Full artwork object
   * @returns Simplified artwork summary
   */
  private static transformToArtworkSummary(artwork: Artwork): ArtworkSummary {
    return {
      objectID: artwork.objectID,
      title: artwork.title || 'Untitled',
      primaryImageSmall: artwork.primaryImageSmall || '',
      artistDisplayName: artwork.artistDisplayName || 'Unknown Artist',
    };
  }

  /**
   * Fetches a collection of artworks with their basic information
   * @param limit - Number of artworks to fetch (default: 10)
   * @param startIndex - Starting index for artwork selection (default: 100)
   * @returns Promise with array of artwork summaries
   */
  public static async fetchArtworkCollection(
    limit: number = ARTWORK_DISPLAY_LIMITS.DEFAULT_LIMIT,
    startIndex: number = ARTWORK_DISPLAY_LIMITS.STARTING_INDEX
  ): Promise<ArtworkSummary[]> {
    try {
      // Step 1: Get object IDs
      const searchResult = await this.fetchObjectIds();

      // Step 2: Select a subset of IDs
      const selectedIds = searchResult.objectIDs.slice(startIndex, startIndex + limit);

      if (selectedIds.length === 0) {
        throw new Error('No artworks found in the specified range');
      }

      // Step 3: Fetch details for selected artworks
      const artworkPromises = selectedIds.map(id => this.fetchArtworkDetails(id));
      const artworksWithDetails = await Promise.allSettled(artworkPromises);

      // Step 4: Filter successful responses and transform to summaries
      const successfulArtworks = artworksWithDetails
        .filter(
          (result): result is PromiseFulfilledResult<Artwork> =>
            result.status === 'fulfilled' && result.value !== null
        )
        .map(result => this.transformToArtworkSummary(result.value));

      if (successfulArtworks.length === 0) {
        throw new Error('No valid artworks could be loaded');
      }

      return successfulArtworks;
    } catch (error) {
      console.error('Error in fetchArtworkCollection:', error);
      throw error;
    }
  }

  /**
   * Fetches full details for a single artwork
   * @param objectId - The ID of the artwork
   * @returns Promise with full artwork details
   */
  public static async fetchSingleArtwork(objectId: number): Promise<Artwork> {
    return this.fetchArtworkDetails(objectId);
  }
}
