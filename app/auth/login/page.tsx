import CustomInput from "@/app/components/CustomInput/CustomInput";
import styles from "../authStyles.module.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <h1 className={`${styles.heading} text-primary text-center mb-3 text-4xl font-bol`}>Login</h1>
      <p className={`${styles.paragraph} text-center mb-4`}>Welcome, Log into you account</p>
      <form action="" className=" flex flex-col gap-5 bg-white">
        <CustomInput type="email" id="email" label="E-mail" placeHolder="Enter Your Email" />
        <CustomInput type="password" id="password" label="Password" placeHolder="Enter Your Password" />
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center h-5">
            <CustomInput type="checkbox" label="Remember Me" id="remember" />
          </div>
          <Link href={"/auth/forget-password"} className="text-primary font-500 text-sm">
            Forget Password?
          </Link>
        </div>
        <button type="button" className="bg-primary text-white w-100 font-bold text-lg py-3 hover:bg-primary/75 transition duration-300 ease-linear">
          Login
        </button>
      </form>
    </>
  );
}
