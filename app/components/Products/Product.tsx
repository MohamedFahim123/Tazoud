"use client";

import { getProducts } from "@/app/rtk/slices/ProductSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import ProductCard from "./ProductCard";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-50 py-6">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>

          {products && products.length > 0 ? (
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 lg:gap-6 p-6">
              {products?.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          ) : (
            <p className="text-2xl h-96 flex items-center justify-center text-gray-600">No products available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
