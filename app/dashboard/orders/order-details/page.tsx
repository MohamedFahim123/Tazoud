import CustomerContactCard from "@/app/components/Orders/CustomerContactCard";
import TablesDetails from "@/app/components/Orders/TablesDeatails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Details",
  description: "Order Details",
};

function oderDetailsPage() {
  return (
    <>
      <div className="w-full bg-slate-100 p-4 rounded-lg ">
        <div className="flex items-start justify-between gap-2 flex-col lg:flex-row p-8 ">
          <h1 className="text-2xl font-bold">Order Details</h1>
          <span className="px-8 py-3 text-white bg-primary cursor-pointer "> Add New Vendor</span>
        </div>

        <div className="flex items-center gap-2 flex-col lg:flex-row bg-white px-3 py-8">
          <div className="bg-gray w-full flex flex-col lg:flex-row items-center justify-between gap-5 p-6">
            <span className="text-lg font-bold">Items from Order #BD80288</span>
            <span className="text-md text-gray-500">October 7, 2020 at 9:08 pm / 3 items / Total $10254.00</span>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="px-8 py-3 text-red-600 bg-red-100 cursor-pointer ">Paid </span>
              <span className="px-8 py-3 text-white bg-green cursor-pointer "> Fulfilled </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <TablesDetails />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-5">
          <CustomerContactCard name="Customer Contact" />
          <CustomerContactCard name="Shipping Address" />
          <CustomerContactCard name="Billing Address" />
        </div>
      </div>
    </>
  );
}

export default oderDetailsPage;
