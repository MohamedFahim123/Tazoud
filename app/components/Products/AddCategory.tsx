"use client";

import { getBrands } from "@/app/rtk/slices/brandsSlice";
import { getCategories } from "@/app/rtk/slices/categoriesSlice";
import { getUnitsMeasures } from "@/app/rtk/slices/unitsMeasuresSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelectOptions from "../CustomSelectOptions/CustomSelectOptions";

export default function AddCategory() {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.categories);
  const { brands } = useSelector((state: RootState) => state.brands);
  const { units } = useSelector((state: RootState) => state.unitsMeasures);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
    dispatch(getUnitsMeasures());
  }, [dispatch]);

  return (
    <div className="max-h-[500px] p-6 border-[1px]  bg-white rounded-lg shadow-sm  border-gray_dark mb-5">
      <h3 className="text-lg font-bold mb-3"> Organization</h3>
      <form action="" className="">
        <div className="flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <CustomSelectOptions id="category_id" label="Category" options={categories} />
          </div>
          <div className="md:w-[48%] w-full">
            <CustomSelectOptions id="sub_category_id" label="Category" options={categories} />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <CustomSelectOptions id="brand_id" label="Brands" options={brands} />
          </div>
          <div className="md:w-[48%] w-full">
            <CustomSelectOptions id="unit_of_measure_id" label="Units of Measure" options={units} />
          </div>
        </div>
      </form>
    </div>
  );
}
