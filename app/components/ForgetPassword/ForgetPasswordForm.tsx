"use client";

import { forgetPassword } from "@/app/rtk/slices/authSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { forgetPasswordSchema } from "@/app/validation/AuthSchema";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomInput from "../CustomInput/CustomInput";

const ForgetPasswordForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values: { email: string }) => {
    try {
      const res = await dispatch(forgetPassword(values.email)).unwrap();
      toast.success(res.message || "Password reset link sent successfully");
    } catch (error) {
      toast.error(typeof error === "string" ? error : "Something went wrong.");
    } finally {
      router.push("/auth/reset-password");
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={forgetPasswordSchema} onSubmit={handleSubmit}>
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="flex flex-col">
            <CustomInput
              name="email"
              type="email"
              id="email"
              label="E-mail"
              placeHolder="Enter Your Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              hasError={touched.email && errors.email ? true : false}
            />

            {errors.email && touched.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <button
              type="submit"
              className={`bg-primary text-white font-bold text-lg py-3 mb-5 mt-5 hover:bg-primary/75 transition duration-300 ease-linear ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </>
    //   <button
    //     type="button"
    //     className="bg-white text-primary w-100 border border-primary font-bold text-lg py-3 hover:bg-primary hover:text-white transition duration-300 ease-linear"
    //   >
    //     Login
    //   </button>
  );
};

export default ForgetPasswordForm;
