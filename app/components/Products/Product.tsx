"use client";

import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect } from "react";
import { getProducts } from "@/app/rtk/slices/ProductSlice";
import Loading from "../Loading/Loading";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, error, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error == "Unauthenticated") {
      Cookies.remove("TAZOUD_TOKEN");
      toast.error(" You are Unauthenticated to access this page.");
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 1500);
    }
  }, [error]);
  return (
    <div className="bg-gray-50 py-6">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {products?.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
