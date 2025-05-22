import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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
  driver?: { name: string; email: string; phone: string };
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
  driver?: { name: string; email: string; phone: string };
}

export interface Driver {
  id: number;
  full_name: string;
}
interface OrdersState {
  orders: Order[];
  drivers: Driver[];
  singleOrder: Order | null;
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  drivers: [],
  singleOrder: null,
  loading: false,
  error: null,
};

interface ordersParams {
  code?: string;
}

export const getAllOrders = createAsyncThunk<
  Order[],
  ordersParams,
  { rejectValue: string }
>("orders/getAllOrders", async (query, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";
    const response = await axios.get<{ data: { orders: Order[] } }>(
      `${dashboardEndPoints?.orders?.allOrders}`,
      {
        params: query,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data.orders; // Change this line
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch orders"
    );
  }
});

export const getSingleOrder = createAsyncThunk<
  Order,
  string,
  { rejectValue: string }
>("orders/fetchOrderByCode", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    const singleOrder = dashboardEndPoints?.orders?.singleOrder as (
      id: string
    ) => string;

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
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch order"
    );
  }
});

export const getAllowedDrivers = createAsyncThunk<
  Driver[],
  string,
  { rejectValue: string }
>("orders/fetchAllowedDriversByOrderCode", async (id, { rejectWithValue }) => {
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";

    const allowedDrivers = dashboardEndPoints?.orders?.allowedDrivers as (
      id: string
    ) => string;

    const response = await axios.get(allowedDrivers(id), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response?.data?.data?.drivers;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error?.response?.data?.message || "Failed to fetch order"
    );
  }
});

interface AssignDriverArgs {
  id: string;
  code: string;
}
export const assingnDriver = createAsyncThunk<
  unknown,
  AssignDriverArgs,
  { rejectValue: string }
>("orders/assignDriverToOrder", async ({ id, code }, { rejectWithValue }) => {
  if (id && code) {
    const toastLoader = toast.loading("Assigning driver to order...");
    try {
      const token = Cookies.get("TAZOUD_TOKEN") ?? "";

      const assignToDriver = dashboardEndPoints?.orders
        ?.assignToDriver as string;

      const response = await axios.post(
        assignToDriver,
        { driver: code, code: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      toast.update(toastLoader, {
        render: response?.data?.message || "Driver assigned successfully",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });

      return response?.data?.data?.drivers;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.update(toastLoader, {
        render: error?.response?.data?.message || "Failed to assign driver",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      })
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch order"
      );
    }
  }
});

export const updateOrderStatus = createAsyncThunk<
  Order,
  { id: string; status: string },
  { rejectValue: string }
>("orders/updateOrderStatus", async ({ id, status }, { rejectWithValue }) => {
  const toastLoader = toast.loading("Updating order status...");
  try {
    const token = Cookies.get("TAZOUD_TOKEN") ?? "";
    const updateOrderState = dashboardEndPoints?.orders
      ?.updateOrderStatusEndPoint as string;

    const response = await axios.post(
      updateOrderState,
      { status, code: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    toast.update(toastLoader, {
      render: response?.data?.message || "Order status updated successfully",
      type: "success",
      isLoading: false,
      autoClose: 1500,
    });

    return response.data.data.order;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    toast.update(toastLoader, {
      render: error.response?.data?.message || "Failed to update order status",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
    return rejectWithValue(
      error.response?.data?.message || "Failed to update order status"
    );
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
      })

      // Allowed Drivers
      .addCase(getAllowedDrivers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllowedDrivers.fulfilled, (state, action) => {
        state.loading = false;
        state.drivers = action.payload;
      })
      .addCase(getAllowedDrivers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // assign driver
      .addCase(assingnDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assingnDriver.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(assingnDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    // update order status
  },
});

export default ordersSlice.reducer;
