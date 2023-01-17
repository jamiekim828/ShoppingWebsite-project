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
import { actions } from '../redux/slice/product';
import { ProductType } from '../types/type';

export default function HomePage() {
  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );
  const wishList = useSelector((state: RootState) => state.product.wishList);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const addFavorite = (product: ProductType) => {
    const duplicate = wishList.some(
      (item) => item.title.toLowerCase() === product.title.toLowerCase()
    );
    if (!duplicate) {
      dispatch(actions.addWishList(product));
    }
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  };

  return (
    <div>
      <Navbar />
      <Home />
      <HomeMidpart productsList={productsList} addFavorite={addFavorite} />
      <HomeBottompart productsList={productsList} addFavorite={addFavorite} />
      <Footer />
    </div>
  );
}
