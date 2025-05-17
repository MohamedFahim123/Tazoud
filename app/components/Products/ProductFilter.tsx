"use client";

import { getBrands } from "@/app/rtk/slices/brandsSlice";
import { getCategories, getSingleCategory } from "@/app/rtk/slices/categoriesSlice";
import { getUnitsMeasures } from "@/app/rtk/slices/unitsMeasuresSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelectOptions from "../CustomSelectOptions/CustomSelectOptions";
import CustomInput from "../CustomInput/CustomInput";

interface Filters {
  code: string;
  title: string;
  category: string;
  sub_category: string;
  brand: string;
  unit_of_measure: string;
  status: string;
}

interface ProductFilterProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const ProductFilter = ({ filters, setFilters }: ProductFilterProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, singleCategory } = useSelector((state: RootState) => state.categories);
  const { brands } = useSelector((state: RootState) => state.brands);
  const { units } = useSelector((state: RootState) => state.unitsMeasures);

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
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFilters({
      code: "",
      title: "",
      category: "",
      sub_category: "",
      brand: "",
      unit_of_measure: "",
      status: "",
    });
  };

  return (
    <form className="flex flex-wrap gap-3 items-end mb-6" onSubmit={(e) => e.preventDefault()}>
      <CustomInput name="code" value={filters.code} onChange={handleInputChange} placeHolder="Code" className="max-w-[180px] py-1" type="text" />

      <CustomInput name="title" value={filters.title} onChange={handleInputChange} placeHolder="Title" className="max-w-[180px] py-1" type="text" />

      <CustomSelectOptions
        id="category"
        label="Category"
        value={filters.category}
        onChange={handleInputChange}
        options={categories.map((cat) => ({ id: cat.id, name: cat.name }))}
        className="max-w-[180px] py-1"
      />

      <CustomSelectOptions
        id="sub_category"
        label="Sub Category"
        value={filters.sub_category}
        onChange={handleInputChange}
        options={singleCategory?.subcategories?.map((sub) => ({ id: sub.id, name: sub.name })) || []}
        className="max-w-[180px] py-1"
      />

      <CustomSelectOptions
        id="brand"
        label="Brand"
        value={filters.brand}
        onChange={handleInputChange}
        options={brands.map((b) => ({ id: b.id, name: b.name }))}
        className="max-w-[180px] py-1"
      />

      <CustomSelectOptions
        id="unit_of_measure"
        label="Unit"
        value={filters.unit_of_measure}
        onChange={handleInputChange}
        options={units.map((u) => ({ id: u.id, name: u.name }))}
        className="max-w-[180px] py-1"
      />

      <CustomSelectOptions
        id="status"
        label="Status"
        value={filters.status}
        onChange={handleInputChange}
        options={[
          { id: 1, name: "active" },
          { id: 2, name: "deactive" },
        ]}
        className="max-w-[180px] py-1"
      />

      <button type="button" onClick={handleReset} className="bg-gray_dark text-white px-4 py-1 rounded">
        Reset
      </button>
    </form>
  );
};

export default ProductFilter;
