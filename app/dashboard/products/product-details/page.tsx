import ProductDetailBody from "@/app/components/Products/ProductDetailBody";
import ProductDetailCard from "@/app/components/Products/ProductDetailCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "Product Details",
};

function productDetailsPage() {
  return (
    <div className="w-full bg-slate-100 p-4 rounded-lg ">
      <div className="flex items-start justify-between gap-2 flex-col lg:flex-row p-8 ">
        <h1 className="text-2xl font-bold">Product Details</h1>
      </div>

      <div className="flex justify-center items-center w-full bg-white p-8 border border-gray">
        <ProductDetailCard />
      </div>

      <div className=" mt-12 w-full bg-white p-8 border border-gray">
        <ProductDetailBody />
      </div>
    </div>
  );
}

export default productDetailsPage;
