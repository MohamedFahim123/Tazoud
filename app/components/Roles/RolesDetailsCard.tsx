"use client";

import { getSingleRole } from "@/app/rtk/slices/rolesSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const RolesDetailsCard = ({ roleId }: { roleId: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { singleRole, loading } = useSelector((state: RootState) => state.roles);

  useEffect(() => {
    if (roleId) dispatch(getSingleRole(roleId.toString()));
  }, [dispatch, roleId]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 rounded-md h-full w-[600px] ">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h3 className="text-2xl font-bold text-black/75">
            Permissions of
            <span className="text-primary mx-2">{singleRole?.role?.name}</span>
          </h3>
          <hr className="my-4 text-gray" />
          <div className="h-[80%] overflow-y-scroll flex flex-col px-5 text-black/75">
            {singleRole?.permissions ? (
              singleRole.permissions.map((perm, idx) => (
                <div key={idx} className="flex items-center justify-between w-full h-10">
                  <span>{idx + 1}</span>
                  <p className="text-black/75 text-sm">{perm.name}</p>
                  <label className="items-center cursor-pointer">
                    <input type="checkbox" checked={perm.enable} readOnly className="sr-only peer" />
                    <div className="relative w-9 h-5 ring-2 ring-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray_dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-black/75 text-sm">No permissions found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RolesDetailsCard;
