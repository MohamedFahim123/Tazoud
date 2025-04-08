import { ProductTypes, Variation } from "@/app/rtk/slices/ProductSlice";
import { FormikErrors, FormikHandlers, FormikHelpers, FormikTouched, FormikValues } from "formik";
import Image from "next/image";
import { Fragment } from "react";
import { FaImage } from "react-icons/fa";
import CustomInput from "../CustomInput/CustomInput";

interface ProductVariationProps {
  formValues: FormikValues;
  formChangeEvent: FormikHandlers["handleChange"];
  formBlurEvent: FormikHandlers["handleBlur"];
  formErrors: FormikErrors<ProductTypes> & { variations?: FormikErrors<Variation>[] };
  touched: FormikTouched<ProductTypes> & {
    variations: FormikTouched<Variation>[];
  };
  formSetValues: FormikHelpers<ProductTypes>["setFieldValue"];
}
const ProductVariation = ({ formErrors, touched, formValues, formChangeEvent, formBlurEvent, formSetValues }: ProductVariationProps) => {
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const updatedVariations = [...formValues.variations];
      updatedVariations[idx].thumbnail = file;

      formSetValues("variations", updatedVariations);
    }
  };

  return (
    <div className="p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h3 className="text-lg font-bold mb-3">Variations</h3>
      {formValues.variations?.length > 0 &&
        formValues.variations?.map((variation: Variation, idx: number) => {
          const error = formErrors.variations?.[idx] as FormikErrors<Variation> | undefined;
          const touch = touched.variations?.[idx] as FormikTouched<Variation> | undefined;

          return (
            <Fragment key={variation.id}>
              <h6 className="my-4 font-bold">#{idx + 1} </h6>
              <div className="flex md:flex-row flex-col items-center justify-between mb-3">
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="text"
                    id={`variations[${idx}].name_en`}
                    label="Name En"
                    onChange={formChangeEvent}
                    hasError={Boolean(
                      (formErrors.variations?.[idx] as FormikErrors<Variation>)?.name_en && (touched.variations?.[idx] as FormikErrors<Variation>)?.name_en
                    )}
                    value={formValues.variations?.[idx]?.name_en || ""}
                    onBlur={formBlurEvent}
                    placeHolder="Name In English"
                  />
                  {error?.name_en && touch?.name_en && <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.name_en}</div>}
                </div>
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="text"
                    id={`variations[${idx}].name_ar`}
                    onChange={formChangeEvent}
                    hasError={Boolean(
                      (formErrors.variations?.[idx] as FormikErrors<Variation>)?.name_ar && (touched.variations?.[idx] as FormikErrors<Variation>)?.name_ar
                    )}
                    value={formValues.variations[idx]?.name_ar || ""}
                    onBlur={formBlurEvent}
                    label="Name Ar"
                    placeHolder="ادخل الاسم بالعربية"
                  />
                  {error?.name_ar && touch?.name_ar && <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.name_ar}</div>}
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-between mb-3">
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="number"
                    onChange={formChangeEvent}
                    hasError={Boolean((formErrors.variations?.[idx] as FormikErrors<Variation>)?.price && (touched.variations?.[idx] as FormikErrors<Variation>)?.price)}
                    value={formValues.variations[idx]?.price || ""}
                    onBlur={formBlurEvent}
                    id={`variations[${idx}].price`}
                    label="Price"
                  />
                  {error?.price && touch?.price && <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.price}</div>}
                </div>
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="number"
                    id={`variations[${idx}].price_after_discount`}
                    label="Price After Discount"
                    hasError={Boolean(
                      (formErrors.variations?.[idx] as FormikErrors<Variation>)?.price_after_discount &&
                        (touched.variations?.[idx] as FormikErrors<Variation>)?.price_after_discount
                    )}
                    value={formValues.variations[idx]?.price_after_discount || ""}
                    onChange={formChangeEvent}
                    onBlur={formBlurEvent}
                  />
                  {error?.price_after_discount && touch?.price_after_discount && (
                    <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.price_after_discount}</div>
                  )}
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-between mb-3">
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="text"
                    onChange={formChangeEvent}
                    hasError={Boolean(
                      (formErrors.variations?.[idx] as FormikErrors<Variation>)?.value_en && (touched.variations?.[idx] as FormikErrors<Variation>)?.value_en
                    )}
                    value={formValues.variations[idx]?.value_en || ""}
                    id={`variations[${idx}].value_en`}
                    onBlur={formBlurEvent}
                    label="Value En"
                  />
                  {error?.value_en && touch?.value_en && <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.value_en}</div>}
                </div>
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="text"
                    id={`variations[${idx}].value_ar`}
                    label="Value Ar"
                    hasError={Boolean(
                      (formErrors.variations?.[idx] as FormikErrors<Variation>)?.value_ar && (touched.variations?.[idx] as FormikErrors<Variation>)?.value_ar
                    )}
                    value={formValues.variations[idx]?.value_ar || ""}
                    onChange={formChangeEvent}
                    onBlur={formBlurEvent}
                  />
                  {error?.value_ar && touch?.value_ar && <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.value_ar}</div>}
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-between mb-3">
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="text"
                    onChange={formChangeEvent}
                    hasError={Boolean((formErrors.variations?.[idx] as FormikErrors<Variation>)?.stock && (touched.variations?.[idx] as FormikErrors<Variation>)?.stock)}
                    value={formValues.variations[idx]?.stock || ""}
                    onBlur={formBlurEvent}
                    id={`variations[${idx}].stock`}
                    label="Stock"
                  />
                  {error?.stock && touch?.stock && <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.stock}</div>}
                </div>
                <div className="md:w-[48%] w-full">
                  <CustomInput
                    type="text"
                    id={`variations[${idx}].code`}
                    label="Code"
                    hasError={Boolean((formErrors.variations?.[idx] as FormikErrors<Variation>)?.code && (touched.variations?.[idx] as FormikErrors<Variation>)?.code)}
                    value={formValues.variations[idx]?.code || ""}
                    onChange={formChangeEvent}
                    onBlur={formBlurEvent}
                  />
                  {error?.code && touch?.code && <div className="text-red-500 text-sm">{formErrors.variations?.[idx]?.code}</div>}
                </div>
              </div>

              <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {variation.thumbnail && (
                  <div className="p-3 bg-slate-100 rounded-lg border border-gray_dark w-[200px]">
                    <div className="h-[200px] w-full overflow-hidden">
                      <Image
                        src={URL.createObjectURL(variation.thumbnail)}
                        width={200}
                        height={200}
                        style={{ width: "auto", height: "auto" }}
                        alt="product thumbnail"
                        priority
                      />
                    </div>
                  </div>
                )}

                <div className="p-3 bg-slate-100 rounded-lg border border-gray_dark">
                  <label className="flex sm:flex-col items-center justify-center w-full h-[200px] border-2 border-dashed rounded-lg cursor-pointer hover:border-primary hover:text-primary">
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleThumbnailChange(e, idx)} />
                    <FaImage className="text-4xl mb-2" />
                    <span className="text-sm">Upload Thumbnail</span>
                  </label>
                </div>
              </div>
            </Fragment>
          );
        })}

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
