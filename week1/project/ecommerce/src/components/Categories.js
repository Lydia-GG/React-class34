import React, { useState } from 'react';
import Category from './Category';
import allProducts from '../fake-data/all-products';
import allCategories from '../fake-data/all-categories';
import Products from './Products';

const Categories = () => {
  const [products, setProducts] = useState(allProducts);
  const [categories, setCategories] = useState(allCategories);
  const [isActive, setIsActive] = useState(false);

  const filter = (category) => {
    category = category.replace('FAKE: ', '');

    const filteredProducts = allProducts.filter(
      (product) => category === product.category
    );

    setProducts(filteredProducts);
  };

  const handleSelection = (category) => {
    if (isActive !== category) {
      setIsActive(category);
    }
  };

  return (
    <div>
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
      <div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Categories;
