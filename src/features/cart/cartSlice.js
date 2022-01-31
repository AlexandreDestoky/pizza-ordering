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
    removeOfCart(state,action) {
      const removeProduct = action.payload;
      const product = state.products.find(product => product.id === removeProduct.id);
      if(product.quantity > 1) {
        product.quantity = product.quantity - 1;
        product.totalPrice = product.totalPrice - removeProduct.price;
      } else {
        state.products = state.products.filter(product => product.id !== removeProduct.id)
      }
      state.total = state.products.reduce((a, b) => a + b.totalPrice, 0);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart ,removeOfCart} = cartSlice.actions;

export default cartSlice.reducer;
