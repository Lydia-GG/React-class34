import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Favorites from './components/Favorites';
import SingleProduct from './components/SingleProduct';
import { FavoritesProvider } from './components/FavoritesProvider';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <h1 className="title"> Products</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Categories />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
