"use client";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import LogoutBtn from "../components/LogoutBtn/LogoutBtn";
import SideBar from "../components/SideBar/SideBar";
import { LayoutInterface } from "../utils/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./dashboardMain.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({ children }: LayoutInterface) {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <AuthGuard>
      <div className="flex h-screen">
        {/* {sidebarOpen && <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)} />} */}
        <div className="hidden md:block">
          <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <div className="flex-1 bg-[#F7F8FA] overflow-scroll flex flex-col">
          <header className="flex justify-between items-center px-4 md:px-6 py-4">
            <h1 className={`text-2xl font-bold  ${styles.dashBoardMainColor}`}>TAZWAD</h1>
            <div className="flex items-center gap-4">
              {/* <button title="Notifications" type="button" onClick={() => router.push("/dashboard/notifications")} className={styles.dashBoardMainColor}>
                <FaBell size={24} />
              </button> */}
              <LogoutBtn />
              <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <HiDotsVertical size={24} />
              </button>
            </div>
          </header>
          <main className="flex-2 px-4 md:px-6 w-[100%] ">
            <div className={`bg-white ${styles.contentRadius} `}>{children}</div>
            <AnimatePresence>
              {sidebarOpen && (
                <>
                  <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSidebarOpen(false)}
                  />

                  <motion.div
                    key="modal"
                    className="fixed top-1/2 left-1/2 z-50 bg-white p-8 rounded-md h-[55%] w-[90%] max-w-[500px] overflow-hidden overflow-y-scroll"
                    initial={{ opacity: 0, scale: 0.8, x: "-100%", y: "100%" }}
                    animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                    exit={{ opacity: 0, scale: 0.8, x: "-100%", y: "100%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full w-full flex items-center justify-center flex-col gap-6 font-semibold text-lg text-black/70">
                      <Link
                        href="/dashboard"
                        onClick={() => {
                          router.push("/dashboard");
                          setSidebarOpen(false);
                        }}
                        className={pathname === "/dashboard" ? `${styles.activeMenuItem} py-2 w-full text-center` : ""}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/profile"
                        onClick={() => {
                          router.push("/dashboard/profile");
                          setSidebarOpen(false);
                        }}
                        className={pathname === "/dashboard/profile" ? `${styles.activeMenuItem} py-2 w-full text-center` : ""}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/dashboard/products"
                        onClick={() => {
                          router.push("/dashboard/products");
                          setSidebarOpen(false);
                        }}
                        className={pathname === "/dashboard/products" ? `${styles.activeMenuItem} py-2 w-full text-center` : ""}
                      >
                        Products
                      </Link>
                      <Link
                        href="/dashboard/orders/order-list"
                        onClick={() => {
                          router.push("/dashboard/orders/order-list");
                          setSidebarOpen(false);
                        }}
                        className={pathname === "/dashboard/orders/order-list" ? `${styles.activeMenuItem} py-2 w-full text-center` : ""}
                      >
                        Order List
                      </Link>
                      <Link
                        href="/dashboard/staff"
                        onClick={() => {
                          router.push("/dashboard/staff");
                          setSidebarOpen(false);
                        }}
                        className={pathname === "/dashboard/staff" ? `${styles.activeMenuItem} py-2 w-full text-center ` : ""}
                      >
                        Staff
                      </Link>
                      <Link
                        href="/dashboard/roles"
                        onClick={() => {
                          router.push("/dashboard/roles");
                          setSidebarOpen(false);
                        }}
                        className={pathname === "/dashboard/roles" ? `${styles.activeMenuItem} py-2 w-full text-center` : ""}
                      >
                        Roles
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
