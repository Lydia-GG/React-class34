import './App.css';
import { useState } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import allCategories from './fake-data/all-categories';

import allProducts from './fake-data/all-products';

function App() {
  const [products, setProducts] = useState(allProducts);
  const [categories, setCategories] = useState(allCategories);

  return (
    <div className="App ">
      <h1 className="title"> Products</h1>
      <Categories categories={categories} setProducts={setProducts} />
      <Products products={products} />
    </div>
  );
}

export default App;
