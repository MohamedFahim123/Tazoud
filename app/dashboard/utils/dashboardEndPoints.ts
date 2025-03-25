import { baseUrl } from "@/app/utils/baseUrl";

interface dashboardEndPointsInterface {
  profile: string;
  updateProfile: string;
  // logout: string;
  // resetPassword: string;
  // forgetPassword: string;
}

export const dashboardEndPoints: dashboardEndPointsInterface = {
  profile: `${baseUrl}/staff/show-profile`,
  updateProfile: `${baseUrl}/staff//update-profile`,
};
