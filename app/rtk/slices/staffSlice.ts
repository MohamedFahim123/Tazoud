import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export interface StaffTypes {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  image?: File | string;
  status: "Active" | "Inactive";
  role?: string;
}

interface staffState {
  staff: StaffTypes[];
  loading: boolean;
  error: string | null;
}

export const getStaff = createAsyncThunk<StaffTypes[], void, { rejectValue: string }>("staff/getStaff", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    if (!dashboardEndPoints?.staff?.allStaff) {
      throw new Error("Invalid endpoint URL");
    }
    const response = await axios.get<{ data: { users: StaffTypes[] } }>(dashboardEndPoints?.staff?.allStaff, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data.users;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch staff");
  }
});

export const addStaff = createAsyncThunk<{ message: string }, FormData, { rejectValue: Record<string, string[]> | string }>(
  "staff/addStaff",
  async (formData, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";

      const endPoint: string = dashboardEndPoints?.staff?.createStaff ? dashboardEndPoints?.staff?.createStaff : "";

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

      return rejectWithValue("Failed to add staff");
    }
  }
);

export const deleteStaff = createAsyncThunk<number, number, { rejectValue: string }>("staff/deleteStaff", async (id, { rejectWithValue }) => {
  try {
    const deleteStaff = dashboardEndPoints?.staff?.deleteStaff as (id: string) => string;

    await axios.delete(deleteStaff(id.toString()), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to delete staff");
  }
});

const initialState: staffState = {
  staff: [],
  loading: false,
  error: null,
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //  get staff
      .addCase(getStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStaff.fulfilled, (state, action) => {
        state.loading = false;
        state.staff = action.payload;
      })
      .addCase(getStaff.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch staff";
      })

      // add staff
      .addCase(addStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addStaff.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addStaff.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "object" && action.payload !== null) {
          state.error = JSON.stringify(action.payload); // Store structured error as string
        } else {
          state.error = action.payload || "Failed to add staff";
        }
      })

      // delete staff
      .addCase(deleteStaff.fulfilled, (state, action) => {
        state.staff = state.staff.filter((staff) => staff.id !== action.payload);
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        state.error = action.payload || "Delete failed";
      });
  },
});

export default staffSlice.reducer;
