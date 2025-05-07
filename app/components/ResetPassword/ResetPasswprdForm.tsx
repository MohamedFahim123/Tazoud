"use client";

import { resetPassword } from "@/app/rtk/slices/authSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { resetPasswordSchema } from "@/app/validation/AuthSchema";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../CustomInput/CustomInput";

const ResetPasswordForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);

  const initialValues = {
    email: "",
    otp: "",
    password: "",
    password_confirmation: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { email, otp, password, password_confirmation } = values;
    dispatch(resetPassword({ email, otp, password, password_confirmation }));
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md ">
        <Formik initialValues={initialValues} validationSchema={resetPasswordSchema} onSubmit={handleSubmit}>
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form className="flex flex-col gap-2">
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
              <CustomInput
                name="otp"
                type="text"
                id="otp"
                label="OTP"
                placeHolder="Enter 6-digit OTP"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,6}$/.test(value)) {
                    handleChange(e);
                  }
                }}
                onBlur={handleBlur}
                value={values.otp}
                hasError={touched.otp && errors.otp ? true : false}
              />

              {errors.otp && touched.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}

              <CustomInput
                name="password"
                type="password"
                id="password"
                label="New Password"
                placeHolder="Enter New Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                hasError={touched.password && errors.password ? true : false}
              />
              {errors.password && touched.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <CustomInput
                name="password_confirmation"
                type="password"
                id="password_confirmation"
                label="Confirm Password"
                placeHolder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password_confirmation}
                hasError={touched.password_confirmation && errors.password_confirmation ? true : false}
              />
              {errors.password_confirmation && touched.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation}</p>}

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
      </div>
    </div>
  );
};

export default ResetPasswordForm;
