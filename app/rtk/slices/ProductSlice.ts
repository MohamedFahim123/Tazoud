import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export interface Variation {
  id: number;
  name_ar: string;
  name_en: string;
  price: number;
  price_after_discount: number;
  value_ar: string;
  value_en: string;
  stock: number;
  code: string;
  thumbnail: File | null;
}

export interface ProductTypes {
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  category_id: string;
  sub_category_id: string;
  brand_id: string;
  unit_of_measure_id: string;
  images: File[] | [];
  has_variation: boolean;
  variations: Variation[];
  price: number;
  price_after_discount: number;
  stock: number;
  code: string;
  thumbnail: File | null;
}

interface ProductsState {
  products: ProductTypes[];
  product: ProductTypes | null;
  loading: boolean;
  error: string | null;
}

export const getProducts = createAsyncThunk<ProductTypes[], void, { rejectValue: string }>("products/getProducts", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN");

    if (!dashboardEndPoints?.products?.allProducts) {
      throw new Error("Invalid endpoint URL");
    }
    const response = await axios.get<{ data: ProductTypes[] }>(dashboardEndPoints?.products?.allProducts, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch products");
  }
});

export const getSingleProduct = createAsyncThunk<ProductTypes, number, { rejectValue: string }>("products/getSingleProduct", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN");

    const singleProduct = dashboardEndPoints?.products?.singleProduct as (id: string) => string;

    const response = await axios.get<{ data: ProductTypes }>(singleProduct(id.toString()), {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch product");
  }
});

export const addProduct = createAsyncThunk<ProductTypes, FormData, { rejectValue: string }>("products/addProduct", async (formData, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN");
    const response = await axios.post("https://tazawod.valureach.com/api/staff/products", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to add product");
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
      })

      // add product
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add product";
      });
  },
});

export default productsSlice.reducer;
