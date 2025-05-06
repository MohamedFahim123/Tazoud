"use client";

import AddStaff from "@/app/components/Staff/AddStaff";
import { addStaff, StaffTypes } from "@/app/rtk/slices/staffSlice";
import { AppDispatch } from "@/app/rtk/store";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useAddStaffPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddStaff = async (values: Omit<StaffTypes, "id" | "status">) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name ?? "");
      formData.append("email", values.email ?? "");
      formData.append("password", values.password ?? "");
      formData.append("phone", values.phone ?? "");
      formData.append("role_id", values.role ?? "");
      formData.append("image", values.image ?? "");

      const res = await dispatch(addStaff(formData)).unwrap();
      toast.success(res?.message ? res?.message : "Staff added successfully");
    } catch (error) {
      if (error && typeof error === "object" && !Array.isArray(error)) {
        const errorObj = error as Record<string, string[]>;
        Object.entries(errorObj).forEach(([, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => toast.error(message));
          }
        });
      } else {
        toast.error(typeof error === "string" ? error : "Something went wrong while adding the staff.");
      }
    }
  };

  return <AddStaff onSubmit={handleAddStaff} />;
};

export default useAddStaffPage;
