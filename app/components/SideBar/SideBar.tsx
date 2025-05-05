"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiFillProduct } from "react-icons/ai";
import { BsBoxFill } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaBell, FaUser, FaUserEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
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
      if (window.innerWidth <= 970) {
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
    <Sidebar collapsed={collapsed} className={`min-h-screen shadow-lg bg-white overflow-hidden rounded-lg`}>
      <div className="flex justify-center my-2">
        {collapsed ? (
          <FaArrowAltCircleRight className="cursor-pointer" size={30} onClick={() => setCollapsed(!collapsed)} />
        ) : (
          <FaArrowAltCircleLeft className="cursor-pointer" onClick={() => setCollapsed(!collapsed)} size={30} />
        )}
      </div>
      <Menu>
        <MenuItem icon={<MdDashboard />} onClick={() => router.push("/dashboard")} className={pathname === "/dashboard" ? `${styles.activeMenuItem}` : ""}>
          Dashboard
        </MenuItem>

        <SubMenu className={isActive("/dashboard/profile") ? `${styles.activeMenuItem}` : ""} label="Profile Settings" icon={<RiUserSettingsFill />}>
          <MenuItem icon={<FaUser />} onClick={() => router.push("/dashboard/profile")}>
            Profile Details
          </MenuItem>
          <MenuItem icon={<FaUserEdit />} onClick={() => router.push("/dashboard/profile/update-profile")}>
            Update Profile
          </MenuItem>
        </SubMenu>

        <SubMenu className={isActive("/dashboard/products") ? `${styles.activeMenuItem}` : ""} label="Products" icon={<AiFillProduct />}>
          <MenuItem icon={<BsBoxFill />} onClick={() => router.push("/dashboard/products")}>
            Products
          </MenuItem>
          <MenuItem icon={<IoMdAdd />} onClick={() => router.push("/dashboard/products/add-product")}>
            Add Product
          </MenuItem>
        </SubMenu>

        <MenuItem
          className={isActive("/dashboard/orders") ? `${styles.activeMenuItem}` : ""}
          icon={<CgShoppingBag />}
          onClick={() => router.push("/dashboard/orders/order-list")}
        >
          Order List
        </MenuItem>

        <MenuItem icon={<FaBell />} onClick={() => router.push("/dashboard/staff")} className={isActive("/dashboard/staff") ? `${styles.activeMenuItem}` : ""}>
          Staff
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
