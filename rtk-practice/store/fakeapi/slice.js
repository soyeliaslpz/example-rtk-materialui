import { createSlice } from "@reduxjs/toolkit";

export const fakeSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },

  reducers: {
    //Set data
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { setProducts } = fakeSlice.actions;
