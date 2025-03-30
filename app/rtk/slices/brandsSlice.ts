import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface Brand {
  id: number;
  name: string;
}

interface BrandsState {
  brands: Brand[];
  loading: boolean;
  error: string | null;
}

export const getBrands = createAsyncThunk<Brand[], void, { rejectValue: string }>("brands/getBrands", async (_, { rejectWithValue }) => {
  try {
    if (!dashboardEndPoints?.brands?.allBrands) {
      throw new Error("Invalid endpoint URL");
    }

    const response = await axios.get<{ data: { brands: Brand[] } }>(dashboardEndPoints?.brands?.allBrands);
    return response?.data?.data?.brands;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch brands");
  }
});

const initialState: BrandsState = {
  brands: [],
  loading: false,
  error: null,
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch brands";
      });
  },
});

export default brandsSlice.reducer;
