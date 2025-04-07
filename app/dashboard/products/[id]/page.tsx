import ProductDetails from "@/app/components/Products/ProductDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "Product Details",
};

async function productDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ProductDetails id={id} />;
}

export default productDetailsPage;
