import { AppDispatch } from '../store';
import { actions } from '../slice/product';

const url = 'https://fakestoreapi.com';

// fetch All products
export function fetchProductsData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/products`);
    const productsData = await response.json();

    dispatch(actions.getProductList(productsData));
  };
}

// fetch one product by id
export function fetchOneProductData(id: number) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/${id}`);
    const productDetail = await response.json();

    dispatch(actions.getProductDetail(productDetail));
  };
}
