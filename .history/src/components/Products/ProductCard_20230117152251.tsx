import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProductData } from "../../redux/thunk/product";
import ProductDetail from "./ProductDetail";

export default function ProductCard () {
  const { product } = useParams();
  const productDetail = useSelector(
    (state: RootState) => state.product.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOneProductData("number"));
  }, [dispatch, product]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ProductDetail productDetail={productDetail[0]} />
    </div>
  );
};