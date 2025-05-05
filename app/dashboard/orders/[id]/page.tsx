import OrderDetails from "@/app/components/Orders/OrderDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Details",
  description: "Order Details",
};

async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <OrderDetails id={id} />;
}


export default OrderDetailsPage;
