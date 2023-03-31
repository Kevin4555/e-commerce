import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeItemFromCart(state, action) {
      // logic to remove item from cart
    },
    clearCart(state) {
      // logic to clear cart
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
