import { AppDispatch } from "../store";
import { actions } from "../slice/product"; 

// fetch country detail data from url by fetch
export default function fetchOneProductData(id: string | undefined) {
  const url = "https://fakestoreapi.com/products/productId";
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const productDetail = await response.json();
    dispatch(actions.getProductDetail(productDetail));
  };
}