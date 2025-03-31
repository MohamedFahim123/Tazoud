"use client";

import { useState } from "react";
import AddCategory from "./AddCategory";
import AddSpecification from "./AddSpecification";
import ProductInputsInfo from "./ProductInputsInfo";
import ProductsImages from "./ProductsImages";
import ProductVariation from "./ProductVariation";
import { useFormik } from "formik";

export interface Variation {
  id: number;
  name_ar: string;
  name_en: string;
  price: number;
  price_after_discount: number;
  value_ar: string;
  value_en: string;
  stock: number;
  code: string;
  thumbnail: File | null;
}

export interface FormInputV {
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  category_id: string;
  sub_category_id: string;
  brand_id: string;
  unit_of_measure_id: string;
  images: File[] | [];
  has_variation: boolean;
  variations: Variation[];
  price: number;
  price_after_discount: number;
  stock: number;
  code: string;
  thumbnail: File | null;
}

export default function AddProduct() {
  const [hasVariation, setHasVariation] = useState<boolean>(false);

  const handleSubmit = async (values: FormInputV) => {
    console.log(values);
  };

  const formik = useFormik<FormInputV>({
    initialValues: {
      title_ar: "",
      title_en: "",
      description_ar: "",
      description_en: "",
      category_id: "",
      sub_category_id: "",
      brand_id: "",
      unit_of_measure_id: "",
      images: [],
      has_variation: false,
      variations: [
        {
          id: Math.random(),
          name_ar: "",
          name_en: "",
          price: 0,
          price_after_discount: 0,
          value_ar: "",
          value_en: "",
          stock: 0,
          code: "",
          thumbnail: null,
        },
      ],
      price: 0,
      price_after_discount: 0,
      stock: 0,
      code: "",
      thumbnail: null,
    },
    onSubmit: handleSubmit,
  });

  console.log(formik.values)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full">
        <ProductInputsInfo
          formValues={formik.values}
          formChangeEvent={formik.handleChange}
          formBlurEvent={formik.handleBlur}
          formErrors={formik.errors}
          setHasVariation={setHasVariation}
          hasVariation={hasVariation}
        />
        <AddCategory
          formValues={formik.values}
          formChangeEvent={formik.handleChange}
          formErrors={formik.errors}
        />
        {hasVariation ? (
          <ProductVariation
            formValues={formik.values}
            formChangeEvent={formik.handleChange}
            formSetValues={formik.setFieldValue}
            formBlurEvent={formik.handleBlur}
          />
        ) : (
          <AddSpecification
            formValues={formik.values}
            formChangeEvent={formik.handleChange}
            formBlurEvent={formik.handleBlur}
            formErrors={formik.errors}
          />
        )}
      </div>
      <ProductsImages />

      <div className="flex items-center justify-end gap-4 mt-7">
        <button
          type="submit"
          className="px-8 py-3 text-white bg-primary cursor-pointer "
        >
          Add Product
        </button>
        <span className="px-8 py-3 text-white bg-red-500 cursor-pointer ">
          Cancel
        </span>
      </div>
    </form>
  );
}
