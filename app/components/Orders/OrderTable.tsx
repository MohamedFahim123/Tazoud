"use client";

import { useState } from "react";

type OrderTableProps = {
  columns: string[];
  data: {
    id: string;
    customerName: string;
    date: string;
    paymentStatus: string;
    total: string;
    paymentMethod: string;
    orderStatus: string;
  }[];
};

function OrderTable({ columns, data }: OrderTableProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const [rowChecked, setRowChecked] = useState<boolean[]>(new Array(data.length).fill(false));

  const handleMasterCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    setRowChecked(new Array(data.length).fill(isChecked));
  };

  const handleRowCheck = (index: number) => {
    const updatedChecked = [...rowChecked];
    updatedChecked[index] = !updatedChecked[index];
    setRowChecked(updatedChecked);
    setChecked(updatedChecked.every((val) => val));
  };
  return (
    <table className="w-full text-md text-left text-gray-500 whitespace-nowrap">
      <thead className="text-xs text-center bg-gray text-gray-700 uppercase">
        <tr>
          <th className="px-6 py-3">
            <input type="checkbox" className="w-4 h-4 cursor-pointer " checked={checked} onChange={handleMasterCheck} />
          </th>
          {columns.map((col, index) => (
            <th key={index} className="px-6 py-3">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center ">
        {data.map((row, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="px-6 py-4">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" checked={rowChecked[index]} onChange={() => handleRowCheck(index)} />
            </td>
            <td className="px-6 py-4 text-primary">{row.id}</td>
            <td className="px-6 py-4">{row.customerName}</td>
            <td className="px-2 py-4">{row.date}</td>
            <td className="px-6 py-4">
              <div
                className={`  ${
                  row.paymentStatus === "Refund" ? "bg-indigo-100 text-primary" : `${row.paymentStatus === "Paid" ? "bg-red-100 text-red-600" : "bg-amber-100 text-yellow"}`
                } px-2 py-1 rounded-md`}
              >
                {row.paymentStatus}
              </div>
            </td>
            <td className="px-6 py-4">{row.total}</td>
            <td className="px-6 py-4">{row.paymentMethod}</td>
            <td className="px-6 py-4">
              <div
                className={`
                    ${
                      row.orderStatus === "Processing" ? "bg-emerald-100 text-green" : `${row.orderStatus === "Delivered" ? "bg-amber-100 text-yellow" : "bg-red-100 text-red-600"}`
                    } px-2 py-1 rounded-md`}
              >
                {row.orderStatus}
              </div>
            </td>
            <td className="px-6 py-4 mt-1 flex items-center  gap-2">
              <div className="text-green cursor-pointer">Edit</div>
              <div className="text-red-700 cursor-pointer">Delete</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
