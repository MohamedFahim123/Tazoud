import React from "react";
import ForgetPasswordForm from "@/app/components/ForgetPassword/ForgetPasswordForm";

export const metadata = {
  title: "Forget Password",
  description: "Forget Password",
};
export default function ForgetPasswordPage() {
  return (
    <>
      <h1 className={`text-primary text-center mb-3 text-3xl font-bold`}>Forget Password</h1>
      <ForgetPasswordForm />
    </>
  );
}
