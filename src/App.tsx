import React, { useEffect, useState } from "react";

type Artwork = {
  objectID: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
};

const App: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      const res = await fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects",
      );
      const data = await res.json();
      // Pobierz szczegóły dla pierwszych 10 dzieł
      const firstTen = data.objectIDs.slice(100, 110);
      const details = await Promise.all(
        firstTen.map(async (id: number) => {
          const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
          );
          return await res.json();
        }),
      );
      setArtworks(details);
      setLoading(false);
    };
    fetchArtworks();
  }, []);

  if (loading) return <div>Ładowanie...</div>;

  return (
    <div>
      <h1>Dzieła sztuki z The Met</h1>
      <ul>
        {artworks.map((art) => (
          <li key={art.objectID}>
            <img src={art.primaryImageSmall} alt={art.title} width={100} />
            <div>
              {art.title} — {art.artistDisplayName}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
