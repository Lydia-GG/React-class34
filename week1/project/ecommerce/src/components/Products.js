import React from 'react';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => {
        const { image, title, id } = product;
        return (
          <div value={title} key={id} className="product">
            <img src={image} alt={title} className="image" />
            <h3 product-description>{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
