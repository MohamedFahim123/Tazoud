import { baseUrl } from "@/app/utils/baseUrl";
import { DATAURLSINTERFACE } from "./interfaces";
import Cookies from "js-cookie";

export const token = Cookies.get("TAZOUD_TOKEN");

export const dataURLS: DATAURLSINTERFACE = {
  jobs: `${baseUrl}/jobs`,
};
