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
  searchResult: boolean;
  setSearchResult: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductList({
  userInput,
  searchResult,
  setSearchResult,
}: PropType) {
  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userInput === '') {
      dispatch(fetchProductsData());
      setSearchResult(true);
    }
  }, [dispatch, userInput, setSearchResult]);

  return (
    <div className='productList'>
      {productsList.length === 0 && searchResult && (
        <div className='loader'>
          <Box className='loading' sx={{ ml: 10, mt: 3, width: '80%' }}>
            Loading....
            <CircularProgress />
          </Box>
        </div>
      )}
      {!searchResult && (
        <p style={{ fontSize: '18px', marginTop: '50px' }}>
          Oops... There is no product by that name.
        </p>
      )}
      {productsList.map((product) => {
        return <ProductsItem key={product.id} product={product} />;
      })}
    </div>
  );
}
