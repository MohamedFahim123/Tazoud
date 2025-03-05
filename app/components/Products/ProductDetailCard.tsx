"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ProductDetailCard = () => {
  const [quantity, setQuantity] = useState(1);
  const images = ["/images/product-img1.png", "/images/p-update-img.png"];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-row md:flex-col flex-wrap gap-2">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Product Thumbnail"
                width={100}
                height={100}
                className={`w-25 h-20 border p-1 cursor-pointer ${selectedImage === img ? "border-primary" : "border-gray"}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <Image src={selectedImage} alt="Product" width={100} height={100} className="w-80 max-h-96 object-cover" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Atu Body Couture Bow Front Dress</h1>
          <p className="text-gray-500">Sold 21 Products in last 10 Hours</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="line-through text-gray-400">$155</span>
            <span className="text-lg font-semibold text-primary">$135</span>
            <span className="text-yellow">★★★★★ (33)</span>
          </div>
          <p className="text-green mt-1">45 In stock</p>
          <p className="text-black/60 mt-2">To achieve this, it would be necessary to have uniform grammar pronunciation...</p>

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
            <p>
              <strong>SKU:</strong> KE-91039
            </p>
            <p>
              <strong>Category:</strong> Cloth
            </p>
            <p>
              <strong>Tags:</strong> Grown Dress, Dress, Party Dress
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
    </div>
  );
};

export default ProductDetailCard;
