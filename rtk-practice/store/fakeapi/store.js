import { configureStore } from "@reduxjs/toolkit";
import { fakeApi } from "./api";
import { fakeSlice } from "./slice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    FakeApi: fakeSlice.reducer,
    [fakeApi.reducerPath]: fakeApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeApi.middleware),
});
