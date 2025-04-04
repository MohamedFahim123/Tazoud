import { ProductTypes } from "@/app/rtk/slices/ProductSlice";
import { FormikErrors, FormikHelpers, FormikTouched, FormikValues } from "formik";
import Image from "next/image";
import { FaImage } from "react-icons/fa";

interface ProductThumbnailProps {
  formValues: FormikValues;
  formErrors: FormikErrors<ProductTypes>;
  formSetValues: FormikHelpers<ProductTypes>["setFieldValue"];
  touched: FormikTouched<ProductTypes>;
}

const ProductThumbnail = ({ formValues, touched, formErrors, formSetValues }: ProductThumbnailProps) => {
  const thumbnail = formValues.thumbnail;
  const renderedThumbnail = thumbnail && URL.createObjectURL(thumbnail as unknown as File);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = e.target.files[0];
      formSetValues("thumbnail", imageUrl);
    }
  };

  return (
    <div className="mt-5 p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h5 className="text-lg font-bold max-w-full mb-6">
        Product Thumbnail
        {touched.thumbnail && formErrors.thumbnail && <span className="text-red-500 font-normal block text-sm">{formErrors.thumbnail as string}</span>}
      </h5>

      <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {thumbnail && (
          <div className="p-3 bg-slate-100 rounded-lg border border-gray_dark w-[200px]">
            <div className="h-[200px] w-full overflow-hidden">
              <Image src={renderedThumbnail} width={200} height={200} style={{ width: "auto", height: "auto" }} alt="product thumbnail" priority />
            </div>
          </div>
        )}

        <div className="p-3 bg-slate-100 rounded-lg border border-gray_dark">
          <label className="flex sm:flex-col items-center justify-center w-full h-[200px] border-2 border-dashed rounded-lg cursor-pointer hover:border-primary hover:text-primary">
            <input type="file" className="hidden" accept="image/*" onChange={handleThumbnailChange} />
            <FaImage className="text-4xl mb-2" />
            <span className="text-sm">Upload Thumbnail</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductThumbnail;
