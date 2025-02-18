import { baseUrl } from "@/app/utils/baseUrl";

interface authEndPointsInterface {
  login: string;
  logout: string;
  register1: string;
  prevStep: string;
  register2: string;
  register3: string;
  resetPassword: string;
  forgetPassword: string;
}

export const authEndPoints: authEndPointsInterface = {
  login: `${baseUrl}/login`,
  logout: `${baseUrl}/logout`,
  prevStep: `${baseUrl}/pervious-step`,
  register1: `${baseUrl}/register-step-one`,
  register2: `${baseUrl}/register-step-two`,
  register3: `${baseUrl}/register-step-three`,
  resetPassword: `${baseUrl}/reset-password`,
  forgetPassword: `${baseUrl}/forget-password`,
};
