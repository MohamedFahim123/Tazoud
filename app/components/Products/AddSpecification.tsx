"use client";

import { ProductTypes } from "@/app/rtk/slices/ProductSlice";
import { FormikErrors, FormikHandlers, FormikTouched, FormikValues } from "formik";
import CustomInput from "../CustomInput/CustomInput";

interface AddSpecificationProps {
  formValues: FormikValues;
  formChangeEvent: FormikHandlers["handleChange"];
  formBlurEvent: FormikHandlers["handleBlur"];
  formErrors: FormikErrors<ProductTypes>;
  touched: FormikTouched<ProductTypes>;
}
export default function AddSpecification({ formValues, touched, formChangeEvent, formBlurEvent, formErrors }: AddSpecificationProps) {
  return (
    <div className=" p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h3 className="text-lg font-bold mb-3">Specification</h3>
      <div className="flex md:flex-row flex-col items-center justify-between mb-3">
        <div className="md:w-[48%] w-full">
          <CustomInput
            type="text"
            onChange={formChangeEvent}
            onBlur={formBlurEvent}
            hasError={Boolean(formErrors.price && touched.price)}
            value={formValues.price}
            id="price"
            label="Price"
            placeHolder="Enter Price"
          />
          {touched.price && formErrors.price && <div className="text-red-500 text-sm">{formErrors.price}</div>}
        </div>
        <div className="md:w-[48%] w-full">
          <CustomInput
            type="text"
            onChange={formChangeEvent}
            value={formValues.price_after_discount}
            hasError={Boolean(formErrors.price_after_discount && touched.price_after_discount)}
            onBlur={formBlurEvent}
            id="price_after_discount"
            label="Discount Price"
            placeHolder="Enter Discount Price"
          />
          {touched.price_after_discount && formErrors.price_after_discount && <div className="text-red-500 text-sm">{formErrors.price_after_discount}</div>}{" "}
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between mb-3">
        <div className="md:w-[48%] w-full">
          <CustomInput
            type="text"
            onChange={formChangeEvent}
            value={formValues.stock}
            onBlur={formBlurEvent}
            hasError={Boolean(formErrors.stock && touched.stock)}
            id="stock"
            label="Stock"
            placeHolder="type"
          />
          {touched.stock && formErrors.stock && <div className="text-red-500 text-sm">{formErrors.stock}</div>}
        </div>
        <div className="md:w-[48%] w-full">
          <CustomInput
            type="text"
            onChange={formChangeEvent}
            value={formValues.code}
            onBlur={formBlurEvent}
            hasError={Boolean(formErrors.code && touched.code)}
            id="code"
            label="code"
            placeHolder="type"
          />
          {touched.code && formErrors.code && <div className="text-red-500 text-sm">{formErrors.code}</div>}
        </div>
      </div>
    </div>
  );
}
