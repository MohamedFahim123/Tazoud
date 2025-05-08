import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface Buyer {
  name: string;
  email: string;
  phone: string;
}
interface OrderDetails {
  product_id?: number;
  product_title?: string;
  product_slug?: string;
  product_variation_id?: number | null;
  product_variation_name?: string | null;
  product_variation_value?: string | null;
  unit_price?: number;
  quantity?: number;
  total_price?: number;
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
  order_details?: OrderDetails[];
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

export const getSingleOrder = createAsyncThunk<Order, string, { rejectValue: string }>("orders/fetchOrderByCode", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    const singleOrder = dashboardEndPoints?.orders?.singleOrder as (id: string) => string;

    const response = await axios.get(singleOrder(id), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data.data.order;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch order");
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
        state.orders = action.payload;
        state.singleOrder = null;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // single order
      .addCase(getSingleOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.singleOrder = action.payload;
      })
      .addCase(getSingleOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ordersSlice.reducer;
