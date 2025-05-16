"use client";

import { filterProducts, getProducts } from "@/app/rtk/slices/ProductSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import Link from "next/link";

interface Filters {
  code: string;
  title: string;
  category: string;
  sub_category: string;
  brand: string;
  unit_of_measure: string;
  status: string;
}

const emptyFilters: Filters = {
  code: "",
  title: "",
  category: "",
  sub_category: "",
  brand: "",
  unit_of_measure: "",
  status: "",
};

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [debouncedFilters, setDebouncedFilters] = useState<Filters>(emptyFilters);

  // Debounce filters updates
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 500);

    return () => clearTimeout(handler);
  }, [filters]);

  const handleSubmitFilters = useCallback(
    (newFilters: Filters) => {
      const hasActiveFilters = Object.values(newFilters).some((v) => v.trim() !== "");
      if (hasActiveFilters) {
        dispatch(filterProducts(newFilters));
      } else {
        dispatch(getProducts());
      }
    },
    [dispatch]
  );

  // Trigger filter action on debounced filters change
  useEffect(() => {
    handleSubmitFilters(debouncedFilters);
  }, [debouncedFilters, handleSubmitFilters]);

  return (
    <div className="bg-gray-50 py-6">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <Link href="/dashboard/products/add-product" className="bg-primary px-8 py-3 text-white rounded-md hover:bg-opacity-90">
              Add New Product
            </Link>
          </div>

          <ProductFilter filters={filters} setFilters={setFilters} />

          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 lg:gap-6 p-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          ) : (
            <p className="text-2xl h-96 flex items-center justify-center text-gray-600">
              {Object.values(filters).some((v) => v.trim() !== "") ? "No products match your filters." : "No products available."}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
