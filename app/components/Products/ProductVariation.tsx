import { FormikHandlers, FormikHelpers, FormikValues } from "formik";
import { Fragment } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { FormInputV, Variation } from "./AddProduct";

const ProductVariation = ({
  formValues,
  formChangeEvent,
  formBlurEvent,
  formSetValues,
}: {
  formValues: FormikValues;
  formChangeEvent: FormikHandlers["handleChange"];
  formBlurEvent: FormikHandlers["handleBlur"];
  formSetValues: FormikHelpers<FormInputV>["setFieldValue"];
}) => {
  return (
    <div className="p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h3 className="text-lg font-bold mb-3">Variations</h3>
      {formValues.variations?.map((variation: Variation, idx: number) => (
        <Fragment key={variation.id}>
          <h6 className="my-4 font-bold">#{idx + 1} </h6>
          <div className="flex md:flex-row flex-col items-center justify-between mb-3">
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="text"
                id={`variations[${idx}].name_en`}
                label="Name En"
                onChange={formChangeEvent}
                value={formValues.variations[idx]?.name_en}
                onBlur={formBlurEvent}
                placeHolder="Name In English"
              />
            </div>
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="text"
                id={`variations[${idx}].name_ar`}
                onChange={formChangeEvent}
                value={formValues.variations[idx]?.name_ar}
                onBlur={formBlurEvent}
                label="Name Ar"
                placeHolder="ادخل الاسم بالعربية"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between mb-3">
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="number"
                onChange={formChangeEvent}
                value={`${formValues.variations[idx]?.price}`}
                onBlur={formBlurEvent}
                id={`variations[${idx}].price`}
                label="Price"
              />
            </div>
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="number"
                id={`variations[${idx}].price_after_discount`}
                label="Price After Discount"
                onChange={formChangeEvent}
                value={`${formValues.variations[idx]?.price_after_discount}`}
                onBlur={formBlurEvent}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between mb-3">
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="text"
                onChange={formChangeEvent}
                value={`${formValues.variations[idx]?.value_en}`}
                onBlur={formBlurEvent}
                id={`variations[${idx}].value_en`}
                label="Value En"
              />
            </div>
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="text"
                id={`variations[${idx}].value_ar`}
                label="Value Ar"
                onChange={formChangeEvent}
                value={`${formValues.variations[idx]?.value_ar}`}
                onBlur={formBlurEvent}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between mb-3">
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="text"
                onChange={formChangeEvent}
                value={`${formValues.variations[idx]?.stock}`}
                onBlur={formBlurEvent}
                id={`variations[${idx}].stock`}
                label="Stock"
              />
            </div>
            <div className="md:w-[48%] w-full">
              <CustomInput
                type="text"
                id={`variations[${idx}].code`}
                label="Code"
                onChange={formChangeEvent}
                value={`${formValues.variations[idx]?.code}`}
                onBlur={formBlurEvent}
              />
            </div>
          </div>
        </Fragment>
      ))}
      <button
        type="button"
        title="Add Variation"
        onClick={() =>
          formSetValues("variations", [
            ...formValues.variations,
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
          ])
        }
        className="bg-primary px-10 block ms-auto mt-8 text-white w-100 font-bold text-lg py-3 mb-5 hover:bg-primary/75 transition duration-300 ease-linear"
      >
        Add More
      </button>
    </div>
  );
};

export default ProductVariation;
