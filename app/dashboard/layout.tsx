"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import LogoutBtn from "../components/LogoutBtn/LogoutBtn";
import SideBar from "../components/SideBar/SideBar";
import { LayoutInterface } from "../utils/interfaces";
import styles from "./dashboardMain.module.css";

export default function Layout({ children }: LayoutInterface) {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const token = Cookies.get("TAZOUD_TOKEN");
  //   if (!token) {
  //     router.push("/auth/login");
  //   }
  // }, [router]);

  return (
    <div className="flex min-h-screen">
      {sidebarOpen && <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)} />}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white shadow-md transform transition-all md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
        } md:w-64`}
      >
        <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <div className="flex flex-col flex-1">
        <header className="flex justify-between items-center px-4 md:px-6 py-4">
          <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars size={24} />
          </button>
          <h1 className={`text-2xl font-bold ${styles.dashBoardMainColor}`}>Hello, Moe 👋</h1>
          <div className="flex items-center gap-4">
            <button title="Notifications" type="button" onClick={() => router.push("/dashboard/notifications")} className={styles.dashBoardMainColor}>
              <FaBell size={24} />
            </button>
            <LogoutBtn />
          </div>
        </header>
        <main className="flex-1 px-4 md:px-6">
          <div className={`bg-white ${styles.contentRadius}`}>{children}</div>
        </main>
      </div>
    </div>
  );
}
