import { FormikErrors, FormikHandlers, FormikValues } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import { FormInputV } from "./AddProduct";

export default function AddSpecification({
  formValues,
  formChangeEvent,
  formBlurEvent,
  formErrors,
}: {
  formValues: FormikValues;
  formChangeEvent: FormikHandlers["handleChange"];
  formBlurEvent: FormikHandlers["handleBlur"];
  formErrors: FormikErrors<FormInputV>;
}) {
  return (
    <div className="max-h-[500px] p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h3 className="text-lg font-bold mb-3">Specification</h3>
      <form action="" className="">
        <div className="flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <CustomInput
              type="text"
              onChange={formChangeEvent}
              value={formValues.price}
              onBlur={formBlurEvent}
              id="price"
              label="Regular Price"
              placeHolder="Enter Regular Price"
            />
            {formErrors.price && (
              <div className="text-red-500">{formErrors.price}</div>
            )}
          </div>
          <div className="md:w-[48%] w-full">
            <CustomInput
              type="text"
              onChange={formChangeEvent}
              value={formValues.price_after_discount}
              onBlur={formBlurEvent}
              id="price_after_discount"
              label="Discount Price"
              placeHolder="Enter Discount Price"
            />
            {formErrors.price_after_discount && (
              <div className="text-red-500">
                {formErrors.price_after_discount}
              </div>
            )}
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <CustomInput
              type="text"
              onChange={formChangeEvent}
              value={formValues.stock}
              onBlur={formBlurEvent}
              id="stock"
              label="Stock"
              placeHolder="type"
            />
            {formErrors.stock && (
              <div className="text-red-500">{formErrors.stock}</div>
            )}
          </div>
          <div className="md:w-[48%] w-full">
            <CustomInput
              type="text"
              onChange={formChangeEvent}
              value={formValues.code}
              onBlur={formBlurEvent}
              id="code"
              label="code"
              placeHolder="type"
            />
            {formErrors.code && (
              <div className="text-red-500">{formErrors.code}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
