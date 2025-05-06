import { Order } from "@/app/rtk/slices/orderSlice";

const columns = ["Code", "Date", "latitude", "longitude", "Price", "Payment Method", "Payment Status", "Order Status"];
const buyerColumns = ["Buyer Name", "Buyer Email", "Buyer Phone"];
const productColumns = ["Product Title", "Product Slug", "variation Name", "variation Value", "Unit Price", "Product Quantity", "Total Price"];

const TablesDetails = ({ order }: { order: Order[] }) => {
  return (
    <>
      <div className="mt-5 w-full">
        <div className="relative overflow-x-auto bg-white shadow-md">
          <table className="w-full text-md text-center text-gray-500">
            <thead className="text-xs bg-gray text-gray-700 uppercase">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="px-6 py-3">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-black/75">
              {order &&
                order.map((row, index) => (
                  <tr key={index} className="border-b border-gray">
                    <td className="px-6 py-4 whitespace-nowrap ">{row.code}</td>
                    {row.date && <td className="px-6 py-4 whitespace-nowrap ">{row.date}</td>}
                    {row.price && <td className="px-6 py-4 whitespace-nowrap ">{row.latitude}</td>}
                    {row.price && <td className="px-6 py-4 whitespace-nowrap ">{row.longitude}</td>}
                    <td className="px-6 py-4 whitespace-nowrap ">{row.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap ">{row.payment_method}</td>
                    <td className="px-6 py-4 whitespace-nowrap ">{row.payment_status}</td>
                    <td className="px-6 py-4 whitespace-nowrap ">{row.order_status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" w-full">
        <div className="flex flex-col gap-5">
          <div className="relative overflow-x-auto bg-white shadow-md">
            <table className="w-full text-md text-center text-gray-500">
              <thead className="text-xs bg-gray text-gray-700 uppercase">
                <tr>
                  {buyerColumns.map((col, index) => (
                    <th key={index} className="px-6 py-3">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-black/75">
                {order &&
                  order.map((row, index) => (
                    <tr key={index} className="border-b border-gray">
                      <td className="px-6 py-4 whitespace-nowrap ">{row.buyer.name}</td>
                      {row.buyer.email && <td className="px-6 py-4 whitespace-nowrap ">{row.buyer.email}</td>}
                      {row.buyer.phone ? <td className="px-6 py-4 whitespace-nowrap ">{row.buyer.phone}</td> : <td className="px-6 py-4 whitespace-nowrap ">No Phone</td>}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-auto bg-white shadow-md">
            <table className="w-full text-md text-center text-gray-500">
              <thead className="text-xs bg-gray text-gray-700 uppercase">
                <tr>
                  {productColumns.map((col, index) => (
                    <th key={index} className="px-6 py-3">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-black/75">
                {order.flatMap(
                  (row, rowIndex) =>
                    row.order_details?.map((item, itemIndex) => (
                      <tr key={`${rowIndex}-${itemIndex}`} className="border-b border-gray">
                        <td className="px-6 py-4">{item.product_title || "Not Found"}</td>
                        <td className="px-6 py-4">{item.product_slug || "Not Found"}</td>
                        <td className="px-6 py-4">{item.product_variation_name || "Not Found"}</td>
                        <td className="px-6 py-4">{item.product_variation_value || "Not Found"}</td>
                        <td className="px-6 py-4">{item.unit_price ?? "Not Found"}</td>
                        <td className="px-6 py-4">{item.quantity ?? "Not Found"}</td>
                        <td className="px-6 py-4">{item.total_price ?? "Not Found"}</td>
                      </tr>
                    )) || []
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablesDetails;
