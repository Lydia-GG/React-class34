import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesProvider';
import Heart from './Heart';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="fav-products">
      {favorites &&
        favorites.map((favorite) => {
          const { id, image, title, rating, description } = favorite;
          return (
            <div className="fav-product" key={id}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="rating">
                <h4>Rate: {rating.rate}</h4>
                <Heart product={favorite} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Favorites;
