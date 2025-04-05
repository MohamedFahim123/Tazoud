"use client";

import { ProductTypes } from "@/app/rtk/slices/ProductSlice";
import { FormikErrors, FormikHelpers, FormikTouched, FormikValues } from "formik";
import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "react-toastify";

interface ProductThumbnailProps {
  formValues: FormikValues;
  formSetValues: FormikHelpers<ProductTypes>["setFieldValue"];
  formErrors: FormikErrors<ProductTypes>;
  touched: FormikTouched<ProductTypes>;
}
export default function ProductsImages({ formValues, touched, formErrors, formSetValues }: ProductThumbnailProps) {
  const images = formValues.images || [];
  const renderedImages = images.map((src: string) => URL.createObjectURL(src as unknown as File));

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => file);
      const totalImages = newImages.length + images.length;

      if (totalImages > 7) return toast.error("You can upload up to 7 images only");

      formSetValues("images", [...images, ...newImages]);
    }
  };

  const handleEditImage = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const updatedImages = [...images];
      updatedImages[index] = e.target.files[0];
      formSetValues("images", updatedImages);
    }
  };

  const handleDelete = (index: number) => {
    const newImages = images.filter((_: string, i: number) => i !== index);
    formSetValues("images", newImages);
  };

  return (
    <div className="mt-5 p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h5 className="text-lg font-bold max-w-full mb-6">
        Product Images <span className="text-gray_dark text-sm">(You can upload up to 7 images)</span>
        {touched.images && formErrors.images && <span className="text-red-500 font-normal block text-sm">{formErrors.images as string}</span>}
      </h5>

      <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {renderedImages.map((src: string, index: number) => (
          <div key={index} className="p-3 bg-slate-100 rounded-lg border border-gray_dark relative">
            <div className="absolute top-0 right-0 flex gap-2 p-2">
              {/* Edit   */}
              <label htmlFor={`file-input-${index}`} className="cursor-pointer">
                <div className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                  <FiEdit className=" text-white" size={20} />
                </div>
              </label>
              <input type="file" id={`file-input-${index}`} className="hidden" accept="image/*" onChange={(e) => handleEditImage(e, index)} />
              {/* delete  */}
              <div className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                <MdOutlineCancel size={20} className="cursor-pointer text-white" onClick={() => handleDelete(index)} />
              </div>
            </div>
            <div className="h-[200px] w-full overflow-hidden">
              <Image
                src={src}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                alt="product image"
                priority
                placeholder="blur"
                blurDataURL="/images/profile.png"
              />
            </div>
          </div>
        ))}

        <div className="p-3 bg-slate-100 rounded-lg border border-gray_dark">
          <label className="flex sm:flex-col items-center justify-center w-full h-[200px] border-2 border-dashed rounded-lg cursor-pointer hover:border-primary hover:text-primary">
            <input type="file" className="hidden" accept="image/*" multiple onChange={handleImageChange} />
            <FaImage className="text-4xl mb-2" />
            <span className="text-sm">Image Upload</span>
          </label>
        </div>
      </div>
    </div>
  );
}
