import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
