"use client";

import { FormikHelpers, FormikValues } from "formik";
import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FormInputV } from "./AddProduct";

export default function ProductsImages({ formValues, formSetValues }: { formValues: FormikValues; formSetValues: FormikHelpers<FormInputV>["setFieldValue"] }) {
  const images = formValues.images || [];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      formSetValues("images", [...images, ...newImages]);
    }
  };

  const handleEditImage = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(e.target.files[0]);
      formSetValues("images", updatedImages);
    }
  };
  const handleDelete = (index: number) => {
    const newImages = images.filter((_: string, i: number) => i !== index);
    formSetValues("images", newImages);
  };

  return (
    <div className="mt-5 p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h5 className="text-lg font-bold max-w-full mb-4">Product Images</h5>

      <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {images.map((src: string, index: number) => (
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
