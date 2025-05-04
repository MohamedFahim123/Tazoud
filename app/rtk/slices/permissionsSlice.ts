import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getPermissions = createAsyncThunk("permissions/get", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${dashboardEndPoints?.rolesAndPermissions?.allowedPermissions}`);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch permissions");
  }
});

const permissionsSlice = createSlice({
  name: "permissions",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPermissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPermissions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPermissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default permissionsSlice.reducer;
