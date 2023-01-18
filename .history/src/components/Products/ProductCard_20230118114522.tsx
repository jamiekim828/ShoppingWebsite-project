import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProductData } from '../../redux/thunk/product';
import ProductDetail from './ProductDetail';

export default function ProductCard() {
  const { id } = useParams();
  const productId = Number(id);
  const productDetail = useSelector(
    (state: RootState) => state.product.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOneProductData(productId));
  }, [dispatch, productId]);

  console.log(productDetail[0]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ProductDetail productDetail={productDetail[0]} />
    </div>
  );
}