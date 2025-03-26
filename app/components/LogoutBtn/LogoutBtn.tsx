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
  return (
    <button
      type="button"
      onClick={handleLogout}
      className={`
                flex items-center gap-2 
                px-4 py-2
                outline-none 
                bg-red-500 text-white
                rounded-lg 
                hover:bg-white transition-all duration-300 
                hover:text-red-500
                active:bg-white 
                shadow-md
                focus:outline-none 
            `}
    >
      <FaSignOutAlt size={18} />
      Logout
    </button>
  );
}
