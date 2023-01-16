import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from '../components/Cart/Cart';
import { AppDispatch, RootState } from '../redux/store';
import { fetchProductsData } from '../redux/thunk/product';

export default function CartPage() {
  const products = useSelector((state: RootState) => state.product.productList);

  const dispatch = useDispatch<AppDispatch>();

  // fetch data with useEffect
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <Cart />
    </div>
  );
}
