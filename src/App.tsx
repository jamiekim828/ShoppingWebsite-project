import { Routes, Route } from 'react-router-dom';

import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductCard from './components/Products/ProductCard';
import WishPage from './pages/WishPage';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

function App() {
  // please do not change the Route :)
  return (
    <div className='App'>
        <Navbar />
        <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductCard />}></Route>
        <Route path='/wish' element={<WishPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
