import { configureStore } from '@reduxjs/toolkit';
import {productsReducer} from "./slice/product"

const store = configureStore({
  reducer: {
    products : productsReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
