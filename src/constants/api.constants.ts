/**
 * Constants for The Metropolitan Museum of Art API
 */

export const MET_API_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

export const API_ENDPOINTS = {
  OBJECTS: `${MET_API_BASE_URL}/objects`,
  OBJECT_DETAILS: (id: number) => `${MET_API_BASE_URL}/objects/${id}`,
  SEARCH: `${MET_API_BASE_URL}/search`,
  DEPARTMENTS: `${MET_API_BASE_URL}/departments`,
} as const;

export const ARTWORK_DISPLAY_LIMITS = {
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 50,
  STARTING_INDEX: 100,
} as const;

export const LOADING_MESSAGES = {
  LOADING_ARTWORKS: 'Ładowanie dzieł sztuki...',
  LOADING_ARTWORK_DETAILS: 'Ładowanie szczegółów dzieła...',
  ERROR_LOADING: 'Wystąpił błąd podczas ładowania',
  NO_ARTWORKS_FOUND: 'Nie znaleziono dzieł sztuki',
} as const;

export const ACCESSIBILITY_LABELS = {
  ARTWORK_IMAGE_ALT: (title: string, artist: string) =>
    `Dzieło sztuki: ${title}${artist ? ` autorstwa ${artist}` : ''}`,
  LOADING_INDICATOR: 'Wskaźnik ładowania',
  ARTWORKS_LIST: 'Lista dzieł sztuki',
  ARTWORK_ITEM: 'Element dzieła sztuki',
} as const;
