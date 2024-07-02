import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += action.payload.qty;
      } else  {
        state.cart.push(action.payload);
      }
      
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    IncrementQty:(state,action)=>{
      const item = state.cart.find(item => item.id === action.payload.id);
      if(item){
        item.qty += 1;
      }

    },
    DecrementQty:(state,action)=>{
      const item = state.cart.find(item => item.id === action.payload.id);
      if(item && item.qty > 1){
        item.qty -= 1;
      }

  
  }
}
});

export const { addCart, removeCart,IncrementQty,DecrementQty } = CartSlice.actions;
export default CartSlice.reducer;
