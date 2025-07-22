import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import PersonalizedFeed from '../components/PersonalizedFeed';
import TrendingSection from '../components/TrendingSection';
import FavoriteSection from '../components/FavoriteSection';
import { searchMovies } from '../api/tmdb';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const fetchResults = async () => {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
      setIsSearching(false);
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <DashboardLayout searchQuery={searchQuery} onSearch={setSearchQuery}>
      {isSearching && <p>Loading results...</p>}

      {searchQuery && !isSearching && searchResults.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((movie) => (
              <div key={movie.id} className="bg-white rounded shadow p-4 flex flex-col">
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-60 object-cover rounded mb-3"
                  />
                )}
                <h3 className="font-semibold text-center">{movie.title}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {!searchQuery && (
        <div className="grid gap-6">
          <PersonalizedFeed />
          <TrendingSection />
          <FavoriteSection />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
