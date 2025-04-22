import { useState, useEffect } from 'react';

export type SavedQuote = {
  id: string;
  text: string;
  author: string;
  timestamp: number;
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<SavedQuote[]>([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteQuotes');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (quote: string, author: string) => {
    const newFavorite: SavedQuote = {
      id: Date.now().toString(),
      text: quote,
      author,
      timestamp: Date.now()
    };
    setFavorites(prev => [...prev, newFavorite]);
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const isFavorite = (quote: string, author: string) => {
    return favorites.some(fav => fav.text === quote && fav.author === author);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };
};