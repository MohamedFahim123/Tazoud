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
  updating: boolean;
  error: string | null;
}

export const getProfile = createAsyncThunk<ProfileTypes, void, { rejectValue: string }>("profile/getProfile", async (_, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN");
    if (!token) throw new Error("No authentication token found");

    if (!dashboardEndPoints?.profile?.showProfile) {
      throw new Error("Invalid endpoint URL");
    }
    const response = await axios.get<{ data: ProfileTypes }>(dashboardEndPoints?.profile?.showProfile, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch profile");
  }
});

export const updateProfile = createAsyncThunk<ProfileTypes, { name: string; phone: string; image?: File | null }, { rejectValue: string }>(
  "profile/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN");
      if (!token) throw new Error("No authentication token found");

      const formData = new FormData();

      formData.append("name", profileData.name);
      formData.append("phone", profileData.phone);
      if (profileData.image) {
        formData.append("image", profileData.image);
      }

      if (!dashboardEndPoints?.profile?.updateProfile) {
        throw new Error("Invalid endpoint URL");
      }
      const response = await axios.post<{ data: ProfileTypes }>(dashboardEndPoints?.profile?.updateProfile, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
      return response.data.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message || "Failed to update profile");
    }
  }
);

const initialState: ProfileState = {
  profile: null,
  loading: false,
  updating: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // profile
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
        state.error = action.payload || "Failed to fetch profile";
      })

      // Update profile
      .addCase(updateProfile.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updating = false;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload || "Failed to update profile";
      });
  },
});

export default profileSlice.reducer;
