"use client";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import ChangePassword from "./ChangePassword";
import ProfileDetails from "./ProfileDetails";
import ProfileMethods from "./ProfileMethods";

export default function Profile() {
  const [tab, setTab] = useState("profile-info");

  const handleTabChange = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-center mt-4 gap-6">
      <div className="bg-slate-100 py-6 px-4 rounded-md w-full md:w-64">
        <ul className="flex flex-col gap-6">
          <li
            onClick={() => handleTabChange("profile-info")}
            className={`${
              tab === "profile-info" ? "text-primary border-primary" : ""
            } flex items-center justify-start gap-2 border-solid border-[1px] hover:border-primary hover:text-primary active:text-primary active:border-primary rounded-md px-6 py-2 cursor-pointer `}
          >
            <CgProfile size={20} className="" />
            <span className="">Personal Info</span>
          </li>
          <li
            onClick={() => handleTabChange("payment-method")}
            className={`${
              tab === "payment-method" ? "text-primary border-primary" : ""
            } flex items-center justify-start gap-2 border-solid border-[1px] hover:border-primary hover:text-primary active: active: rounded-md px-6 py-2 cursor-pointer`}
          >
            <MdOutlinePayment size={20} className="" />
            <span className="">Payment Methods</span>
          </li>
          <li
            onClick={() => handleTabChange("change-password")}
            className={` ${
              tab === "change-password" ? "text-primary border-primary" : ""
            } flex items-center justify-start gap-2 border-solid border-[1px] hover:border-primary hover:text-primary active:text-primary active:border-primary rounded-md px-6 py-2 cursor-pointer `}
          >
            <FaUnlockKeyhole size={20} className="" />
            <span className="">Change Password</span>
          </li>
        </ul>
      </div>

      <div className="flex-1 ">
        {tab === "profile-info" ? <ProfileDetails /> : null}
        {tab === "payment-method" ? <ProfileMethods /> : null}
        {tab === "change-password" ? <ChangePassword /> : null}
      </div>
    </div>
  );
}
