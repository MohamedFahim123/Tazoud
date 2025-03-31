import AddProduct from "@/app/components/Products/AddProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Product",
  description: "Add New Products",
};
export default function AddNewProductsPage() {
  return (
    <div className="w-full bg-gray p-4 rounded-lg">
      <AddProduct />
    </div>
  );
}
