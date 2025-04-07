import { ProductTypes } from "@/app/rtk/slices/ProductSlice";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  category,
  thumbnail,
  title,
  description,
  status,
  status_translated,
  price,
  price_after_discount,
  stock,
  has_variations,
  code,
}: ProductTypes) {
  const imageSrc: string = typeof thumbnail === "string" ? thumbnail : "/fallback-image.jpg"; // Fallback image if thumbnail is invalid

  return (
    <div key={id} className="bg-white rounded-lg border border-gray shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full bg-primary/5 shadow-sm overflow-hidden">
        <Link href={`/dashboard/products/${id}`}>
          <Image
            src={imageSrc}
            alt={title !== undefined ? title : ""}
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL="/images/profile.png"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        {status ? (
          <div className="absolute top-2 right-2 bg-green text-white text-xs font-bold px-2 py-1 rounded-full">{status_translated}</div>
        ) : (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{status_translated}</div>
        )}
      </div>
      <h5 className="bg-primary text-white py-2 w-full text-center font-bold">{category}</h5>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link href={`/dashboard/products/${id}`}>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 cursor-pointer">{title}</h3>
          </Link>
          {/* <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{status_translated}</span> */}
        </div>

        <p className="text-gray_dark text-sm mb-3 line-clamp-2 ">{description?.slice(0, 30)}.....</p>

        <div className="flex flex-col justify-between gap-3">
          <div className="flex items-center">
            {Number(price_after_discount) && Number(price_after_discount) < Number(price) ? (
              <>
                <span className="text-gray_dark font-bold text-lg line-through">${parseFloat(String(price)).toFixed(2)}</span>
                <span className="text-green font-semibold text-lg ms-2">${parseFloat(String(price_after_discount)).toFixed(2)}</span>
              </>
            ) : (
              <span className="text-green font-semibold text-lg">${parseFloat(String(price)).toFixed(2)}</span>
            )}
          </div>

          <div className={`text-sm text-center w-fit px-2 py-1 rounded-full ${(stock ?? 0) > 0 ? "bg-primary/10 text-primary" : " bg-red-100 text-red-500"}`}>
            Stock: {stock}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          {code && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">code: {code}</span>}
          {has_variations && <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Variations</span>}
        </div>

        <button className="mt-4 w-full bg-primary hover:bg-primary/75 text-white py-2 px-4 rounded-md transition-colors duration-300">Add to Cart</button>
      </div>
    </div>
  );
}
