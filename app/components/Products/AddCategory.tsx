"use client";

import { FormikErrors, FormikHandlers, FormikValues } from "formik";
import { getBrands } from "@/app/rtk/slices/brandsSlice";
import { getCategories, getSingleCategory } from "@/app/rtk/slices/categoriesSlice";
import { getUnitsMeasures } from "@/app/rtk/slices/unitsMeasuresSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelectOptions from "../CustomSelectOptions/CustomSelectOptions";
import { FormInputV } from "./AddProduct";

export default function AddCategory({
  formValues,
  formChangeEvent,
  formErrors,
}: {
  formValues: FormikValues;
  formChangeEvent: FormikHandlers["handleChange"];
  formErrors: FormikErrors<FormInputV>;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, singleCategory } = useSelector((state: RootState) => state.categories);
  const { brands } = useSelector((state: RootState) => state.brands);
  const { units } = useSelector((state: RootState) => state.unitsMeasures);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
    dispatch(getUnitsMeasures());
  }, [dispatch]);

  const getCurrCategData = useCallback(
    (id: number) => {
      if (id) {
        dispatch(getSingleCategory(id));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getCurrCategData(formValues.category_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues.category_id]);

  return (
    <div className="max-h-[500px] p-6 border-[1px]  bg-white rounded-lg shadow-sm  border-gray_dark mb-5">
      <h3 className="text-lg font-bold mb-3"> Organization</h3>
      <div className="flex md:flex-row flex-col items-center justify-between mb-3">
        <div className="md:w-[48%] w-full">
          <CustomSelectOptions onChange={formChangeEvent} value={formValues.category_id} id="category_id" label="Category" options={categories} />
          {formErrors.category_id && <div className="text-red-500">{formErrors.category_id}</div>}
        </div>
        <div className="md:w-[48%] w-full">
          <CustomSelectOptions
            id="sub_category_id"
            onChange={formChangeEvent}
            value={formValues.sub_category_id}
            label="Sub Category"
            options={singleCategory?.subcategories || []}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between mb-3">
        <div className="md:w-[48%] w-full">
          <CustomSelectOptions onChange={formChangeEvent} value={formValues.brand_id} id="brand_id" label="Brands" options={brands} />
          {formErrors.brand_id && <div className="text-red-500">{formErrors.brand_id}</div>}
        </div>
        <div className="md:w-[48%] w-full">
          <CustomSelectOptions id="unit_of_measure_id" value={formValues.unit_of_measure_id} onChange={formChangeEvent} label="Units of Measure" options={units} />
          {formErrors.unit_of_measure_id && <div className="text-red-500">{formErrors.unit_of_measure_id}</div>}
        </div>
      </div>
    </div>
  );
}
