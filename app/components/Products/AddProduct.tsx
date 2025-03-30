"use client";

import { useState } from "react";
import AddCategory from "./AddCategory";
import AddSpecification from "./AddSpecification";
import ProductInputsInfo from "./ProductInputsInfo";
import ProductsImages from "./ProductsImages";
import ProductVariation from "./ProductVariation";

export default function AddProduct() {
  const [hasVariation, setHasVariation] = useState<boolean>(false);
  return (
    <>
      <div className="w-full">
        <ProductInputsInfo setHasVariation={setHasVariation} hasVariation={hasVariation} />
        <AddCategory />
        {hasVariation ? <ProductVariation /> : <AddSpecification />}
      </div>
      <ProductsImages />

      <div className="flex items-center justify-end gap-4 mt-7">
        <span className="px-8 py-3 text-white bg-primary cursor-pointer ">Add Product</span>
        <span className="px-8 py-3 text-white bg-red-500 cursor-pointer ">Cancel</span>
      </div>
    </>
  );
}
