"use client";

import { AppDispatch, RootState } from "@/app/rtk/store";
import CustomerContactCard from "./CustomerContactCard";
import { useDispatch, useSelector } from "react-redux";
import TablesDetails from "./TablesDeatails";
import { getSingleOrder } from "@/app/rtk/slices/orderSlice";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const OrderDetails = ({ id }: { id: string }) => {
  const dispatch: AppDispatch = useDispatch();

  const { singleOrder, loading } = useSelector((state: RootState) => state.orders);

  console.log(id);

  useEffect(() => {
    if (id) dispatch(getSingleOrder(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="w-full bg-slate-100 p-4 rounded-lg ">
        <div className="flex items-start justify-between gap-2 flex-col lg:flex-row p-8 ">
          <h1 className="text-2xl font-bold">Order Details</h1>
          <span className="px-8 py-3 text-white bg-primary cursor-pointer "> Add New Vendor</span>
        </div>

        {loading ? (
          <Loading />
        ) : singleOrder ? (
          <>
            <div className="flex items-center gap-2 flex-col lg:flex-row bg-white px-3 py-8">
              <div className="bg-gray w-full flex flex-col lg:flex-row items-center justify-between gap-5 p-6">
                <span className="text-lg font-bold">Items from order code {singleOrder.code}</span>
                <p className="text-md text-gray-500">
                  <span className="text-md text-primary">{singleOrder.date}</span> / Total
                  <span className="text-md text-green"> ${singleOrder.price}</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span className="px-8 py-3 text-red-600 bg-red-100 cursor-pointer ">Paid </span>
                  <span className="px-8 py-3 text-white bg-green cursor-pointer "> Fulfilled </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <TablesDetails order={[singleOrder]} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-5">
              <CustomerContactCard name="Customer Contact" />
              <CustomerContactCard name="Shipping Address" />
              <CustomerContactCard name="Billing Address" />
            </div>
          </>
        ) : (
          <p className="text-center py-4 text-gray_dark">No orders found</p>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
