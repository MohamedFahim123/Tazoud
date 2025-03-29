import Image from "next/image";

type TableProps = {
  columns: string[];
  data: {
    productImage?: string;
    name: string;
    date?: string;
    price?: string;
    total: string;
  }[];
  summary?: { label: string; value: string }[];
};

function Table({ columns, data, summary }: TableProps) {
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
        {data.map((row, index) => (
          <tr key={index} className="border-b border-gray-200">
            {row.productImage && (
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                <Image src={row.productImage} alt="product_image" width={50} height={50} priority placeholder="blur" blurDataURL="/images/profile.png" />
              </td>
            )}

            <td className="px-6 py-4 whitespace-nowrap ">{row.name}</td>
            {row.date && <td className="px-6 py-4 whitespace-nowrap ">{row.date}</td>}
            {row.price && <td className="px-6 py-4 whitespace-nowrap ">{row.price}</td>}
            <td className="px-6 py-4 whitespace-nowrap ">{row.total}</td>
          </tr>
        ))}
        {summary &&
          summary.map((item, index) => (
            <tr key={index} className={index === summary.length - 1 ? "border-b border-gray-200" : ""}>
              <td></td>
              <td colSpan={2} className="px-6 py-4">
                {item.label}
              </td>
              <td className="px-6 py-4">{item.value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
