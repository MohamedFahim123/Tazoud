"use client";

import { logout } from "@/app/rtk/slices/authSlice";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  };
  return <FaSignOutAlt className={`cursor-pointer text-red-500 `} size={28} onClick={handleLogout} />;
}
