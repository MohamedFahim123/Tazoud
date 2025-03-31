import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductsState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
}

export const getProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/getProducts", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN");

    if (!dashboardEndPoints?.products?.allProducts) {
      throw new Error("Invalid endpoint URL");
    }
    const response = await axios.get<{ data: Product[] }>(
      dashboardEndPoints?.products?.allProducts,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch products"
    );
  }
});

export const getSingleProduct = createAsyncThunk<
  Product,
  number,
  { rejectValue: string }
>("products/getSingleProduct", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN");

    const singleProduct = dashboardEndPoints?.products?.singleProduct as (
      id: string
    ) => string;

    const response = await axios.get<{ data: Product }>(
      singleProduct(id.toString()),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch product"
    );
  }
});

const initialState: ProductsState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //  get products
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      })

      // single product
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch product";
      });
  },
});

export default productsSlice.reducer;
