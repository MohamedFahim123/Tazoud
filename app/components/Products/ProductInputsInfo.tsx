"use client";

import { FormikErrors, FormikHandlers, FormikValues } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import { FormInputV } from "./AddProduct";

export default function ProductInputsInfo({
  formValues,
  formChangeEvent,
  formBlurEvent,
  formErrors,
  setHasVariation,
  hasVariation,
}: {
  formValues: FormikValues;
  formChangeEvent: FormikHandlers["handleChange"];
  formBlurEvent: FormikHandlers["handleBlur"];
  formErrors: FormikErrors<FormInputV>;
  setHasVariation: (hasVariation: boolean) => void;
  hasVariation: boolean;
}) {
  // const dispatch = useDispatch<AppDispatch>();
  // const { products, loading, error } = useSelector((state: RootState) => state.products);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  // console.log(products);

  // if (loading) return <p>Loading products...</p>;
  // if (error) return <p>Error: {error}</p>;
  // if (products.length === 0) return <p>No products found</p>;

  return (
    <div className="max-w-full max-h-[700px] p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark mb-5">
      <h3 className="text-lg font-bold mb-3">Basic Information</h3>

      <div className="product_title flex md:flex-row flex-col items-center justify-between mb-3">
        <div className="md:w-[48%] w-full">
          <CustomInput
            type="text"
            onChange={formChangeEvent}
            value={formValues.title_en}
            onBlur={formBlurEvent}
            id="title_en"
            label="Product Title"
            placeHolder="Enter Product Title"
          />
          {formErrors.title_en && (
            <div className="text-red-500">{formErrors.title_en}</div>
          )}
        </div>
        <div className="md:w-[48%] w-full">
          <CustomInput
            type="text"
            onChange={formChangeEvent}
            onBlur={formBlurEvent}
            value={formValues.title_ar}
            id="title_ar"
            label="اسم المنتج"
            placeHolder="ادخل اسم المنتج"
          />
          {formErrors.title_ar && (
            <div className="text-red-500">{formErrors.title_ar}</div>
          )}
        </div>
      </div>

      <div className="product_description flex md:flex-row flex-col items-center justify-between mb-3">
        <div className="md:w-[48%] w-full">
          <label
            htmlFor="description_en"
            className="text-gray_dark block mb-2 text-sm font-medium"
          >
            About Description
          </label>
          <textarea
            name="description_en"
            id="description_en"
            onChange={formChangeEvent}
            onBlur={formBlurEvent}
            value={formValues.description_en}
            rows={3}
            cols={4}
            className=" resize-none bg-white my-2 p-3 text-base border rounded focus:outline-none border-primary block w-full "
          ></textarea>
          {formErrors.description_en && (
            <div className="text-red-500">{formErrors.description_en}</div>
          )}
        </div>
        <div className="md:w-[48%] w-full">
          <label
            htmlFor="description_ar"
            className="text-gray_dark block mb-2 text-sm font-medium"
          >
            تفاصيل عن المنتج
          </label>
          <textarea
            name="description_ar"
            id="description_ar"
            onChange={formChangeEvent}
            onBlur={formBlurEvent}
            value={formValues.description_ar}
            rows={3}
            cols={4}
            className=" resize-none bg-white my-2 p-3 text-base border rounded focus:outline-none border-primary block w-full "
          ></textarea>
          {formErrors.description_ar && (
            <div className="text-red-500">{formErrors.description_ar}</div>
          )}
        </div>
      </div>

      <div className="w-full">
        <CustomInput
          type="checkbox"
          onChange={formChangeEvent}
          value={formValues.has_variation}
          onBlur={formBlurEvent}
          id="has_variation"
          label="Has Variation"
          onClick={() => setHasVariation(!hasVariation)}
        />
      </div>
    </div>
  );
}
