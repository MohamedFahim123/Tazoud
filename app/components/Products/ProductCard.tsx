import Image from "next/image";

export interface ProductProps {
  image: string;
  name: string;
  price: number;
  discountPrice?: number;
}

export default function ProductCard({
  image,
  name,
  price,
  discountPrice,
}: ProductProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <div className="relative group">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="mx-auto"
        />

        {/* <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <FaHeart className="text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <FaExpand className="text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <FaSyncAlt className="text-gray-600" />
          </button>
        </div> */}
      </div>

      <h3 className="mt-3 text-lg font-medium">{name}</h3>
      <div className="flex items-center gap-2">
        {discountPrice && (
          <span className="text-gray-500 line-through">${price}</span>
        )}
        <span className="text-lg font-bold text-black">
          ${discountPrice || price}
        </span>
      </div>

      <button className="w-full mt-3 py-2 border rounded-md text-center hover:bg-gray-100">
        Add to Cart
      </button>
    </div>
  );
}
