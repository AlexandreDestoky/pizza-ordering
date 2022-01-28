import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(product => product.id === newProduct.id);
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          name: newProduct.name,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice = existingProduct.totalPrice + newProduct.price;
      }
      state.total = state.products.reduce((a, b) => a + b.totalPrice, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
