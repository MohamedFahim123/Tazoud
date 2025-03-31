import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface Category {
  id: number;
  name: string;
  subcategories?: Category[];
}

interface CategoriesState {
  categories: Category[];
  singleCategory: Category | null;
  loading: boolean;
  error: string | null;
}

// Fetch all categories
export const getCategories = createAsyncThunk<
  Category[],
  void,
  { rejectValue: string }
>("categories/getCategories", async (_, { rejectWithValue }) => {
  try {
    if (!dashboardEndPoints?.categories?.allCategories) {
      throw new Error("Invalid endpoint URL");
    }

    const response = await axios.get<{ data: { categories: Category[] } }>(
      dashboardEndPoints?.categories?.allCategories
    );

    return response?.data?.data?.categories;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch categories"
    );
  }
});

interface SingleCat {
  data: { category: Category; subcategories: Category[] };
}

// Fetch a single category by ID
export const getSingleCategory = createAsyncThunk<
  Category,
  number,
  { rejectValue: string }
>("categories/getSingleCategory", async (categoryId, { rejectWithValue }) => {
  try {
    const singleCategory = dashboardEndPoints?.categories?.singleCategory as (
      categoryId: string
    ) => string;
    const response = await axios.get<SingleCat>(
      singleCategory(categoryId.toString())
    );

    return {
      ...response?.data?.data?.category,
      subcategories: response?.data?.data?.subcategories,
    };
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch category"
    );
  }
});

const initialState: CategoriesState = {
  categories: [],
  singleCategory: null,
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // all categories
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch categories";
      })

      // single category
      .addCase(getSingleCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCategory = action.payload;
      })
      .addCase(getSingleCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch category";
      });
  },
});

export default categoriesSlice.reducer;
