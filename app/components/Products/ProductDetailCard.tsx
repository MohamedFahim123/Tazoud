"use client";

import { ProductTypes } from "@/app/rtk/slices/ProductSlice";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ProductDetailCard = ({ product }: { product: ProductTypes }) => {
  const [quantity, setQuantity] = useState(1);
  const images = [product.thumbnail, ...(product.images || [])];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            src={typeof selectedImage === "string" ? selectedImage : ""}
            alt="Product"
            width={150}
            height={150}
            className="w-full h-full object-cover"
            priority
            placeholder="blur"
            blurDataURL="/images/profile.png"
          />
        </div>

        <div>
          <div className="w-full space-y-2 flex items-center justify-between flex-wrap gap-3">
            <h1 className="text-2xl font-semibold break-words">{product.title_en}</h1>
            <h1 className="text-2xl font-semibold break-words">{product.title_ar}</h1>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="line-through text-gray-400">{product.price}</span>
            <span className="text-lg font-semibold text-primary">{product.price_after_discount}</span>
            <span className="text-yellow">★★★★★ (33)</span>
          </div>
          <p className="text-green mt-1">{product.stock} In stock</p>
          <div className="flex flex-col gap-2 ">
            <p className="text-black/50 mt-2 break-words">{product.description_en}</p>
            <p className="text-black/50 mt-2 break-words">{product.description_ar}</p>
          </div>

          <div className="flex items-center flex-wrap gap-4 mt-4">
            <div className="flex items-center border px-4 py-2 rounded-md">
              <button type="button" onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)} className="px-2 text-primary font-bold ">
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="px-2 text-primary font-bold">
                +
              </button>
            </div>
            <button type="button" className="bg-primary  hover:bg-primary/80 text-white px-6 py-2 rounded-md">
              Add to Cart
            </button>
          </div>

          <div className="mt-6">
            <p className="mb-1">
              <strong className=" me-2">SKU:</strong>
              <span className="text-black/50">{product.code}</span>
            </p>
            <p className="mb-1">
              <strong className=" me-2">Category:</strong>
              <span className="text-black/50">{product.category}</span>
            </p>
            <p className="mb-1">
              <strong className=" me-2">Tags:</strong>
              <span className="text-black/50">{product.sub_category}</span>
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-blue-600 cursor-pointer" />
            <FaTwitter className="text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="text-blue-700 cursor-pointer" />
            <FaInstagram className="text-pink-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex mt-5 flex-row flex-wrap gap-2">
        {images.map((img, index) => (
          <Image
            key={index}
            src={typeof img === "string" ? img : ""}
            alt="Product Thumbnail"
            width={100}
            height={100}
            priority
            placeholder="blur"
            blurDataURL="/images/profile.png"
            className={`w-25 h-20 border p-1 cursor-pointer ${selectedImage === img ? "border-primary" : "border-gray"}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailCard;
