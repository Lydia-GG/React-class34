import React, { useState } from 'react';
import Category from './Category';
import allProducts from '../fake-data/all-products';

const Categories = ({ categories, setProducts }) => {
  const [isActive, setIsActive] = useState('false');

  console.log(categories);

  const filter = (category) => {
    category = category.replace('FAKE: ', '');

    const filteredProducts = allProducts.filter(
      (product) => category === product.category
    );

    setProducts(filteredProducts);
  };

  const handleSelection = (category) => {
    if (isActive) {
      setIsActive(category);
    }
  };

  return (
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
  );
};

export default Categories;
