"use client";
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import LogoutBtn from "../components/LogoutBtn/LogoutBtn";
import SideBar from "../components/SideBar/SideBar";
import { LayoutInterface } from "../utils/interfaces";
import styles from "./dashboardMain.module.css";
import AuthGuard from "../components/AuthGuard/AuthGuard";
// import SideMenu from "../components/SideMenu/SideMenu";
// import Link from "next/link";

export default function Layout({ children }: LayoutInterface) {
  const [collapsed, setCollapsed] = useState(false);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const token = Cookies.get("TAZOUD_TOKEN");
  //   if (!token) {
  //     router.push("/auth/login");
  //   }
  // }, [router]);

  return (
    <AuthGuard>
      <div className="flex h-screen">
        {/* {sidebarOpen && <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)} />} */}
        <div
        // className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-scroll"
        // className={`fixed inset-y-0 left-0 z-50 bg-white shadow-md transform transition-all md:relative md:translate-x-0 ${
        //   sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
        // } md:w-64`}
        >
          {/* <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <h1 className="hidden lg:block  font-bold">TAZOUD</h1>
        </Link> */}
          {/* <SideMenu /> */}
          <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <div
          className="flex-1 bg-[#F7F8FA] overflow-scroll flex flex-col"
          // className="flex flex-col flex-1"
        >
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
