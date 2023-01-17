import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// file
import { AppDispatch, RootState } from '../redux/store';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import HomeMidpart from '../components/Home/HomeMidpart';
import HomeBottompart from '../components/Home/HomeBottompart';
import { fetchProductsData } from '../redux/thunk/product';

export default function HomePage() {
  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Home />
      <HomeMidpart productsList={productsList} />
      <HomeBottompart productsList={productsList} />
      <Footer />
    </div>
  );
}
