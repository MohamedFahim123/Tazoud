" use client";

import { ProfileTypes } from "@/app/rtk/slices/profileSlice";
import Image from "next/image";
import Loading from "../Loading/Loading";

export default function ProfileDetails({ profile, loading }: { profile?: ProfileTypes; loading?: boolean }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-100 py-6 px-4 rounded-md">
            <div className="flex-shrink-0 bg-primary rounded-full h-[160px] w-[160px] flex items-center justify-center">
              <Image className="rounded-full mt-1 mx-auto" src={profile?.user?.image || "/images/profile.png"} alt="avatar" width={150} height={150} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-primary ">{profile?.user?.name}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-6 px-4 mt-4">
            <h3 className="text-lg font-bold">Personal Information</h3>
            <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
              <span className="text-primary">Full Name :</span>
              <p>{profile?.user?.name}</p>
            </div>
            <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
              <span className="text-primary">Email:</span>
              <p>{profile?.user?.email}</p>
            </div>
            <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
              <span className="text-primary">Phone:</span>
              <p>{profile?.user?.phone}</p>
            </div>

            <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
              <span className="text-primary">Country:</span>
              <p>{profile?.user?.locale}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
