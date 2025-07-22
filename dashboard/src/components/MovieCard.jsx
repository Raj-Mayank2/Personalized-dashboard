import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id, 'movie');

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col relative">
      <button
        onClick={() => toggleFavorite({ ...movie, type: 'movie' })}
        className="absolute top-2 right-2 text-red-500 text-xl focus:outline-none"
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-60 object-cover rounded mb-3"
        />
      )}
      <h3 className="font-semibold text-center">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
