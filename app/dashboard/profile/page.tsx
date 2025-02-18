import Profile from "@/app/components/Profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your Profile",
};

export default function ProfilePage() {
  return (
    <div className="p-10">
      <div>
        <h3 className="text-2xl font-bold">Setting</h3>
        <p className="font-normal text-gray-500 mt-3">
          Home / <span className="text-primary">Personal Information</span>
        </p>
      </div>
      <Profile />
    </div>
  );
}
