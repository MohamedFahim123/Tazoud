import AddCategory from "@/app/components/Products/AddCategory";
import AddSpecification from "@/app/components/Products/AddSpecification";
import ProductInputsInfo from "@/app/components/Products/ProductInputsInfo";
import ProductsImages from "@/app/components/Products/ProductsImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Product",
  description: "Add New Products",
};
export default function AddNewProductsPage() {
  
  return (
    <div className="w-full bg-slate-100 p-4 rounded-lg border">
      <div className="flex items-start justify-center gap-2 flex-col lg:flex-row ">
        <ProductInputsInfo />
        <div className="max-w-full lg:max-w-[49%] ">
          <AddCategory />
          <AddSpecification />
        </div>
      </div>
      <ProductsImages />

      <div className="flex items-center justify-end gap-4 mt-7">
        <span className="px-8 py-3 text-white bg-primary cursor-pointer ">Add Product</span>
        <span className="px-8 py-3 text-white bg-red-500 cursor-pointer ">Cancel</span>
      </div>
    </div>
  );
}
