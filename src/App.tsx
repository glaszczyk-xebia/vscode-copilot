import React from "react";
import { useArtworks } from "./hooks/useArtworks";
import { ArtworkCard } from "./components/ArtworkCard";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ErrorMessage } from "./components/ErrorMessage";
import { APP_CONFIG } from "./constants";

const App: React.FC = () => {
  const { artworks, loading, error, refetch } = useArtworks(10, 100);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{APP_CONFIG.TITLE}</h1>
        <p className="app-subtitle">{APP_CONFIG.SUBTITLE}</p>
      </header>
      
      <main className="app-main">
        {artworks.length === 0 ? (
          <div className="no-artworks">
            <p>Nie znaleziono dzieł sztuki do wyświetlenia.</p>
            <button className="retry-button" onClick={refetch}>
              Odśwież
            </button>
          </div>
        ) : (
          <div className="artworks-grid">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.objectID} artwork={artwork} />
            ))}
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <button className="refresh-button" onClick={refetch}>
          Odśwież kolekcję
        </button>
      </footer>
    </div>
  );
};

export default App;
