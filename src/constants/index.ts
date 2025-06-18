// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://collectionapi.metmuseum.org/public/collection/v1',
  DEFAULT_ARTWORK_COUNT: 10,
  DEFAULT_OFFSET: 100,
} as const;

// App Configuration
export const APP_CONFIG = {
  TITLE: 'Dzieła sztuki z The Met',
  SUBTITLE: 'Kolekcja Metropolitan Museum of Art w Nowym Jorku',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  FETCH_LIST_FAILED: 'Nie udało się pobrać listy dzieł sztuki',
  FETCH_ARTWORK_FAILED: (id: number) => `Nie udało się pobrać dzieła ${id}`,
  UNKNOWN_ERROR: 'Wystąpił nieznany błąd',
} as const;
