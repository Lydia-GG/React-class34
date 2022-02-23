import heart from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';
import { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from './FavoritesProvider';

const Heart = ({ product }) => {
  const { addFavPro, removeFavPro, favorites } = useContext(FavoritesContext);

  const [src, setSrc] = useState(true);

  useEffect(() => {
    const inFavorites = favorites.includes(product);
    if (inFavorites) {
      setSrc(false);
    } else {
      setSrc(true);
    }
  }, [favorites]);

  const favoritePro = () => {
    src ? addFavPro(product) : removeFavPro(product);
    setSrc(!src);
  };

  return (
    <>
      <img
        src={src ? heart : heartSolid}
        alt={src ? 'heart' : 'heartSolid'}
        className="heart"
        onClick={() => favoritePro(product)}
      />
    </>
  );
};

export default Heart;
