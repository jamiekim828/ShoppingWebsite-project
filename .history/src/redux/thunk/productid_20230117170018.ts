import { AppDispatch } from "../store";
import { actions } from "../slice/product"; 

// fetch country detail data from url by fetch
export default function fetchCountryDetailData(name: string | undefined) {
  const url = "https://fakestoreapi.com/products/productId";
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(actions.getCountryData(data));
  };
}