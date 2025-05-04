"use client";

import { filterProducts, getProducts } from "@/app/rtk/slices/ProductSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { getPermissions } from "@/app/rtk/slices/permissionsSlice";
import { getRoles } from "@/app/rtk/slices/rolesSlice";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);
  const [hasFilters, setHasFilters] = useState(false);
  const { permission } = useSelector((state: RootState) => state.permissions);
  const { roles } = useSelector((state: RootState) => state.roles);

  const handleFilter = (filters: Record<string, string>) => {
    const hasActiveFilters = Object.values(filters).some((value) => value.trim() !== "");
    setHasFilters(hasActiveFilters);
    dispatch(filterProducts(filters));
  };

  useEffect(() => {
    // Only fetch all products if no filters are applied
    if (!hasFilters) {
      dispatch(getProducts());
    }
  }, [dispatch, hasFilters]);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return (
    <div className="bg-gray-50 py-6">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>

          <ProductFilter onFilterChange={handleFilter} />

          {products && products.length > 0 ? (
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 lg:gap-6 p-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          ) : (
            <p className="text-2xl h-96 flex items-center justify-center text-gray-600">{hasFilters ? "No products match your filters." : "No products available."}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
