import { createSlice } from "@reduxjs/toolkit";

export const fakeSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    category: [],
  },

  reducers: {
    //Set data
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { setProducts, setCategory } = fakeSlice.actions;
