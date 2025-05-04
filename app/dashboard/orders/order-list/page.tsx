import Order from "@/app/components/Orders/Order";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "orders",
  description: "Your orders",
};

function orderListPage() {
  return (
    <div className="w-full bg-slate-100 p-4 rounded-lg ">
      <Order />
    </div>
  );
}

export default orderListPage;
