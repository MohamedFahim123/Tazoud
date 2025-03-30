"use client";

import CustomInput from "../CustomInput/CustomInput";

export default function ProductInputsInfo({ setHasVariation, hasVariation }: { setHasVariation: (hasVariation: boolean) => void; hasVariation: boolean }) {
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
      <form action="">
        <div className="product_title flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <CustomInput type="text" id="title_en" label="Product Title" placeHolder="Enter Product Title" />
          </div>
          <div className="md:w-[48%] w-full">
            <CustomInput type="text" id="title_ar" label="اسم المنتج" placeHolder="ادخل اسم المنتج" />
          </div>
        </div>

        <div className="product_description flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <label htmlFor="description_en" className="text-gray_dark block mb-2 text-sm font-medium">
              About Description
            </label>
            <textarea
              name="description_en"
              id="description_en"
              rows={3}
              cols={4}
              className=" resize-none bg-white my-2 p-3 text-base border rounded focus:outline-none border-primary block w-full "
            ></textarea>
          </div>
          <div className="md:w-[48%] w-full">
            <label htmlFor="description_ar" className="text-gray_dark block mb-2 text-sm font-medium">
              تفاصيل عن المنتج
            </label>
            <textarea
              name="description_ar"
              id="description_ar"
              rows={3}
              cols={4}
              className=" resize-none bg-white my-2 p-3 text-base border rounded focus:outline-none border-primary block w-full "
            ></textarea>
          </div>
        </div>

        <div className="w-full">
          <CustomInput type="checkbox" id="has_variation" label="Has Variation" onClick={() => setHasVariation(!hasVariation)} />
        </div>
      </form>
    </div>
  );
}
