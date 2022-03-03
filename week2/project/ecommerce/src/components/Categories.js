import React, { useState } from 'react';
import Category from './Category';
import Products from './Products';
import useFetch from './useFetch';

const Categories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useFetch('https://fakestoreapi.com/products/categories');
  const { data: products, setData: setProducts } = useFetch(
    'https://fakestoreapi.com/products'
  );

  const [isActive, setIsActive] = useState(false);

  const filter = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const handleSelection = (category) => {
    if (isActive !== category) {
      setIsActive(category);
    }
  };
  if (error) {
    return 'Oops, something went wrong!';
  }

  return (
    <div>
      {isLoading && <div>Loading.....</div>}
      {categories && (
        <div className="buttons">
          {categories.map((category, index) => {
            return (
              <Category
                category={category}
                filter={filter}
                key={index}
                handleSelection={handleSelection}
                isActive={isActive}
              />
            );
          })}
        </div>
      )}
      <div>{products && <Products products={products} />}</div>
    </div>
  );
};

export default Categories;
