import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ApartmentIcon from '@mui/icons-material/Apartment';

import './Cart.css';
import CartTable from './CartTable';

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
        <div className='shippping-select'>
          <button>
            <AirportShuttleIcon />
            ship to home
          </button>
          <button>
            <ApartmentIcon />
            pick up in store
          </button>
        </div>
        <CartTable />
      </div>
      <div className='price-list'>
        <div className='signup'>
          <p>Want free shipping on every order at sim? sign up</p>
        </div>
        <div className='price'>
          <div>Item Subtotal</div>
          <div className='shipping-fee'>
            <p>Estimated Shipping</p>
            <p>FREE</p>
          </div>
          <div>Estimated Total</div>
        </div>
        <div className='checkout-button'>
          <button className='checkout'>CHECKOUT</button>
          <button>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png' />
          </button>
        </div>
      </div>
    </div>
  );
}
