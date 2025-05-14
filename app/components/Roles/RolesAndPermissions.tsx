"use client";

import { filterRoles, getAllRoles } from "@/app/rtk/slices/rolesSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import AddRole from "./AddRole";
import RolesCard from "./RolesCard";

const RolesAndPermissions = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { roles } = useSelector((state: RootState) => state.roles);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (filterText) {
        dispatch(filterRoles({ name: filterText }));
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [filterText, dispatch]);

  useEffect(() => {
    if (filterText) return;
    dispatch(getAllRoles());
  }, [dispatch, filterText]);

  const filteredRoles = Array.isArray(roles) && roles.filter((role) => role?.name?.toLowerCase()?.includes(filterText?.toLowerCase()));

  return (
    <div className="container relative py-8 px-6 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Roles & Permissions</h1>
        <button className="bg-primary px-8 py-3 text-white rounded-md hover:bg-opacity-90" onClick={() => setIsOpen(true)}>
          Add Role
        </button>
      </div>

      <div className="bg-slate-100 py-6 px-4 rounded-md flex items-center justify-between w-full">
        <span className="w-[300px] bg-white flex items-center rounded-md">
          <CgSearch className="text-gray w-1/6" size={25} />
          <input
            className="w-full py-2 border-0 outline-none"
            type="text"
            name="filter"
            id="filter"
            placeholder="Search"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(filterRoles({ name: filterText }));
              }
            }}
          />
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {filteredRoles && filteredRoles.length > 0 ? (
          filteredRoles.map((role) => (
            <RolesCard
              key={role.id}
              role={role}
              isOpen={selectedRoleId === role.id}
              openRole={() => setSelectedRoleId(role.id)}
              closeRole={() => setSelectedRoleId(null)}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">Not Found</div>
        )}
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
              className="fixed top-1/2 left-1/2 z-50 bg-white p-8 rounded-md h-[90%] w-[600px] overflow-hidden overflow-y-scroll"
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
