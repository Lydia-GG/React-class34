import heart from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';
import { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from './FavoritesProvider';

const Heart = ({ id }) => {
  const { addFavPro, removeFavPro, favorites } = useContext(FavoritesContext);

  const [src, setSrc] = useState(true);

  useEffect(() => {
    const inFavorites = favorites.includes(id);
    if (inFavorites) {
      setSrc(false);
    } else {
      setSrc(true);
    }
  }, [favorites]);

  const favoritePro = () => {
    src ? addFavPro(id) : removeFavPro(id);
    setSrc(!src);
  };

  return (
    <>
      <img
        src={src ? heart : heartSolid}
        alt={src ? 'heart' : 'heartSolid'}
        className="heart"
        onClick={() => favoritePro(id)}
      />
    </>
  );
};

export default Heart;
