"use client";

// import { filterProducts } from "@/app/rtk/slices/ProductSlice";
// import { AppDispatch } from "@/app/rtk/store";
import { useState } from "react";
// import { useDispatch } from "react-redux";

const ProductFilter = ({ onFilterChange }: { onFilterChange: (filters: Record<string, string>) => void }) => {
  const [filters, setFilters] = useState({
    code: "",
    title: "",
    category: "",
    sub_category: "",
    status: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    setFilters({
      code: "",
      title: "",
      category: "",
      sub_category: "",
      status: "",
    });
    onFilterChange({
      code: "",
      title: "",
      category: "",
      sub_category: "",
      status: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input name="code" value={filters.code} onChange={handleInputChange} placeholder="Code" />
      <input name="title" value={filters.title} onChange={handleInputChange} placeholder="Title" />
      <input name="category" value={filters.category} onChange={handleInputChange} placeholder="Category ID" />
      <input name="sub_category" value={filters.sub_category} onChange={handleInputChange} placeholder="Sub-category ID" />
      <input name="status" value={filters.status} onChange={handleInputChange} placeholder="Status (active/inactive)" />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Filter
        </button>
        <button type="button" onClick={handleReset} className="bg-gray text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </form>
  );
};

export default ProductFilter;
