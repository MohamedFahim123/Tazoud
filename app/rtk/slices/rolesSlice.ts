import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface SingleRole {
  id: number;
  name: string;
}

export interface Permission {
  id: number;
  name: string;
  enable: boolean;
}
export interface Role {
  id: number;
  name: string;
  role?: SingleRole;
  permissions?: Permission[];
}

interface RolesState {
  roles: Role[];
  allowedRoles: Role[];
  singleRole: Role | null;
  loading: boolean;
  error: string | null;
}

const initialState: RolesState = {
  roles: [],
  allowedRoles: [],
  singleRole: null,
  loading: false,
  error: null,
};

export const getAllRoles = createAsyncThunk<Role[], void, { rejectValue: string }>("roles/getAllRoles", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    if (!dashboardEndPoints?.rolesAndPermissions?.allRoles) {
      throw new Error("Invalid endpoint URL");
    }
    const res = await axios.get(dashboardEndPoints?.rolesAndPermissions?.allRoles, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.data.roles;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch roles");
  }
});

export const getSingleRole = createAsyncThunk<Role, string, { rejectValue: string }>("roles/getSingleRole", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";
    const singleRole = dashboardEndPoints?.rolesAndPermissions?.oneRole as (id: string) => string;

    const res = await axios.get(`${singleRole(id)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch role");
  }
});

export const getAllowedRoles = createAsyncThunk<Role[], void, { rejectValue: string }>("roles/allowedRoles", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    if (!dashboardEndPoints?.staff?.allowedRoles) {
      throw new Error("Invalid endpoint URL");
    }

    const res = await axios.get(dashboardEndPoints?.staff?.allowedRoles, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.data.roles;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch allowed roles");
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
    return res.data.data.roles;
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

    const deleteRole = dashboardEndPoints?.rolesAndPermissions?.deleteRole as (id: string) => string;

    await axios.delete(`${deleteRole(id.toString())}`, {
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

      //   get roles
      .addCase(getAllRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })
      .addCase(getAllRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      })

      //   get allowed roles
      .addCase(getAllowedRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllowedRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.allowedRoles = action.payload;
      })
      .addCase(getAllowedRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      })

      // single role
      .addCase(getSingleRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleRole.fulfilled, (state, action) => {
        state.loading = false;
        state.singleRole = action.payload;
      })
      .addCase(getSingleRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
        state.singleRole = null;
      })

      // filter roles
      .addCase(filterRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })

      // create role
      .addCase(createRole.fulfilled, (state, action) => {
        state.loading = false;
        state.roles.push(action.payload);
      })

      // update role
      .addCase(updateRole.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.roles.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) state.roles[index] = action.payload;
      })

      // delete role
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
