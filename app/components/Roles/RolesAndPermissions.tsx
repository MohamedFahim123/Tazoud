"use client";

import { getAllRoles } from "@/app/rtk/slices/rolesSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RolesCard from "./RolesCard";
import { CgSearch } from "react-icons/cg";
import AddRole from "./AddRole";
import { AnimatePresence, motion } from "framer-motion";

const RolesAndPermissions = () => {
  //   const [tab, setTab] = useState("all-roles");
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { roles } = useSelector((state: RootState) => state.roles);

  //   const handleTabChange = (tab: string) => {
  //     setTab(tab);
  //   };

  useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  return (
    <div className="container relative py-8 px-6 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Roles & Permissions</h1>
        <button className="bg-primary px-8 py-3 text-white rounded-md hover:bg-opacity-90" onClick={() => setIsOpen(true)}>
          Add Role
        </button>
      </div>

      <div className="bg-slate-100 py-6 px-4 rounded-md flex items-center justify-between w-full">
        {/* <ul className="flex gap-3">
          {["all-roles", "default-roles", "custom-roles"].map((item) => (
            <li
              key={item}
              onClick={() => handleTabChange(item)}
              className={`${
                tab === item ? "text-white bg-primary border-primary" : ""
              } flex items-center justify-start gap-2 border border-gray_dark text-black/75 font-bold hover:border-primary hover:text-white hover:bg-primary active:text-white active:bg-primary rounded-md px-6 py-2 cursor-pointer`}
            >
              <span>{item === "all-roles" ? "All" : item === "default-roles" ? "Default" : "Custom"}</span>
            </li>
          ))}
        </ul> */}

        <span className="w-[300px] bg-white flex items-center  rounded-md ">
          <CgSearch className="text-gray w-1/6" size={25} />
          <input className="w-full py-2 border-0 outline-none" type="search" name="filter" id="filter" placeholder="Search" />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {roles.map((role) => (
          <RolesCard
            key={role.id}
            role={role}
            isOpen={selectedRoleId === role.id}
            openRole={() => setSelectedRoleId(role.id)}
            closeRole={() => setSelectedRoleId(null)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="modal"
              className="fixed top-1/2 left-1/2 z-50 bg-white p-8 rounded-md h-[90%] w-[600px] overflow-hidden overflow-y-scroll "
              initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <AddRole />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RolesAndPermissions;
