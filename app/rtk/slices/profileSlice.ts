import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export interface ProfileTypes {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    image: string;
    locale: string;
  };
}

interface ProfileState {
  profile: ProfileTypes | null;
  loading: boolean;
  error: string | null;
}

export const getProfile = createAsyncThunk<ProfileTypes, void, { rejectValue: string }>("profile/getProfile", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN");
    if (!token) throw new Error("No authentication token found");

    const response = await axios.get<{ data: ProfileTypes }>(dashboardEndPoints.profile, { headers: { Authorization: `Bearer ${token}` } });
    console.log(response.data.data);

    return response.data.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch profile");
  }
});

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default profileSlice.reducer;
