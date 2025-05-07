import ResetPasswordForm from "@/app/components/ResetPassword/ResetPasswprdForm";

export const metadata = {
  title: "Reset Password",
  description: "Reset Password",
};
export default function ResetPasswordPage() {
  return (
    <>
      <h1 className={`text-primary text-center mb-3 text-3xl font-bold`}>Reset Password</h1>
      <ResetPasswordForm />
    </>
  );
}
