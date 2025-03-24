"use client";
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import LogoutBtn from "../components/LogoutBtn/LogoutBtn";
import SideBar from "../components/SideBar/SideBar";
import { LayoutInterface } from "../utils/interfaces";
import styles from "./dashboardMain.module.css";

export default function Layout({ children }: LayoutInterface) {
  const [collapsed, setCollapsed] = useState(false);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // useEffect(() => {

  return (
    <AuthGuard>
      <div className="flex h-screen">
        {/* {sidebarOpen && <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)} />} */}
        <div className="hidden sm:block">
          <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <div className="flex-1 bg-[#F7F8FA] overflow-scroll flex flex-col">
          <header className="flex justify-between items-center px-4 md:px-6 py-4">
            {/* <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <FaBars size={24} />
            </button> */}
            <h1 className={`text-2xl font-bold ${styles.dashBoardMainColor}`}>TAZOUD</h1>
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
    </AuthGuard>
  );
}
