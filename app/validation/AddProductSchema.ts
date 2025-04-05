import * as yup from "yup";

export const productSchema = yup.object({
  title_ar: yup.string().required("Arabic title is required"),
  title_en: yup.string().required("English title is required"),
  description_ar: yup.string().required("Arabic description is required"),
  description_en: yup.string().required("English description is required"),
  category_id: yup.string().required("Category is required"),
  sub_category_id: yup.string().required("Sub-category is required"),
  brand_id: yup.string().required("Brand is required"),
  unit_of_measure_id: yup.string().required("Unit of measure is required"),
  images: yup.array().of(yup.mixed()).min(1, "At least one image is required").max(7, "Maximum 7 images are allowed"),
  has_variation: yup.boolean(),
  variations: yup
    .array()
    .nullable()
    .test("required-if-variation", "At least one variation is required", function (value) {
      const { has_variation } = this.parent;
      if (has_variation) {
        return Array.isArray(value) && value.length > 0;
      }
      return true;
    })
    .of(
      yup.object({
        name_ar: yup.string().typeError("Arabic variation name is required"),
        name_en: yup.string().typeError("English variation name is required"),
        price: yup.number().typeError("Price must be a number").typeError("Variation price is required"),
        price_after_discount: yup.number().typeError("Price after discount must be a number").typeError("Variation price after discount is required"),
        value_ar: yup.string().typeError("Arabic variation value is required"),
        value_en: yup.string().typeError("English variation value is required"),
        stock: yup.number().typeError("Stock must be a number").typeError("Variation stock is required"),
        code: yup.string().typeError("Variation code is required"),
        thumbnail: yup.mixed().nullable(),
      })
    ),
  price: yup
    .number()
    .nullable()
    .typeError("Price must be a number")
    .test("required-if-no-variation", "Price is required", function (value) {
      const { has_variation } = this.parent;
      return has_variation || !!value;
    }),

  price_after_discount: yup
    .number()
    .nullable()
    .typeError("Price after discount must be a number")
    .test("required-if-no-variation", "Price after discount is required", function (value) {
      const { has_variation } = this.parent;
      return has_variation || !!value;
    }),

  stock: yup
    .number()
    .nullable()
    .typeError("Stock must be a number")
    .test("required-if-no-variation", "Stock is required", function (value) {
      const { has_variation } = this.parent;
      return has_variation || !!value;
    }),

  code: yup.string().nullable(),
  thumbnail: yup.mixed().required("Thumbnail is required"),
});
