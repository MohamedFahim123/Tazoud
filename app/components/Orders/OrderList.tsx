import { useDispatch, useSelector } from "react-redux";
import OrderTable from "./OrderTable";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { getAllOrders } from "@/app/rtk/slices/orderSlice";
import Loading from "../Loading/Loading";

const OrderList = ({ code }: { code?: string }) => {
  const columns = ["Code", "Customer Name", "Date", "Payment Status", "Total", "Payment Method", "Order Status", "Action"];

  const dispatch: AppDispatch = useDispatch();

  const { orders, loading } = useSelector((state: RootState) => state.orders);

  console.log(orders);

  useEffect(() => {
    // dispatch(getAllOrders({ code: "O-0405251110" }));
    dispatch(getAllOrders({ code }));
  }, [code, dispatch]);

  return <div className="relative overflow-x-auto bg-white shadow-md">{loading ? <Loading /> : <OrderTable columns={columns} orders={orders} />}</div>;
};

export default OrderList;
