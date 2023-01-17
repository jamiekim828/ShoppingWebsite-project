import { configureStore } from '@reduxjs/toolkit';
import {productReducer} from "./slice/product";

const store = configureStore({
  reducer: {
    product : productReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
