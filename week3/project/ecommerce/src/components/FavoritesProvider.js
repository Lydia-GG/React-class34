import React, { useState, createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavPro = (product) => {
    if (favorites.includes(product)) {
      setFavorites([...favorites]);
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const removeFavPro = (product) => {
    let unRemovedPro = favorites.filter(
      (favorite) => favorite.id !== product.id
    );
    setFavorites(unRemovedPro);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavPro, removeFavPro }}>
      {children}
    </FavoritesContext.Provider>
  );
};
