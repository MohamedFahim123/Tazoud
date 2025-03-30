import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface Unit {
  id: number;
  name: string;
}

interface UnitsState {
  units: Unit[];
  loading: boolean;
  error: string | null;
}

export const getUnitsMeasures = createAsyncThunk<Unit[], void, { rejectValue: string }>("units/getUnitsMeasures", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<{ data: { units: Unit[] } }>("https://tazawod.valureach.com/api/units-of-measure");
    return response?.data?.data?.units;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch units");
  }
});

const initialState: UnitsState = {
  units: [],
  loading: false,
  error: null,
};

const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUnitsMeasures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUnitsMeasures.fulfilled, (state, action) => {
        state.loading = false;
        state.units = action.payload;
      })
      .addCase(getUnitsMeasures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch units";
      });
  },
});

export default unitsSlice.reducer;
