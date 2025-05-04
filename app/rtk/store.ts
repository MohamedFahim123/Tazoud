// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";
import categoriesReducer from "./slices/categoriesSlice";
import brandsReducer from "./slices/brandsSlice";
import unitsMeasuresReducer from "./slices/unitsMeasuresSlice";
import productsReducer from "./slices/ProductSlice";
import permissionsReducer from "./slices/permissionsSlice";
import rolesReducer from "./slices/rolesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    unitsMeasures: unitsMeasuresReducer,
    products: productsReducer,
    permissions: permissionsReducer,
    roles: rolesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
