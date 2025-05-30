"use client";

import { filterStaff, getStaff } from "@/app/rtk/slices/staffSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelectOptions from "../CustomSelectOptions/CustomSelectOptions";
import Loading from "../Loading/Loading";
import StaffCard from "./StaffCard";
import { IoMdAdd } from "react-icons/io";

const Staff = () => {
  const dispatch: AppDispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("0");

  const { staff, loading } = useSelector((state: RootState) => state.staff);

  useEffect(() => {
    const hasFilters = query || status !== "0";

    const timeout = setTimeout(() => {
      if (hasFilters) {
        const filters: {
          name?: string;
          phone?: string;
          email?: string;
          status?: string;
        } = {};

        if (query) {
          if (/^\d+$/.test(query)) filters.phone = query;
          else if (query.includes("@")) filters.email = query;
          else filters.name = query;
        }

        if (status === "1") filters.status = "active";
        if (status === "2") filters.status = "deactive";

        dispatch(filterStaff(filters));
      } else {
        dispatch(getStaff());
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, status, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-black/75">Our Team</h1>
            <Link href="/dashboard/staff/add-staff">
              <p className="text-md bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-85">
                <span className="inline md:hidden w-fit">
                  <IoMdAdd size={20} className="text-white font-bold" />
                </span>
                <span className="hidden md:inline"> Add New Staff</span>
              </p>
            </Link>
          </div>
          <p className="mt-2 text-lg text-gray_dark">Meet the people who make it all happen</p>
          <div className="flex items-center gap-4 flex-wrap mt-4">
            <CustomInput
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeHolder="Search by name, phone, or email"
              className="border px-3 py-2 rounded !w-[300px]"
            />

            <CustomSelectOptions
              id="status"
              value={status}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value)}
              options={[
                { id: 0, name: "All" },
                { id: 1, name: "Active" },
                { id: 2, name: "Deactive" },
              ]}
              className="max-w-[200px]"
            />
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : staff.length === 0 ? (
          <p className="h-[40vh] flex items-center justify-center text-black/75 text-lg">No staff found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {staff.map((staff) => (
              <StaffCard key={staff.id} staff={staff} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;
