"use client";

import { deleteRole, getSingleRole, Permission, Role } from "@/app/rtk/slices/rolesSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsTrash2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import RolesDetailsCard from "./RolesDetailsCard";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "bg-primary text-white mx-2 px-4 py-2 rounded-md",
    cancelButton: "bg-red-500 text-white mx-2 px-4 py-2 rounded-md",
  },
});

const RolesCard = ({ role, isOpen, openRole, closeRole }: { role: Role; isOpen: boolean; openRole: () => void; closeRole: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { singleRole } = useSelector((state: RootState) => state.roles);
  const [permissions, setPermissions] = useState<Permission[]>([]);

  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await dispatch(deleteRole(role.id)).unwrap();

            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your role has been deleted.",
              icon: "success",
            });

            toast.success("Role deleted successfully");
          } catch (err) {
            toast.error(err as string);
          }
        }
      });
  };

  useEffect(() => {
    if (singleRole?.role?.id === role.id) {
      const permissions = singleRole.permissions?.filter((p) => p.enable) ?? [];
      setPermissions(permissions);
    }
  }, [singleRole, role.id]);

  useEffect(() => {
    dispatch(getSingleRole(role.id.toString()));
  }, [dispatch, role.id]);

  return (
    <div className="border border-gray rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-lg text-primary cursor-pointer" onClick={openRole}>
            {role.name}
          </h3>
        </div>
        <div className="flex gap-2">
          {/* <BiEdit className="h-4 w-4 cursor-pointer text-primary" /> */}
          <BsTrash2 onClick={handleDelete} className="h-6 w-6 cursor-pointer text-red-500 border border-gray p-1 " />
        </div>
      </div>
      <hr className="w-full border-gray" />

      <div className=" p-4 w-full flex flex-wrap gap-2 bg ">
        <p className="text-black/50 text-sm uppercase w-full mb-1">Enabled permissions</p>
        {permissions.slice(0, 6).map((perm, idx) => (
          <span key={idx} className="bg-primary/20 text-primary/90 text-xs font-medium px-2.5 py-0.5 rounded h-6 ">
            {perm.name}
          </span>
        ))}

        {permissions.length > 6 && <span className="bg-primary/20 text-primary/90 text-xs font-medium px-2.5 py-0.5 rounded">+{permissions.length - 6} more</span>}
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
              className="fixed top-1/2 left-1/2 z-50 bg-white p-8 rounded-md h-[90%] w-[90%] max-w-[600px] overflow-hidden overflow-y-scroll"
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
