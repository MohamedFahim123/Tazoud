"use client";

import { getProfile, updateProfile } from "@/app/rtk/slices/profileSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CustomInput from "../CustomInput/CustomInput";
import Loading from "../Loading/Loading";

export default function UpdateProfile() {
  const dispatch = useDispatch<AppDispatch>();
  const { profile, loading, updating } = useSelector((state: RootState) => state.profile);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: profile?.user.name || "",
      phone: profile?.user.phone || "",
      image: null as File | null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone number is required"),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(updateProfile(values)).unwrap();
        await dispatch(getProfile());
        toast.success("Profile updated successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        toast.error((error as AxiosError<{ message: string }>).response?.data?.message || "Failed to update profile");
      }
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue("image", file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-100 py-6 px-4 rounded-md">
            <div className="flex-shrink-0 bg-primary rounded-full h-[160px] w-[160px] flex items-center justify-center">
              <Image
                className="rounded-full mt-1 mx-auto"
                src={previewImage || profile?.user.image || "/images/profile.png"}
                alt="avatar"
                width={150}
                height={150}
                priority
                placeholder="blur"
                blurDataURL="/images/profile.png"
              />
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2 text-sm" />
          </div>
          <div className="flex items-left justify-center flex-col gap-3 py-6 px-4 mt-4">
            <h3 className="text-lg font-bold">Personal Information</h3>
            <div className="flex items-center justify-start gap-2  ">
              <span className="text-primary">Full Name :</span>
              <CustomInput name="name" id="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
              {formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
            </div>
            <div className="flex items-center justify-start gap-2  ">
              <span className="text-primary">Phone:</span>
              <CustomInput name="phone" id="phone" type="text" onChange={formik.handleChange} value={formik.values.phone} />
              {formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}
            </div>
            <button type="submit" disabled={updating} className="bg-green text-white font-bold py-2 px-4 rounded hover:bg-green/75 disabled:bg-gray-400">
              {updating ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
