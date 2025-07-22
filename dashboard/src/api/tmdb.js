import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch popular/trending movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching TMDB movies:', error);
    return [];
  }
};

// Search movies by query string
export const searchMovies = async (query) => {
  if (!query) return [];
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query,
        page: 1,
        include_adult: false,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
