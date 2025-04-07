import Product from "@/app/components/Products/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Your Products",
};

export default function ProductsPage() {
  return (
    <Product />
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
    //   {products?.map((product, index) => (
    //     <ProductCard key={index} {...product} />
    //   ))}
    // </div>
  );
}
