import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
  name: "PokeApi",
  initialState: {
    pokemons: [],
  },

  reducers: {
    //Set data
    setPokemon: (state, action) => {
      state.pokemons = action.payload;
    },
    // setCategory: (state, action) => {
    //   state.category = action.payload;
    // },
  },
});
export const { setPokemon } = pokeSlice.actions;
