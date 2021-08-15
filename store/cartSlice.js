import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};
// slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];

      let price = state.products
        .map((project) => project.price)
        .reduce((a, b) => a + b);
      state.total = price.toFixed(2);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
