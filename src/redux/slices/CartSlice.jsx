import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
