import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./rtk/Provider/Provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "TAZOUD",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-right" />
        <ReduxProvider>{children}</ReduxProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
