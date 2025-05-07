import { useDispatch, useSelector } from "react-redux";
import OrderTable from "./OrderTable";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { getAllOrders } from "@/app/rtk/slices/orderSlice";
import Loading from "../Loading/Loading";
import CustomInput from "../CustomInput/CustomInput";

const columns = ["Code", "latitude", "latitude", "Payment Status", "Price", "Payment Method", "Order Status", "Action"];
const OrderList = () => {
  const [searchCode, setSearchCode] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const { orders, loading } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(getAllOrders({ code: searchCode.trim() }));
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchCode, dispatch]);

  return (
    <>
      <CustomInput
        type="text"
        placeHolder="Search by order code"
        value={searchCode}
        onChange={(e) => setSearchCode(e.target.value)}
        className="border border-gray_dark outline-none text-black/75  px-3 py-2 w-2/5 rounded mb-4"
      />
      <div className="relative overflow-x-auto bg-white shadow-md">
        {loading ? (
          <Loading />
        ) : orders.length === 0 ? (
          <p className="text-center py-4 text-gray_dark">No orders found</p>
        ) : (
          <OrderTable columns={columns} orders={orders} />
        )}
      </div>
    </>
  );
};

export default OrderList;
