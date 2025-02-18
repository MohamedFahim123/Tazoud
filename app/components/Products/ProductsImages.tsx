import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

export default function ProductsImages() {
  return (
    <div className="max-w-full mt-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray-200">
      <div className="p-3 bg-slate-100  rounded-lg border relative">
        <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
          <FiEdit
            size={25}
            className="cursor-pointer hover:text-primary my-4 "
          />
          <MdOutlineCancel
            size={25}
            className="cursor-pointer hover:text-primary "
          />
        </div>
        <Image
          src={"/images/product-img1.png"}
          alt="image"
          width={200}
          height={200}
        />
      </div>

      <div className="p-3 bg-slate-100  rounded-lg border relative">
        <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
          <FiEdit
            size={25}
            className="cursor-pointer hover:text-primary my-4 "
          />
          <MdOutlineCancel
            size={25}
            className="cursor-pointer hover:text-primary "
          />
        </div>
        <Image
          src={"/images/product-img1.png"}
          alt="image"
          width={200}
          height={200}
        />
      </div>

      <div className="p-3 bg-slate-100  rounded-lg border relative">
        <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
          <FiEdit
            size={25}
            className="cursor-pointer hover:text-primary my-4 "
          />
          <MdOutlineCancel
            size={25}
            className="cursor-pointer hover:text-primary "
          />
        </div>
        <Image
          src={"/images/product-img1.png"}
          alt="image"
          width={200}
          height={200}
        />
      </div>

      <div className="p-3 bg-slate-100  rounded-lg border relative">
        <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
          <FiEdit
            size={25}
            className="cursor-pointer hover:text-primary my-4 "
          />
          <MdOutlineCancel
            size={25}
            className="cursor-pointer hover:text-primary "
          />
        </div>
        <Image
          src={"/images/product-img1.png"}
          alt="image"
          width={200}
          height={200}
        />
      </div>

      <div className="p-3 bg-slate-100  rounded-lg border">
        <label className="flex sm:flex-col items-center justify-center max:w-48 h-48 border-2 border-dashed  rounded-lg cursor-pointer hover:border-primary hover:text-primary">
          <input type="file" className="hidden" />
          <FaImage className="text-4xl mb-2" />
          <span className="text-sm">{"Image Upload"}</span>
        </label>
      </div>
    </div>
  );
}
