import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { ProductType } from '../../types/type';

import './Cart.css';
import CartTable from './CartTable';

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '{}');
  console.log(cart);

  const quantity = cart.map((item: ProductType) => item.quantity);
  const totalQuantity = quantity.reduce((a: number, b: number) => a + b, 0);

  return (
    <div className='cart-div'>
      <div className='cart-list'>
        <div className='cart-list-title'>
          <p className='shopping-bag'>SHOPPING BAG ({totalQuantity})</p>
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
        <div className='shopmore'>
          <a href='/products'>Shop more</a>
        </div>
      </div>
      <div className='price-list'>
        <div className='signup'>
          <p>Want free shipping on every order at sim? sign up</p>
        </div>
        <div className='price-div'>
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
            <img
              alt='paypal'
              className='paypal'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
