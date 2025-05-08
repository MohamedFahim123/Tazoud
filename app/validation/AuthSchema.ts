import * as Yup from "yup";

export const resetPasswordSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be 6 digits"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
    )
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const forgetPasswordSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email Is Required"),
  password: Yup.string().min(6, "Password Must Be At Least 6 Characters").required("Password Is Required"),
});
