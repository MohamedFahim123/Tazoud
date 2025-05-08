"use client";

import { deleteStaff, getStaff, StaffTypes, updateStaffStatus } from "@/app/rtk/slices/staffSlice";
import { AppDispatch } from "@/app/rtk/store";
import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const StaffCard = ({ staff }: { staff: StaffTypes }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStatusUpdate = async (id: string) => {
    try {
      await dispatch(updateStaffStatus({ id })).unwrap();
      await dispatch(getStaff()).unwrap();
      window.location.reload();
      toast.success("Staff status updated");
    } catch (error) {
      toast.error(typeof error === "string" ? error : "Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteStaff(String(id))).unwrap();
      await dispatch(getStaff()).unwrap();
      window.location.reload();
      toast.success("Staff deleted");
    } catch (error) {
      toast.error(typeof error === "string" ? error : "Failed to delete");
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-4">
        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center space-x-4 ">
            <Image
              src={staff?.image instanceof File ? URL.createObjectURL(staff.image) : staff?.image || "/images/profile.png"}
              alt={staff.name || "Unknown Staff"}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              width={200}
              height={200}
            />
            <div className="flex flex-col space-x-2">
              <h3 className="font-semibold text-lg text-primary">{staff.name}</h3>
              <div className="flex items-center space-x-2 w-full mt-2">
                <p className="text-gray-600 text-sm text-black/75">{staff.role}</p>
                <Link href={`/dashboard/staff/update-staff/${staff.id}`}>
                  <BiEdit className="text-2xl text-primary cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-black/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm text-black/75">{staff.email}</span>
          </div>

          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-black/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm text-black/75">{staff.phone}</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between flex-wrap gap-4">
          <span
            onClick={() => handleStatusUpdate(String(staff.id))}
            className={`px-3 py-2 text-xs rounded-full cursor-pointer ${staff.status === "Active" ? "bg-green text-white" : "bg-red-500 text-white"}`}
          >
            {staff.status}
          </span>
          <span onClick={() => handleDelete(String(staff.id))} className="px-3 py-2 text-xs rounded-full bg-red-500 text-white cursor-pointer">
            <MdDelete size={15} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
