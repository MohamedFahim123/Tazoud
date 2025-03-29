import AddCategory from "./AddCategory";
import AddSpecification from "./AddSpecification";
import ProductInputsInfo from "./ProductInputsInfo";
import ProductsImages from "./ProductsImages";

export default function AddProduct() {
  return (
    <>
      <div className="w-full">
        <ProductInputsInfo />
        <AddCategory />
        <AddSpecification />
      </div>
      <ProductsImages />

      <div className="flex items-center justify-end gap-4 mt-7">
        <span className="px-8 py-3 text-white bg-primary cursor-pointer ">Add Product</span>
        <span className="px-8 py-3 text-white bg-red-500 cursor-pointer ">Cancel</span>
      </div>
    </>
  );
}
