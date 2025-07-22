import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Save favorites to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite: add if not exists, remove if exists
  const toggleFavorite = (item) => {
    const exists = favorites.find(f => f.id === item.id && f.type === item.type);
    if (exists) {
      setFavorites(favorites.filter(f => !(f.id === item.id && f.type === item.type)));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  // Check if item is favorite
  const isFavorite = (id, type) => {
    return favorites.some(f => f.id === id && f.type === type);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
