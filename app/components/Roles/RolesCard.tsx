"use client";

import { Role } from "@/app/rtk/slices/rolesSlice";
import { BiEdit } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import RolesDetailsCard from "./RolesDetailsCard";
import { AnimatePresence, motion } from "framer-motion";

const RolesCard = ({ role, isOpen, openRole, closeRole }: { role: Role; isOpen: boolean; openRole: () => void; closeRole: () => void }) => {
  return (
    <div className="border border-gray rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-lg text-primary cursor-pointer" onClick={openRole}>
            {role.name}
          </h3>
        </div>
        <div className="flex gap-2">
          <BiEdit className="h-4 w-4 cursor-pointer text-primary" />
          <BsTrash2 className="h-4 w-4 cursor-pointer text-red-500" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeRole}
            />

            <motion.div
              key="modal"
              className="fixed top-1/2 left-1/2 z-50 bg-white p-8 rounded-md h-[90%] w-[600px] overflow-hidden overflow-y-scroll "
              initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <RolesDetailsCard roleId={role.id} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RolesCard;
