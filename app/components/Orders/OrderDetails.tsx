"use client";

import {
  assingnDriver,
  getAllowedDrivers,
  getSingleOrder,
  updateOrderStatus,
} from "@/app/rtk/slices/orderSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import TablesDetails from "./TablesDeatails";

const OrderDetails = ({ id }: { id: string }) => {
  const [underUpdating, setUnderUpdating] = useState<boolean>(false);
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const [driver, setDriver] = useState<number>();

  const { singleOrder, drivers, loading } = useSelector(
    (state: RootState) => state.orders
  );

  useEffect(() => {
    if (id) {
      dispatch(getSingleOrder(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && !singleOrder?.driver?.name && singleOrder?.code) {
      dispatch(getAllowedDrivers(id));
    }
  }, [dispatch, id, singleOrder?.code, singleOrder?.driver?.name]);

  return (
    <>
      <div className="w-full bg-slate-100 p-4 rounded-lg">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold">
            Order Details: {singleOrder?.code}
          </h1>
        </div>

        {loading ? (
          <Loading />
        ) : singleOrder ? (
          <>
            <div className="flex items-center gap-2 flex-col lg:flex-row bg-white px-3 py-8">
              <div className="bg-gray w-full flex flex-col lg:flex-row items-center justify-between gap-5 p-6">
                {singleOrder?.driver?.name ? (
                  <>
                    <p className="text-md text-gray-500">
                      Driver Name:{" "}
                      <span className="underline font-bold">
                        {singleOrder?.driver?.name}
                      </span>
                    </p>
                    <p className="text-md text-gray-500">
                      Driver Phone:{" "}
                      <span className="underline font-bold">
                        {singleOrder?.driver?.phone}
                      </span>
                    </p>
                    <p className="text-md text-gray-500">
                      Driver Email:
                      <span className="underline font-bold">
                        {singleOrder?.driver?.email}
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <div>
                      <select
                        defaultValue={""}
                        onChange={(e) =>
                          setDriver(
                            drivers?.find(
                              (d) => d.id === Number(e.target.value)
                            )?.id
                          )
                        }
                        className="w-full px-4 py-3 text-sm rounded-md focus:outline-none focus:border-none focus:shadow-none focus:ring-2 bg-white text-gray-700"
                      >
                        <option value="">Assign To Driver</option>
                        {drivers?.map((driver) => (
                          <option key={driver.id} value={driver.id}>
                            {driver.full_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {driver && (
                      <button
                        title="Assign To Driver"
                        onClick={async () => {
                          const code = `${driver}`;
                          if (code || id) {
                            await dispatch(assingnDriver({ id, code }));
                            dispatch(getSingleOrder(id));
                          }
                        }}
                        className="px-8 py-2 text-white bg-green cursor-pointer"
                      >
                        Assign To Driver
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-col lg:flex-row bg-white px-3 py-8">
              <div className="bg-gray w-full flex flex-col lg:flex-row items-center justify-between gap-5 p-6">
                {underUpdating ? (
                  <>
                    <select
                      className="w-auto px-4 py-3 text-sm rounded-md focus:outline-none focus:border-none focus:shadow-none focus:ring-2 bg-white text-gray-700"
                      defaultValue={
                        singleOrder.order_status === "Picked Up"
                          ? "picked_up"
                          : singleOrder.order_status === "Delivered"
                          ? "delivered"
                          : ""
                      }
                      onChange={(e) => {
                        setCurrentStatus(e.target.value);
                      }}
                    >
                      <option value="" disabled>
                        Order Status
                      </option>
                      <option value="picked_up">Picked Up</option>
                      <option value="delivered">Delivered</option>
                    </select>
                    <button
                      onClick={async () => {
                        if (id) {
                          await dispatch(
                            updateOrderStatus({
                              id,
                              status: currentStatus,
                            })
                          );
                          dispatch(getSingleOrder(id));
                        }
                        setUnderUpdating(false);
                      }}
                      className="px-8 py-2 text-white bg-green cursor-pointer"
                    >
                      Update Status
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-md text-gray-500">
                      <span className="text-md font-bold">
                        {singleOrder.order_status}
                      </span>
                    </p>
                    <button
                      onClick={() => setUnderUpdating(true)}
                      className="px-8 py-2 text-primary cursor-pointer"
                    >
                      Edit Status
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-col lg:flex-row bg-white px-3 py-8">
              <div className="bg-gray w-full flex flex-col lg:flex-row items-center justify-between gap-5 p-6">
                <p className="text-md text-gray-500">
                  <span className="text-md text-primary">
                    {singleOrder.date}
                  </span>{" "}
                  / Total
                  <span className="text-md text-green">
                    {" "}
                    ${singleOrder.price}
                  </span>
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <TablesDetails order={[singleOrder]} />
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-5">
              <CustomerContactCard name="Customer Contact" />
              <CustomerContactCard name="Shipping Address" />
              <CustomerContactCard name="Billing Address" />
            </div> */}
          </>
        ) : (
          <p className="text-center py-4 text-gray_dark">No orders found</p>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
