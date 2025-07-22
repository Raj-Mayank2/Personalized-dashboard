import React, { useEffect, useState } from 'react';
import { fetchNewsByCategory } from '../api/news';
import { fetchTrendingMovies } from '../api/tmdb';
import { FaNewspaper, FaFilm } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';


const PersonalizedFeed = () => {
    const [articles, setArticles] = useState([]);
    const [movies, setMovies] = useState([]);
    const { addFavorite } = useFavorites();


    useEffect(() => {
        fetchNewsByCategory('technology').then(setArticles);
        fetchTrendingMovies().then(setMovies);
    }, []);

    return (
        <section>
            <div className="flex items-center gap-2 mb-4">
                <FaNewspaper className="text-blue-600 text-xl" />
                <h2 className="text-xl font-semibold">🧠 Personalized Feed</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {articles.map((article, idx) => (
                    <div key={idx} className="bg-white rounded shadow overflow-hidden">
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-1">{article.title}</h3>
                            <p className="text-gray-700 mb-3 line-clamp-3">
                                {article.description || 'No description available.'}
                            </p>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Read More →
                            </a>
                            <button
                                onClick={() => addFavorite({ id: article.url, type: 'news', title: article.title, image: article.urlToImage, url: article.url })}
                                className="text-sm text-blue-500 hover:underline mt-2"
                            >
                                ❤️ Add to Favorites
                            </button>

                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 mb-4">
                <FaFilm className="text-red-600 text-xl" />
                <h2 className="text-xl font-semibold">🎬 Movie Recommendations</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div key={movie.id} className="bg-white rounded shadow overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-1">{movie.title}</h3>
                            <p className="text-gray-700 mb-3 line-clamp-3">
                                {movie.overview || 'No overview available.'}
                            </p>
                            <a
                                href={`https://www.themoviedb.org/movie/${movie.id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-red-600 hover:underline text-sm"
                            >
                                View on TMDB →
                            </a>
                            <button
                                onClick={() => addFavorite({ id: movie.id, type: 'movie', title: movie.title, image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, url: `https://www.themoviedb.org/movie/${movie.id}` })}
                                className="text-sm text-red-500 hover:underline mt-2"
                            >
                                ❤️ Add to Favorites
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PersonalizedFeed;
