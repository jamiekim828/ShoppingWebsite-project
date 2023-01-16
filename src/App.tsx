import { Routes, Route } from 'react-router-dom';

import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './components/Products/ProductDetail';
import WishPage from './pages/WishPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
        <Route path='/wish' element={<WishPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
