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
    removeWishList: (state, action) => {
      const filter = state.wishList.filter(
        (product) => product.id !== action.payload.id
      );
      state.wishList = filter;
    },
    showLoadingToggle: (state, action) => {
      state.showLoading = action.payload;
    },
    sortByName: (state, action) => {
      const sorted = [...action.payload].sort(
        (a: ProductType, b: ProductType) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }
      );
      state.productList = sorted;
    },
    sortByPrice: (state, action) => {
      const sorted = [...action.payload].sort(
        (a: ProductType, b: ProductType) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        }
      );
      state.productList = sorted;
    },
    sortByCategory: (state, action) => {
      const filter = state.productList.filter(
        (product) => product.category === action.payload
      );
      state.productList = filter;
    },
    addCart: (state, action) => {
      const cartList = JSON.parse(localStorage.getItem('cart') || '{}');
      const index = cartList.findIndex(
        (item: ProductType) => item.id === action.payload.id
      );
      const newProduct = { ...action.payload, quantity: 1 };

      if (index !== -1) {
        cartList[index].quantity += 1;
      } else {
        cartList.push(newProduct);
      }
    },
    deleteCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.cart[index].quantity -= 1;
      }
      if (state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
      }
    },
    removeCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const actions = productSlice.actions;
export default productSlice.reducer;
