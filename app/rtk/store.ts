// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
