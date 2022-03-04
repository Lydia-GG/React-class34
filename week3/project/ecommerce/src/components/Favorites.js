import React, { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from './FavoritesProvider';
import Products from './Products';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const promises = favorites.map((id) => {
      return fetch(`https://fakestoreapi.com/products/${id}`);
    });

    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((results) => {
        setProducts(results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [favorites]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>"Oops, something went wrong. Come back later!"</div>;
  }

  return products.length ? (
    <Products products={products} />
  ) : (
    <div>You haven't chosen any favorites yet!</div>
  );
};

export default Favorites;
