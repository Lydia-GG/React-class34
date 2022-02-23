import Product from './Product';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => {
        const { id } = product;
        return <Product key={id} product={product} {...product} />;
      })}
    </div>
  );
};

export default Products;
