import OrderTable from "@/app/components/Orders/OrderTable";

function orderListPage() {
  const columns = ["Order ID", "Customer Name", "Date", "Payment Status", "Total", "Payment Method", "Order Status", "Action"];
  const data = [
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Refund",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Delivered",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Paid",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Shipped",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Cash on Delivery",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Processing",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Refund",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Delivered",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Paid",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Shipped",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Cash on Delivery",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Processing",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Refund",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Delivered",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Paid",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Shipped",
    },
    {
      id: "BD80288",
      customerName: "John Doe",
      date: "October 7, 2020 at 9:08 pm",
      paymentStatus: "Cash on Delivery",
      total: "$10254.00",
      paymentMethod: "Mastercard",
      orderStatus: "Processing",
    },
  ];

  return (
    <>
      <div className="w-full bg-slate-100 p-4 rounded-lg ">
        <div className="flex items-center justify-between gap-5  flex-col sm:flex-row p-8 ">
          <h1 className="text-2xl font-bold self-start">Order Details</h1>
          <span
            className="px-8 py-3 text-white bg-primary cursor-pointer self-end"
          >
            Add New Vendor
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="relative overflow-x-auto bg-white shadow-md">
            <OrderTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default orderListPage;
