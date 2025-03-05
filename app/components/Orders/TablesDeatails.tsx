import Table from "./Table";

const TablesDetails = () => {
  const columns = ["Product", "Name", "Price", "Total"];
  const data = [
    {
      productImage: "/images/product-img1.png",
      name: "Polka Dots Woman Dress Color: Black",
      price: "$135 x 2",
      total: "$270",
    },
    {
      productImage: "/images/product-img1.png",
      name: "Polka Dots Woman Dress Color: Black",
      price: "$135 x 2",
      total: "$270",
    },
  ];
  const summary = [
    { label: "Subtotal", value: "$790" },
    { label: "Store Credit", value: "$-20" },
    { label: "Delivery Charges", value: "$30" },
    { label: "Shipping", value: "$25" },
    { label: "Vat Tax", value: "$35" },
    { label: "Total", value: "$860" },
  ];

  return (
    <>
      <div className="py-3 w-full">
        <div className="relative overflow-x-auto bg-white shadow-md">
          <Table columns={columns} data={data} summary={summary} />
        </div>
      </div>
      <div className="py-3 w-full">
        <div className="flex flex-col gap-5">
          <div className="relative overflow-x-auto bg-white shadow-md">
            <Table
              columns={["Transactions", "Date", "Total"]}
              data={[
                {
                  name: "Payment (PayPal)",
                  date: "October 7, 2022",
                  total: "$270",
                },
                {
                  name: "Payment (from account balance)",
                  date: "October 7, 2022",
                  total: "$270",
                },
                {
                  name: "Refund (Visa)",
                  date: "October 7, 2022",
                  total: "$270",
                },
              ]}
            />
          </div>
          <div className="relative overflow-x-auto bg-white shadow-md">
            <Table
              columns={["Balance", "Total"]}
              data={[
                {
                  name: "Order Total",
                  total: "$270",
                },
                {
                  name: "Return Total",
                  total: "$270",
                },
                {
                  name: "Paid by customer",
                  total: "$270",
                },
                {
                  name: "Refunded",
                  total: "$270",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TablesDetails;
