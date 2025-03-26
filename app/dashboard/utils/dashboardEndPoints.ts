import { baseUrl } from "@/app/utils/baseUrl";

interface dashboardEndPointsInterface {
  profile: string;
  updateProfile: string;
}

export const dashboardEndPoints: dashboardEndPointsInterface = {
  profile: `${baseUrl}/staff/show-profile?t=${new Date().getTime()}`,
  updateProfile: `${baseUrl}/staff/update-profile?t=${new Date().getTime()}`,
};
