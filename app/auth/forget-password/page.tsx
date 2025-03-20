import React from "react";
import styles from "../authStyles.module.css";
import CustomInput from "@/app/components/CustomInput/CustomInput";

export default function ForgetPasswordPage() {
  return (
    <>
      <h1 className={`${styles.heading} text-primary text-center mb-3 text-2xl font-bol`}>Forget Password</h1>
      <form action="" className=" flex flex-col gap-5 bg-white">
        <CustomInput type="email" id="email" label="E-mail" placeHolder="Enter Your Email" />
        <button type="button" className="bg-primary text-white w-100 font-bold text-lg py-3 mb-5 hover:bg-primary/75 transition duration-300 ease-linear">
          Submit
        </button>
        <button
          type="button"
          className="bg-white text-primary w-100 border border-primary font-bold text-lg py-3 hover:bg-primary hover:text-white transition duration-300 ease-linear"
        >
          Login
        </button>
      </form>
    </>
  );
}
