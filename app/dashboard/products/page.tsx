import Product from "@/app/components/Products/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Your Products",
};

export default function ProductsPage() {
  return <Product />;
}
