import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// file
import { AppDispatch, RootState } from '../redux/store';
import Home from '../components/Home/Home';
import HomeMidpart from '../components/Home/HomeMidpart';
import HomeBottompart from '../components/Home/HomeBottompart';
import { fetchOneProductData, fetchProductsData } from '../redux/thunk/product';
import { actions } from '../redux/slice/product';
import { ProductType } from '../types/type';

export default function HomePage() {
  // state
  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );
  const wishList = useSelector((state: RootState) => state.product.wishList);
  localStorage.setItem('wishlist', JSON.stringify(wishList));

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // fetch all data
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  // add favorite
  const favoriteHandler = (product: ProductType) => {
    const duplicate = wishList.some((item) => item.id === product.id);

    if (!duplicate) {
      dispatch(actions.addWishList(product));
    } else {
      dispatch(actions.removeWishList(product));
    }
  };

  // go to detail page
  const goToProductDetail = (product: ProductType) => {
    const id = product.id;
    dispatch(fetchOneProductData(id));
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <Home />
      <HomeMidpart
        productsList={productsList}
        favoriteHandler={favoriteHandler}
        goToProductDetail={goToProductDetail}
      />
      <HomeBottompart
        productsList={productsList}
        wishList={wishList}
        favoriteHandler={favoriteHandler}
        goToProductDetail={goToProductDetail}
      />
    </div>
  );
}
