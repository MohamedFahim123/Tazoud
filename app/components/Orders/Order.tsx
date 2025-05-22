"use client";

import OrderList from "./OrderList";

const Order = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-5  flex-col sm:flex-row p-8 ">
        <h1 className="text-2xl font-bold self-start">Order Details</h1>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <OrderList />
      </div>
    </>
  );
};

export default Order;
