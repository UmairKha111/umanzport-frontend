import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { adminApi } from "./adminApi";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(api.middleware, adminApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
