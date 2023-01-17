import { Routes, Route } from 'react-router-dom';

import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductDetail from './components/Products/ProductsItem';
import WishPage from './pages/WishPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<Products />}></Route>
        
        <Route path='/wish' element={<WishPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
