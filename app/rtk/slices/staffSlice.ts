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
  status: "Active" | "Deactive";
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

export const updateStaff = createAsyncThunk<{ message: string }, { id: string; formData: FormData }, { rejectValue: string | Record<string, string[]> }>(
  "staff/updateStaff",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";
      const endpoint = dashboardEndPoints?.staff?.updateStaff?.(id) ?? "";

      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ errors: Record<string, string[]> }>;
      if (error.response?.data?.errors) return rejectWithValue(error.response.data.errors);
      return rejectWithValue("Failed to update staff");
    }
  }
);

export const updateStaffStatus = createAsyncThunk<{ message: string }, { id: string }, { rejectValue: string }>(
  "staff/updateStaffStatus",
  async ({ id }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";
      const url = `https://tazawod.valureach.com/api/staff/update-staff-status/${id}`;

      const res = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message || "Failed to update staff status");
    }
  }
);

export const filterStaff = createAsyncThunk<StaffTypes[], { name?: string; phone?: string; email?: string; status?: string }, { rejectValue: string }>(
  "staff/filterStaff",
  async (filters, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";

      const params = new URLSearchParams();

      if (filters.name) params.append("name", filters.name);
      if (filters.phone) params.append("phone", filters.phone);
      if (filters.email) params.append("email", filters.email);
      if (filters.status) params.append("status", filters.status);

      const url = `${dashboardEndPoints?.staff?.filterStaff}?${params.toString()}`;

      const res = await axios.get<{ data: { users: StaffTypes[] } }>(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.data.users;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message || "Filter failed");
    }
  }
);

export const deleteStaff = createAsyncThunk<string, string, { rejectValue: string }>("staff/deleteStaff", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

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
        state.staff = action.payload;
        state.loading = false;
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

      // update staff
      .addCase(updateStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStaff.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateStaff.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "object" && action.payload !== null) {
          state.error = JSON.stringify(action.payload);
        } else {
          state.error = action.payload || "Failed to update staff";
        }
      })
      .addCase(updateStaffStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStaffStatus.fulfilled, (state, action) => {
        const staff = state.staff.find((item) => item.id === Number(action.meta.arg.id));
        if (staff) {
          staff.status = staff.status === "Active" ? "Deactive" : "Active";
        }
      })
      .addCase(updateStaffStatus.rejected, (state) => {
        state.loading = false;
      })

      // filter staff
      .addCase(filterStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterStaff.fulfilled, (state, action) => {
        state.staff = action.payload;
        state.loading = false;
      })
      .addCase(filterStaff.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Filter failed";
      })

      // delete staff
      .addCase(deleteStaff.fulfilled, (state, action) => {
        state.staff = state.staff.filter((staff) => staff.id?.toString() !== action.payload);
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        state.error = action.payload || "Delete failed";
      });
  },
});

export default staffSlice.reducer;
