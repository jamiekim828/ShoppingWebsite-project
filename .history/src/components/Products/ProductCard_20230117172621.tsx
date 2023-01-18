import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/strore";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProductData } from "../../redux/thunk/product";
import ProductDetail from "./ProductDetail";
import { title } from "process";

export default function ContriesInformation () {
  const { name } = useParams();
  const productDetail = useSelector(
    (state: RootState) => state.countries.countries
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOneProductData(title));
  }, [dispatch, name]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ProductDetail productDetail={productDetail[0]} />
    </div>
  );
};