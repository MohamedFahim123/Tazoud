import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface Buyer {
  name: string;
  email: string;
  phone: string;
}

export interface Order {
  code: string;
  price: number;
  longitude: string;
  latitude: string;
  payment_method: string;
  payment_status: string;
  order_status: string;
  buyer: Buyer;
  date: string;
}

interface OrdersState {
  orders: Order[];
  singleOrder: Order | null;
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  singleOrder: null,
  loading: false,
  error: null,
};

interface ordersParams {
  code?: string;
}

export const getAllOrders = createAsyncThunk<Order[], ordersParams, { rejectValue: string }>("orders/getAllOrders", async (query, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";
    const response = await axios.get<{ data: { orders: Order[] } }>(`${dashboardEndPoints?.orders?.allOrders}`, {
      params: query,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data.orders; // Change this line
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch orders");
  }
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) {
          state.orders = action.payload;
          state.singleOrder = null;
        } else {
          state.singleOrder = action.payload;
          state.orders = [];
        }
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ordersSlice.reducer;
