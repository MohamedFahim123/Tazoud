"use client";

import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { loginUser } from "@/app/rtk/slices/authSlice";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  async function loginSubmit(values: { email: string; password: string }) {
    setServerError("");
    try {
      const response = await dispatch(loginUser(values)).unwrap();

      if (response?.data?.token) {
        toast.success("Login successful!", { position: "top-right" });
        router.push("/dashboard");
      } else {
        toast.error("Invalid response from server", { position: "top-right" });
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setServerError(error.message || "Login failed");
      toast.error(error.message, { position: "top-right" });
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: loginSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 bg-white">
      {/* Email Input */}
      <CustomInput
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type="email"
        id="email"
        label="E-mail"
        placeHolder="Enter Your Email"
      />
      {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}

      {/* Password Input */}
      <CustomInput
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
        id="password"
        label="Password"
        placeHolder="Enter Your Password"
      />
      {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}

      {/* Error Message */}
      {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center h-5"></div>
        <Link href="/auth/forget-password" className="text-primary font-500 text-sm">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        disabled={!(formik.dirty && formik.isValid)}
        type="submit"
        className="bg-primary text-white w-full font-bold text-lg py-3 hover:bg-primary/75 transition duration-300 ease-linear"
      >
        {loading ? <FaSpinner className="animate-spin mx-auto" size={20} /> : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
