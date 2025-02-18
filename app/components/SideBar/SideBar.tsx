"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiFillProduct } from "react-icons/ai";
import { BsBoxFill } from "react-icons/bs";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaBell,
  FaSignOutAlt,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";
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
      if (window.innerWidth <= 768) {
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
    <Sidebar
      collapsed={collapsed}
      className={`min-h-screen shadow-lg ${styles.sideBarContainer}`}
    >
      <div className="flex justify-center my-2">
        {collapsed ? (
          <FaArrowAltCircleRight
            className="cursor-pointer"
            size={30}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <FaArrowAltCircleLeft
            className="cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
            size={30}
          />
        )}
      </div>
      <Menu>
        <MenuItem
          icon={<MdDashboard />}
          onClick={() => router.push("/dashboard")}
          className={
            pathname === "/dashboard" ? `${styles.activeMenuItem}` : ""
          }
        >
          Dashboard
        </MenuItem>

        <SubMenu
          className={
            isActive("/dashboard/profile") ? `${styles.activeMenuItem}` : ""
          }
          label="Profile Settings"
          icon={<RiUserSettingsFill />}
        >
          <MenuItem
            icon={<FaUser />}
            onClick={() => router.push("/dashboard/profile")}
          >
            Profile Details
          </MenuItem>
          <MenuItem
            icon={<FaUserEdit />}
            onClick={() => router.push("/dashboard/profile/update-profile")}
          >
            Update Profile
          </MenuItem>
        </SubMenu>

        <SubMenu
          className={
            isActive("/dashboard/products") ? `${styles.activeMenuItem}` : ""
          }
          label="Products Settings"
          icon={<AiFillProduct />}
        >
          <MenuItem
            icon={<BsBoxFill />}
            onClick={() => router.push("/dashboard/products")}
          >
            Products
          </MenuItem>
          <MenuItem
            icon={<IoMdAdd />}
            onClick={() => router.push("/dashboard/products/add-product")}
          >
            Add Product
          </MenuItem>
        </SubMenu>

        <MenuItem
          icon={<FaBell />}
          onClick={() => router.push("/dashboard/notifications")}
          className={
            isActive("/dashboard/notifications")
              ? `${styles.activeMenuItem}`
              : ""
          }
        >
          Notifications
        </MenuItem>

        <MenuItem
          icon={<FaSignOutAlt />}
          onClick={() => router.push("/dashboard/requests")}
          className={
            isActive("/dashboard/requests") ? `${styles.activeMenuItem}` : ""
          }
        >
          Requests
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
