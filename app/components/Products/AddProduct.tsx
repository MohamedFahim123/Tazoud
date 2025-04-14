"use client";

import { addProduct, ProductTypes, Variation } from "@/app/rtk/slices/ProductSlice";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { productSchema } from "@/app/validation/AddProductSchema";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import AddCategory from "./AddCategory";
import AddSpecification from "./AddSpecification";
import ProductInputsInfo from "./ProductInputsInfo";
import ProductsImages from "./ProductsImages";
import ProductThumbnail from "./ProductThumbnail";
import ProductVariation from "./ProductVariation";

export default function AddProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const [hasVariation, setHasVariation] = useState<boolean>(false);
  const { loading } = useSelector((state: RootState) => state.products);

  const toggleHasVariation = () => setHasVariation((prev) => !prev);

  const formik = useFormik<ProductTypes>({
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
          price: "",
          price_after_discount: "",
          value_ar: "",
          value_en: "",
          stock: "",
          code: "",
          thumbnail: null,
        },
      ],
      price: "",
      price_after_discount: "",
      stock: "",
      code: "",
      thumbnail: null,
    },
    validationSchema: productSchema,
    onSubmit: async (values: ProductTypes) => {
      try {
        const formData = new FormData();

        formData.append("title_ar", values.title_ar ?? "");
        formData.append("title_en", values.title_en ?? "");
        formData.append("description_ar", values.description_ar ?? "");
        formData.append("description_en", values.description_en ?? "");
        formData.append("category_id", values.category_id ?? "");
        formData.append("sub_category_id", values.sub_category_id ?? "");
        formData.append("brand_id", values.brand_id ?? "");
        formData.append("unit_of_measure_id", values.unit_of_measure_id ?? "");
        formData.append("has_variation", values.has_variation ? "1" : "0");
        if (values.thumbnail) {
          formData.append("thumbnail", values.thumbnail);
        }
        if ((values.images ?? []).length > 0) {
          values.images?.forEach((image) => formData.append("images[]", image));
        }

        if (values.has_variation) {
          values.variations?.forEach((variation, index) => {
            formData.append(`variations[${index}][name_ar]`, variation.name_ar ?? "");
            formData.append(`variations[${index}][name_en]`, variation.name_en ?? "");
            formData.append(`variations[${index}][value_ar]`, variation.value_ar ?? "");
            formData.append(`variations[${index}][value_en]`, variation.value_en ?? "");
            formData.append(`variations[${index}][price]`, variation.price?.toString() ?? "");
            formData.append(`variations[${index}][price_after_discount]`, variation.price_after_discount?.toString() ?? "");
            formData.append(`variations[${index}][stock]`, variation.stock?.toString() ?? "");
            formData.append(`variations[${index}][code]`, variation.code ?? "");

            if (variation.thumbnail) {
              formData.append(`variations[${index}][thumbnail]`, variation.thumbnail);
            }
          });
        } else {
          formData.append("price", values.price?.toString() ?? "");
          formData.append("price_after_discount", values.price_after_discount?.toString() ?? "");
          formData.append("stock", values.stock?.toString() ?? "");
          formData.append("code", values.code ?? "");
        }

        const res = await dispatch(addProduct(formData)).unwrap();
        toast.success(res?.message ? res?.message : "Product added successfully");
        
      } catch (error) {
        if (error && typeof error === "object" && !Array.isArray(error)) {
          const errorObj = error as Record<string, string[]>; // Explicitly type it
          Object.entries(errorObj).forEach(([, messages]) => {
            if (Array.isArray(messages)) {
              messages.forEach((message) => toast.error(message));
            }
          });
        } else {
          toast.error(typeof error === "string" ? error : "Something went wrong while adding the product.");
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full">
          <ProductInputsInfo
            formValues={formik.values}
            formChangeEvent={formik.handleChange}
            formBlurEvent={formik.handleBlur}
            touched={formik.touched}
            formErrors={formik.errors}
            toggleHasVariation={toggleHasVariation}
          />
          <AddCategory formValues={formik.values} formErrors={formik.errors} touched={formik.touched} formChangeEvent={formik.handleChange} />
          {hasVariation ? (
            <ProductVariation
              formValues={formik.values}
              formErrors={formik.errors as FormikErrors<ProductTypes> & { variations: FormikErrors<Variation>[] }}
              formChangeEvent={formik.handleChange}
              formSetValues={formik.setFieldValue}
              formBlurEvent={formik.handleBlur}
              touched={formik.touched as FormikTouched<ProductTypes> & { variations: FormikTouched<Variation>[] }}
            />
          ) : (
            <AddSpecification
              formValues={formik.values}
              formErrors={formik.errors}
              formChangeEvent={formik.handleChange}
              formBlurEvent={formik.handleBlur}
              touched={formik.touched}
            />
          )}
          <ProductThumbnail formValues={formik.values} formErrors={formik.errors} touched={formik.touched} formSetValues={formik.setFieldValue} />
          <ProductsImages formValues={formik.values} formErrors={formik.errors} touched={formik.touched} formSetValues={formik.setFieldValue} />
        </div>
      )}

      <div className="flex items-center justify-end gap-4 mt-7">
        <button type="submit" className="px-12 py-4 text-white bg-primary cursor-pointer mb-4 font-semibold text-xl">
          Add Product
        </button>
      </div>
    </form>
  );
}
