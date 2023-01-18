import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductsItem from './ProductsItem';
import { fetchProductsData } from '../../redux/thunk/product';
import { RootState, AppDispatch } from '../../redux/store';
import './ProductsList.css';

type PropType = {
  userInput: string;
};

export default function ProductList({ userInput }: PropType) {
  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userInput === '') {
      dispatch(fetchProductsData());
    }
  }, [dispatch, userInput]);

  return (
    <div className='productList'>
      {productsList.length === 0 && (
        <div className='loader'>
          <Box className='loading' sx={{ ml: 10, mt: 3, width: '80%' }}>
            Loading....
            <CircularProgress />
          </Box>
        </div>
      )}
      {productsList.map((product) => {
        return <ProductsItem key={product.id} product={product} />;
      })}
    </div>
  );
}
