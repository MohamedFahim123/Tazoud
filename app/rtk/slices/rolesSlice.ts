import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface Role {
  id: number;
  name: string;
  permissions?: string[];
}

interface RolesState {
  roles: Role[];
  loading: boolean;
  error: string | null;
}

const initialState: RolesState = {
  roles: [],
  loading: false,
  error: null,
};

export const getRoles = createAsyncThunk<Role[], void, { rejectValue: string }>("roles/getRoles", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    if (!dashboardEndPoints?.rolesAndPermissions?.allRoles) {
      throw new Error("Invalid endpoint URL");
    }
    const res = await axios.get(dashboardEndPoints?.rolesAndPermissions?.allRoles, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch roles");
  }
});

export const singleRole = createAsyncThunk<Role, number, { rejectValue: string }>("roles/singleRole", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";
    const res = await axios.get(`${dashboardEndPoints?.rolesAndPermissions?.oneRole}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch role");
  }
});

export const filterRoles = createAsyncThunk<Role[], { name: string }, { rejectValue: string }>("roles/filterRoles", async (query, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    if (!dashboardEndPoints?.rolesAndPermissions?.filterRoles) {
      throw new Error("filterRoles endpoint is not defined");
    }

    const res = await axios.get(dashboardEndPoints.rolesAndPermissions.filterRoles, {
      params: query,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to filter roles");
  }
});

export const createRole = createAsyncThunk<Role, { name: string; permission_id: number[] }, { rejectValue: string }>(
  "roles/createRole",
  async ({ name, permission_id }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";
      const formData = new FormData();
      formData.append("name", name);
      permission_id.forEach((id) => formData.append("permission_id[]", id.toString()));

      if (!dashboardEndPoints?.rolesAndPermissions?.createRole) {
        throw new Error("createRole endpoint is not defined");
      }

      const res = await axios.post(dashboardEndPoints.rolesAndPermissions.createRole, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message || "Failed to create role");
    }
  }
);

export const updateRole = createAsyncThunk<Role, { id: number; name: string; permission_id: number[] }, { rejectValue: string }>(
  "roles/updateRole",
  async ({ id, name, permission_id }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";
      const formData = new FormData();
      formData.append("name", name);
      permission_id.forEach((pid) => formData.append("permission_id[]", pid.toString()));

      const res = await axios.post(`${dashboardEndPoints?.rolesAndPermissions?.updateRole}/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message || "Failed to update role");
    }
  }
);

export const deleteRole = createAsyncThunk<number, number, { rejectValue: string }>("roles/deleteRole", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";
    await axios.delete(`${dashboardEndPoints?.rolesAndPermissions?.deleteRole}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to delete role");
  }
});

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      })

      .addCase(singleRole.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.roles.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) state.roles[index] = action.payload;
        else state.roles.push(action.payload);
      })

      .addCase(filterRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })

      .addCase(createRole.fulfilled, (state, action) => {
        state.loading = false;
        state.roles.push(action.payload);
      })

      .addCase(updateRole.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.roles.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) state.roles[index] = action.payload;
      })

      .addCase(deleteRole.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = state.roles.filter((role) => role.id !== action.payload);
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = (action as PayloadAction<string>).payload;
        }
      );
  },
});

export default rolesSlice.reducer;
