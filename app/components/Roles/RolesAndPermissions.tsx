"use client";

import { useState } from "react";
import RolesCard from "./RolesCard";
import RolesDetailsCard from "./RolesDetailsCard";

const RolesAndPermissions = () => {
  const [tab, setTab] = useState("all-roles");
  const [open, setOpen] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    setTab(tab);
  };
  return (
    <div className="container relative py-8 px-6 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Roles & Permissions</h1>
        <button className="bg-primary hover:bg-opacity-90">Add Role</button>
      </div>

      <div className="bg-slate-100 py-6 px-4 rounded-md flex items-center justify-between  w-full ">
        <ul className="flex gap-3">
          <li
            onClick={() => handleTabChange("all-roles")}
            className={`${
              tab === "all-roles" ? "text-white bg-primary border-primary" : ""
            } flex items-center justify-start gap-2 border-solid border-[1px] border-gray_dark text-black/75 font-bold  hover:border-primary hover:text-white hover:bg-primary active:text-white active:bg-primary active:border-primary rounded-md px-6 py-2 cursor-pointer `}
          >
            <span className="">All</span>
          </li>

          <li
            onClick={() => handleTabChange("default-roles")}
            className={`${
              tab === "default-roles" ? "text-white bg-primary border-primary" : ""
            } flex items-center justify-start gap-2 border-solid border-[1px] border-gray_dark text-black/75 font-bold hover:border-primary hover:text-white hover:bg-primary active:text-white active:bg-primary rounded-md px-6 py-2 cursor-pointer`}
          >
            <span className="">Default </span>
          </li>

          <li
            onClick={() => handleTabChange("custom-roles")}
            className={` ${
              tab === "custom-roles" ? "text-white bg-primary border-primary" : ""
            } flex items-center justify-start gap-2 border-solid border-[1px] border-gray_dark text-black/75 font-bold hover:border-primary hover:text-white hover:bg-primary active:text-white active:bg-primary active:border-primary rounded-md px-6 py-2 cursor-pointer `}
          >
            <span className="">Custom </span>
          </li>
        </ul>

        <div className="">filter</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        <RolesCard setOpen={setOpen} />
        <RolesCard setOpen={setOpen} />
        <RolesCard setOpen={setOpen} />
        <RolesCard setOpen={setOpen} />
        <RolesCard setOpen={setOpen} />
      </div>

      {open && <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50" onClick={() => setOpen(false)}></div>}
      {open && <RolesDetailsCard />}
    </div>
  );
};

export default RolesAndPermissions;
