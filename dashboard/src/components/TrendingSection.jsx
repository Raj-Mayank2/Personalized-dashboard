import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';
import MovieCard from './MovieCard';

const TrendingSection = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTopMovies(movies.slice(0, 6)); // Show top 6 movies
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">🎬 Trending Movies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
