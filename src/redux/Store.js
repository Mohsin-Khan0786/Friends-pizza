import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CartegoreySlice from "./slices/CartegoreySlice";
import SearchSlice from "./slices/SearchSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    category:CartegoreySlice,  // Add the slice for cartegories here.
    search: SearchSlice,  // Add the slice for search here.
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
