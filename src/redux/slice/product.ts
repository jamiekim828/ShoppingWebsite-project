import { createSlice } from '@reduxjs/toolkit';

import { ProductType } from '../../types/type';

type InitialStateType = {
  productList: ProductType[];
  product: ProductType[];
  wishList: ProductType[];
  cart: ProductType[];
  showLoading: boolean;
};

const initialState: InitialStateType = {
  productList: [],
  product: [],
  wishList: [],
  cart: [],
  showLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductList: (state, action) => {
      state.productList = action.payload;
    },
    getProductDetail: (state, action) => {
      state.product = action.payload;
    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    showLoadingToggle: (state, action) => {
      state.showLoading = action.payload;
    },
  },
});

export const actions = productSlice.actions;
export default productSlice.reducer;
