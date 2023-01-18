import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './Cart.css';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.product.cart);
  return (
    <div className='cart-div'>
      <div className='cart-list'>
        <div className='cart-list-title'>
          <p className='shopping-bag'>SHOPPING BAG ({cart.length})</p>
          <p className='signin'>
            Have an account? <b>Sign in</b>
          </p>
        </div>
      </div>
      <div className='price-list'></div>
    </div>
  );
}
