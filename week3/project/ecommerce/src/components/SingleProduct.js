import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Heart from './Heart';

const SingleProduct = () => {
  const { id } = useParams();
  const idNumber = +id;
  const {
    data: product,
    isLoading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${idNumber}`);

  return (
    <div>
      {error && <div>Something went wrong!</div>}
      {isLoading && <div>Loading....</div>}
      {product && (
        <div className="product-details">
          <img
            src={product.image}
            alt={product.title}
            className="product-details-image"
          />
          <div className="details-text">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="details-rating">
              <h4>Rate: {product.rating.rate}</h4>
              <h4>price: {product.price}</h4>
              <Heart id={idNumber} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
