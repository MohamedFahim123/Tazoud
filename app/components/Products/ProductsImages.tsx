"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

export default function ProductsImages() {
  const [images, setImages] = useState<string[]>([
    "/images/product-img1.png",
    "/images/product-img1.png",
    "/images/product-img1.png",
    "/images/product-img1.png",
    "/images/product-img1.png",
    "/images/product-img1.png",
  ]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(e.target.files[0]);
      setImages(newImages);
    }
  };

  const handleDelete = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray-200">
      {images.map((src, index) => (
        <div key={index} className="p-3 bg-slate-100 rounded-lg border relative">
          <div className="absolute top-0 right-0 flex gap-2 p-2">
            <label htmlFor={`file-input-${index}`} className="cursor-pointer">
              <div className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                <FiEdit className=" text-white" size={20} />
              </div>
            </label>
            <input type="file" id={`file-input-${index}`} className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, index)} />
            <div className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
              <MdOutlineCancel size={20} className="cursor-pointer text-white" onClick={() => handleDelete(index)} />
            </div>
          </div>
          <div className="h-[200px] w-full overflow-hidden">
            <Image src={src} width={200} height={200} alt="product image" priority placeholder="blur" blurDataURL="/images/profile.png" />
          </div>
        </div>
      ))}

      <div className="p-3 bg-slate-100 rounded-lg border">
        <label className="flex sm:flex-col items-center justify-center w-full h-[200px] border-2 border-dashed rounded-lg cursor-pointer hover:border-primary hover:text-primary">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImages([...images, URL.createObjectURL(e.target.files[0])]);
              }
            }}
          />
          <FaImage className="text-4xl mb-2" />
          <span className="text-sm">Image Upload</span>
        </label>
      </div>
    </div>
  );
}
