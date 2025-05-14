import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const token: string = Cookies.get("TAZOUD_TOKEN") ?? "";

interface Permission {
  id: number;
  name: string;
}

export const getAllowedPermissions = createAsyncThunk<Permission[], void, { rejectValue: string }>("permissions/get", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${dashboardEndPoints?.rolesAndPermissions?.allowedPermissions}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data.permissions;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch permissions");
  }
});

const permissionsSlice = createSlice({
  name: "permissions",
  initialState: {
    permission: [] as Permission[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllowedPermissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllowedPermissions.fulfilled, (state, action) => {
        state.loading = false;
        state.permission = action.payload;
      })
      .addCase(getAllowedPermissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default permissionsSlice.reducer;
