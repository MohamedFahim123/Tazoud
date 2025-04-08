"use client";

import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailBody from "./ProductDetailBody";
import ProductDetailCard from "./ProductDetailCard";
import { getSingleProduct } from "@/app/rtk/slices/ProductSlice";
import Loading from "../Loading/Loading";

const ProductDetails = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading } = useSelector((state: RootState) => state.products);

  console.log(id);

  useEffect(() => {
    dispatch(getSingleProduct(Number(id)));
  }, [dispatch, id]);

  console.log(product);
  return (
    <div className="w-full bg-slate-100 p-4 rounded-lg ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-start justify-between gap-2 flex-col lg:flex-row p-8 ">
            <h1 className="text-2xl font-bold">Product Details</h1>
          </div>

          <div className="flex justify-center items-center w-full bg-white p-8 border border-gray">{product && <ProductDetailCard product={product} />}</div>

          <div className=" mt-12 w-full bg-white p-8 border border-gray">
            <ProductDetailBody />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
