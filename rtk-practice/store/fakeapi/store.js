import { configureStore } from "@reduxjs/toolkit";
import { pokeApi } from "./api";
import { pokeSlice } from "./slice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    PokeApi: pokeSlice.reducer,
    [pokeApi.reducerPath]: pokeApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeApi.middleware),
});
