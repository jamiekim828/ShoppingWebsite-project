import { Routes, Route } from 'react-router-dom';

import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './components/Products/ProductDetail';
import WishPage from './pages/WishPage';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

function App() {
  return (
    <div className='App'>
        <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
        <Route path='/wish' element={<WishPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
