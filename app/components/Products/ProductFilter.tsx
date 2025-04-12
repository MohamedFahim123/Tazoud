"use client";

import { getBrands } from "@/app/rtk/slices/brandsSlice";
import { getCategories, getSingleCategory } from "@/app/rtk/slices/categoriesSlice";
import { getUnitsMeasures } from "@/app/rtk/slices/unitsMeasuresSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProductFilterProps {
  onFilterChange: (filters: Record<string, string>) => void;
}
const ProductFilter = ({ onFilterChange }: ProductFilterProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { categories, singleCategory } = useSelector((state: RootState) => state.categories);
  const { brands } = useSelector((state: RootState) => state.brands);
  const { units } = useSelector((state: RootState) => state.unitsMeasures);

  const [filters, setFilters] = useState({
    code: "",
    title: "",
    category: "",
    sub_category: "",
    brand: "",
    unit_of_measure: "",
    status: "",
  });

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
    dispatch(getUnitsMeasures());
  }, [dispatch]);

  useEffect(() => {
    if (filters.category) {
      dispatch(getSingleCategory(Number(filters.category)));
    }
  }, [filters.category, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedFilters = Object.fromEntries(Object.entries(filters).filter(([, value]) => value !== ""));
    onFilterChange(cleanedFilters);
  };

  const handleReset = () => {
    const empty = {
      code: "",
      title: "",
      category: "",
      sub_category: "",
      brand: "",
      unit_of_measure: "",
      status: "",
    };
    setFilters(empty);
    onFilterChange({});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-6">
      <input name="code" value={filters.code} onChange={handleInputChange} placeholder="Code" className="border px-2 py-1 rounded" />
      <input name="title" value={filters.title} onChange={handleInputChange} placeholder="Title" className="border px-2 py-1 rounded" />

      <select name="category" value={filters.category} onChange={handleInputChange} className="border px-2 py-1 rounded">
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <select name="sub_category" value={filters.sub_category} onChange={handleInputChange} className="border px-2 py-1 rounded">
        <option value="">All Subcategories</option>
        {singleCategory?.subcategories?.map((sub) => (
          <option key={sub.id} value={sub.id}>
            {sub.name}
          </option>
        ))}
      </select>

      <select name="brand" value={filters.brand} onChange={handleInputChange} className="border px-2 py-1 rounded">
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <select name="unit_of_measure" value={filters.unit_of_measure} onChange={handleInputChange} className="border px-2 py-1 rounded">
        <option value="">All Units</option>
        {units.map((unit) => (
          <option key={unit.id} value={unit.id}>
            {unit.name}
          </option>
        ))}
      </select>

      <select name="status" value={filters.status} onChange={handleInputChange} className="border px-2 py-1 rounded">
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Filter
      </button>
      <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">
        Reset
      </button>
    </form>
  );
};

export default ProductFilter;
