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

    removeFromCart: (state, action) => {
      console.log(action);
      let remove = state.products.filter(
        (product) => product.id !== action.payload
      );

      let price = remove
        .map((project) => project.price)
        .reduce((b, a) => a + b, 0);
      state.total = price.toFixed(2);

      state.products = remove;
      state.total = price;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
