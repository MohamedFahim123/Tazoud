"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsBoxFill } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { GoPasskeyFill } from "react-icons/go";
import { HiUsers } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import styles from "./sideBar.module.css";

interface SideBarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function SideBar({ collapsed, setCollapsed }: SideBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname.includes(path);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1300) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapsed]);

  return (
    <Sidebar collapsed={collapsed} className={`min-h-screen shadow-lg bg-white overflow-hidden mt-16  `}>
      {/* <div className="flex justify-center my-2">
        {collapsed ? (
          <FaArrowAltCircleRight className="cursor-pointer" size={30} onClick={() => setCollapsed(!collapsed)} />
        ) : (
          <FaArrowAltCircleLeft className="cursor-pointer" onClick={() => setCollapsed(!collapsed)} size={30} />
        )}
      </div> */}
      <Menu>
        <MenuItem icon={<MdDashboard />} onClick={() => router.push("/dashboard")} className={pathname === "/dashboard" ? `${styles.activeMenuItem}` : ""}>
          Dashboard
        </MenuItem>

        <MenuItem icon={<FaUser />} onClick={() => router.push("/dashboard/profile")} className={pathname === "/dashboard/profile" ? `${styles.activeMenuItem}` : ""}>
          Profile
        </MenuItem>

        <MenuItem
          icon={<BsBoxFill />}
          onClick={() => router.push("/dashboard/products")}
          className={pathname === "/dashboard/products" ? `${styles.activeMenuItem}` : ""}
        >
          Products
        </MenuItem>

        <MenuItem
          className={isActive("/dashboard/orders") ? `${styles.activeMenuItem}` : ""}
          icon={<CgShoppingBag />}
          onClick={() => router.push("/dashboard/orders/order-list")}
        >
          Order List
        </MenuItem>

        <MenuItem icon={<HiUsers />} onClick={() => router.push("/dashboard/staff")} className={isActive("/dashboard/staff") ? `${styles.activeMenuItem}` : ""}>
          Staff
        </MenuItem>

        <MenuItem icon={<GoPasskeyFill />} onClick={() => router.push("/dashboard/roles")} className={isActive("/dashboard/roles") ? `${styles.activeMenuItem}` : ""}>
          Roles
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
