import React, { useCallback } from 'react';
import { ArtworkSummary } from './types/artwork.types';
import { useArtworks } from './hooks/useArtworks';
import { ArtworkGrid, LoadingIndicator, ErrorDisplay, ErrorBoundary } from './components';

/**
 * Main application component for displaying artworks from The Metropolitan Museum of Art
 * Implements accessibility best practices and error handling
 */
const App: React.FC = () => {
  const { artworks, isLoading, error, retryFetch } = useArtworks();

  /**
   * Handles artwork selection - placeholder for future functionality
   * Uses useCallback to prevent unnecessary re-renders
   */
  const handleArtworkClick = useCallback((artwork: ArtworkSummary) => {
    // TODO: Navigate to artwork details page or show modal
    // eslint-disable-next-line no-console
    console.log('Selected artwork:', artwork);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Dzieła sztuki z The Metropolitan Museum of Art
            </h1>
            <p className="mt-2 text-gray-600">
              Odkryj kolekcję światowej klasy dzieł sztuki z jednego z najważniejszych muzeów świata
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {isLoading && <LoadingIndicator />}

          {error && <ErrorDisplay error={error} onRetry={retryFetch} />}

          {!isLoading && !error && artworks.length > 0 && (
            <ArtworkGrid artworks={artworks} onArtworkClick={handleArtworkClick} />
          )}
        </main>

        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-500 text-sm">
              Dane pochodzą z{' '}
              <a
                href="https://metmuseum.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                The Metropolitan Museum of Art Collection API
              </a>
            </p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;
