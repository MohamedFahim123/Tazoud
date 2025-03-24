" use client";

import { dashboardEndPoints } from "@/app/dashboard/utils/dashboardEndPoints";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function ProfileDetails() {
  const [profileData, setProfileData] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    image?: string;
    locale?: string;
  }>();

  const [error, setError] = useState<string | null>(null);

  const getProfile = async () => {
    try {
      const token = Cookies.get("TAZOUD_TOKEN");
      if (!token) {
        setError("Unauthorized: No token found");
        return;
      }

      const { data } = await axios.get(dashboardEndPoints.profile, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfileData(data.data.user);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Failed to load profile data");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-100 py-6 px-4 rounded-md">
        <div className="flex-shrink-0 bg-primary rounded-full h-[160px] w-[160px] flex items-center justify-center">
          <Image className="rounded-full mt-1 mx-auto" src={profileData?.image || "/images/profile.png"} alt="avatar" width={150} height={150} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-primary ">{profileData?.name}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-6 px-4 mt-4">
        <h3 className="text-lg font-bold">Personal Information</h3>
        <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Full Name :</span>
          <p>{profileData?.name}</p>
        </div>
        <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Email:</span>
          <p>{profileData?.email}</p>
        </div>
        <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Phone:</span>
          <p>{profileData?.phone}</p>
        </div>

        <div className="flex  items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Country:</span>
          <p>{profileData?.locale}</p>
        </div>
      </div>
    </>
  );
}
