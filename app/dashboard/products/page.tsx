import ProductCard from "@/app/components/Products/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Your Products",
};

const products = [
  {
    image: "/images/product-img1.png",
    name: "Polka Dots Woman Dress",
    price: 155,
    discountPrice: 135,
  },
  {
    image: "/images/product-img1.png",
    name: "Double Breasted Suit",
    price: 160,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
  {
    image: "/images/product-img1.png",
    name: "Sweater For Women",
    price: 130,
    discountPrice: 120,
  },
];

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
