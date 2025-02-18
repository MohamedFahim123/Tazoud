import UpdateProfile from "@/app/components/Profile/UpdateProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Profile",
  description: "Update Your Profile",
};

export default function UpdateProfilePage() {
  return (
    <div className="p-10 rounded-xl h-full">
      <UpdateProfile />
    </div>
  );
}
