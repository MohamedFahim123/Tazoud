"use client";

import { getStaff } from "@/app/rtk/slices/staffSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import StaffCard from "./StaffCard";
import { useEffect } from "react";

const Staff = () => {
  const dispatch: AppDispatch = useDispatch();

  const { staff, loading } = useSelector((state: RootState) => state.staff);

  const refetchStaff = () => {
    dispatch(getStaff());
  };

  useEffect(() => {
    refetchStaff();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-black/75">Our Team</h1>
            <Link href="/dashboard/staff/add-staff">
              <p className="text-md bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-85">Add New</p>
            </Link>
          </div>
          <p className="mt-2 text-lg text-gray_dark">Meet the people who make it all happen</p>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {staff.map((staff) => (
              <StaffCard key={staff.id} refetchStaff={refetchStaff} staff={staff} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;
