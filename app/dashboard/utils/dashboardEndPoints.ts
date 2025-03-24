import { baseUrl } from "@/app/utils/baseUrl";

interface dashboardEndPointsInterface {
  profile: string;
  // logout: string;
  // resetPassword: string;
  // forgetPassword: string;
}

export const dashboardEndPoints: dashboardEndPointsInterface = {
  profile: `${baseUrl}/staff/show-profile`,
  // logout: `${baseUrl}/logout`,
  // resetPassword: `${baseUrl}/reset-password`,
  // forgetPassword: `${baseUrl}/forget-password`,
};
