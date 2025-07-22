import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const FavoriteSection = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  if (favorites.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">⭐ Favorites</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => {
          const isMovie = item.type === 'movie';
          const imageUrl = isMovie
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : item.urlToImage || '';
          const title = item.title || item.name || 'Untitled';
          const url = isMovie ? `https://www.themoviedb.org/movie/${item.id}` : item.url;

          return (
            <div key={`${item.type}-${item.id}`} className="bg-white rounded shadow overflow-hidden relative">
              {imageUrl && (
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
              )}

              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View →
                  </a>
                )}
                <button
                  onClick={() => toggleFavorite(item)}
                  className="block text-xs text-red-400 hover:text-red-600 mt-2"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FavoriteSection;
