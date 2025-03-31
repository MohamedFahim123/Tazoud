import { authEndPoints } from "@/app/auth/utils/authEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  locale: string;
  role: string;
  permissions: string[];
}
interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const loadUserFromToken = (): User | null => {
  if (typeof window !== "undefined") {
    const token = Cookies.get("TAZOUD_TOKEN");
    if (token) {
      return {
        id: 0,
        name: "",
        email: "",
        phone: "",
        image: "",
        locale: "",
        role: "",
        permissions: [],
      };
    }
  }
  return null;
};

const initialState: AuthState = {
  user: loadUserFromToken(),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(authEndPoints.login, credentials);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      Cookies.remove("TAZOUD_TOKEN");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
