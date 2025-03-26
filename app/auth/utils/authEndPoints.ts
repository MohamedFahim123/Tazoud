import { baseUrl } from "@/app/utils/baseUrl";

interface authEndPointsInterface {
  login: string;
  logout: string;
  resetPassword: string;
  forgetPassword: string;
}

export const authEndPoints: authEndPointsInterface = {
  login: `${baseUrl}/staff/login`,
  logout: `${baseUrl}/logout`,
  resetPassword: `${baseUrl}/reset-password`,
  forgetPassword: `${baseUrl}/forget-password`,
};
