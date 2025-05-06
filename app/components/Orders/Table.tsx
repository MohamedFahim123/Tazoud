import { Order } from "@/app/rtk/slices/orderSlice";

type TableProps = {
  columns: string[];
  summary?: { label: string; value: string }[];
  order?: Order[];
};

function Table({ columns, order }: TableProps) {
  return (
    <table className="w-full text-md text-left text-gray-500">
      <thead className="text-xs bg-gray text-gray-700 uppercase">
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="px-6 py-3">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {order &&
          order.map((row, index) => (
            <tr key={index} className="border-b border-gray">
              {/* {row.productImage && (
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                <Image src={row.productImage} alt="product_image" width={50} height={50} priority placeholder="blur" blurDataURL="/images/profile.png" />
              </td>
            )} */}

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
        {/* {summary &&
          summary.map((item, index) => (
            <tr key={index} className={index === summary.length - 1 ? "border-b border-gray-200" : ""}>
              <td></td>
              <td colSpan={2} className="px-6 py-4">
                {item.label}
              </td>
              <td className="px-6 py-4">{item.value}</td>
            </tr>
          ))} */}
      </tbody>
    </table>
  );
}

export default Table;
