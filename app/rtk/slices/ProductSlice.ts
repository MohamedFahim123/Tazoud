import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export interface Variation {
  id?: number;
  name_ar?: string;
  name_en?: string;
  price?: number | string;
  price_after_discount?: number | string;
  value_ar?: string;
  value_en?: string;
  stock?: number | string;
  code?: string;
  thumbnail?: File | null;
}

export interface ProductTypes {
  id?: number;
  description?: string;
  title?: string;
  title_ar?: string;
  title_en?: string;
  description_ar?: string;
  description_en?: string;
  category?: string;
  category_id?: string;
  sub_category?: string;
  sub_category_id?: string;
  brand_id?: string;
  unit_of_measure_id?: string;
  images?: File[] | [];
  has_variation?: boolean;
  variations?: Variation[];
  price?: number | string;
  price_after_discount?: number | string;
  stock?: string | number;
  code?: string;
  thumbnail?: File | null;
  unit_of_measure?: string;
  brand?: string;
  status?: string;
  status_translated?: string;
  has_variations?: boolean;
}

interface FilterParams {
  code?: string;
  title?: string;
  category?: string;
  sub_category?: string;
  brand?: string;
  unit_of_measure?: string;
  status?: string;
}

interface ProductsState {
  products: ProductTypes[];
  product: ProductTypes | null;
  loading: boolean;
  error: string | null;
}

export const getProducts = createAsyncThunk<ProductTypes[], void, { rejectValue: string }>("products/getProducts", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    if (!dashboardEndPoints?.products?.allProducts) {
      throw new Error("Invalid endpoint URL");
    }
    const response = await axios.get<{ data: { products: ProductTypes[] } }>(dashboardEndPoints?.products?.allProducts, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data.products;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch products");
  }
});

export const getSingleProduct = createAsyncThunk<ProductTypes, number, { rejectValue: string }>("products/getSingleProduct", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    const singleProduct = dashboardEndPoints?.products?.singleProduct as (id: string) => string;

    const response = await axios.get<{ data: { product: ProductTypes } }>(singleProduct(id.toString()), {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data.product;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to Add product");
  }
});

export const addProduct = createAsyncThunk<{ message: string }, FormData, { rejectValue: Record<string, string[]> | string }>(
  "products/addProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";

      const endPoint: string = dashboardEndPoints?.products?.createProduct ? dashboardEndPoints?.products?.createProduct : "";

      const response = await axios.post(endPoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ errors: Record<string, string[]> }>;

      if (error.response?.data?.errors) {
        return rejectWithValue(error.response.data.errors);
      }

      return rejectWithValue("Failed to add product");
    }
  }
);

export const deleteProduct = createAsyncThunk<number, number, { rejectValue: string }>("products/deleteProduct", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    const deleteProduct = dashboardEndPoints?.products?.deleteProduct as (id: string) => string;

    await axios.delete(deleteProduct(id.toString()), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to delete product");
  }
});

export const filterProducts = createAsyncThunk<ProductTypes[], FilterParams, { rejectValue: string }>("products/filterProducts", async (filters, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    const cleanedFilters: Record<string, string> = {};
    const mapToApi: Record<string, string> = {
      code: "code",
      title: "title",
      status: "status",
      unit_of_measure: "unit_of_measure",
      brand: "brand",
      category: "category",
      sub_category: "sub_category",
    };

    Object.entries(filters).forEach(([key, value]) => {
      if (value?.trim()) {
        const apiKey = mapToApi[key] || key;
        cleanedFilters[apiKey] = value.trim();
      }
    });

    if (Object.keys(cleanedFilters).length > 0) {
      const query = new URLSearchParams(cleanedFilters).toString();
      const res = await axios.get<{ data: { products: ProductTypes[] } }>(`${dashboardEndPoints?.products?.filterProducts}?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.data.products;
    } else {
      return [];
    }
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to filter products");
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
      .addCase(addProduct.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "object" && action.payload !== null) {
          state.error = JSON.stringify(action.payload); // Store structured error as string
        } else {
          state.error = action.payload || "Failed to add product";
        }
      })

      // delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload || "Delete failed";
      })

      // filter products
      .addCase(filterProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(filterProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export default productsSlice.reducer;
