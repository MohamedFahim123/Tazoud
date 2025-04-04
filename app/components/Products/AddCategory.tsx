import { getBrands } from "@/app/rtk/slices/brandsSlice";
import { getCategories, getSingleCategory } from "@/app/rtk/slices/categoriesSlice";
import { ProductTypes } from "@/app/rtk/slices/ProductSlice";
import { getUnitsMeasures } from "@/app/rtk/slices/unitsMeasuresSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { FormikErrors, FormikHandlers, FormikTouched, FormikValues } from "formik";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelectOptions from "../CustomSelectOptions/CustomSelectOptions";

interface AddCategoryProps {
  formValues: FormikValues;
  formErrors: FormikErrors<ProductTypes>;
  touched: FormikTouched<ProductTypes>;
  formChangeEvent: FormikHandlers["handleChange"];
}
export default function AddCategory({ formValues, touched, formChangeEvent, formErrors }: AddCategoryProps) {
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
          <CustomSelectOptions
            hasError={Boolean(formErrors.category_id && touched.category_id)}
            onChange={formChangeEvent}
            value={formValues.category_id}
            id="category_id"
            label="Category"
            options={categories}
          />
          {touched.category_id && formErrors.category_id && <div className="text-red-500 text-sm">{formErrors.category_id}</div>}{" "}
        </div>
        <div className="md:w-[48%] w-full">
          <CustomSelectOptions
            id="sub_category_id"
            onChange={formChangeEvent}
            value={formValues.sub_category_id}
            label="Sub Category"
            hasError={Boolean(formErrors.sub_category_id && touched.sub_category_id)}
            options={singleCategory?.subcategories || []}
          />
          {touched.sub_category_id && formErrors.sub_category_id && <div className="text-red-500 text-sm">{formErrors.sub_category_id}</div>}{" "}
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between mb-3">
        <div className="md:w-[48%] w-full">
          <CustomSelectOptions
            onChange={formChangeEvent}
            value={formValues.brand_id}
            id="brand_id"
            hasError={Boolean(formErrors.brand_id && touched.brand_id)}
            label="Brands"
            options={brands}
          />
          {touched.brand_id && formErrors.brand_id && <div className="text-red-500 text-sm">{formErrors.brand_id}</div>}{" "}
        </div>
        <div className="md:w-[48%] w-full">
          <CustomSelectOptions
            id="unit_of_measure_id"
            value={formValues.unit_of_measure_id}
            onChange={formChangeEvent}
            hasError={Boolean(formErrors.unit_of_measure_id && touched.unit_of_measure_id)}
            label="Units of Measure"
            options={units}
          />
          {touched.unit_of_measure_id && formErrors.unit_of_measure_id && <div className="text-red-500 text-sm">{formErrors.unit_of_measure_id}</div>}{" "}
        </div>
      </div>
    </div>
  );
}
