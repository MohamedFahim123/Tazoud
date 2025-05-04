import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const token: string = Cookies.get("TAZOUD_TOKEN") ?? "";

export const getRoles = createAsyncThunk("roles/getRoles", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${dashboardEndPoints?.rolesAndPermissions?.allRoles}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch permissions");
  }
});

export const singleRole = createAsyncThunk("roles/fetchSingle", async (id: string | number, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${dashboardEndPoints?.rolesAndPermissions?.oneRole}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const filterRoles = createAsyncThunk("roles/filter", async (query: { name: string }, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${dashboardEndPoints?.rolesAndPermissions?.filterRoles}`, {
      params: query,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const createRole = createAsyncThunk("roles/create", async (data: { name: string; permission_id: number[] }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    data.permission_id.forEach((id) => {
      formData.append("permission_id[]", id.toString());
    });

    const response = await axios.post(`${dashboardEndPoints?.rolesAndPermissions?.createRole}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const updateRole = createAsyncThunk("roles/update", async (payload: { id: number; name: string; permission_id: number[] }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("name", payload.name);
    payload.permission_id.forEach((id) => {
      formData.append("permission_id[]", id.toString());
    });

    const response = await axios.post(`${dashboardEndPoints?.rolesAndPermissions?.updateRole}/${payload.id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const deleteRole = createAsyncThunk("roles/delete", async (id: number, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${dashboardEndPoints?.rolesAndPermissions?.deleteRole}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data || error.message);
  }
});

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // single role
      .addCase(singleRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleRole.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(singleRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // filter roles
      .addCase(filterRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(filterRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // create role
      .addCase(createRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRole.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // update role
      .addCase(updateRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // delete role
      .addCase(deleteRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default rolesSlice.reducer;
