"use client";

import CustomInput from "../CustomInput/CustomInput";
// import CustomSelectOptions from "../CustomSelectOptions/CustomSelectOptions";

export default function ProductInputsInfo() {
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

        <div className="flex items-center justify-between flex-wrap mb-3">
          <div className="w-[48%]">{/* <CustomSelectOptions id="category" label="Category" options={options} onChange={handleSelectChange} /> */}</div>
          <div className="w-[48%]">{/* <CustomSelectOptions id="sub_category" label="Subcategory" options={options} onChange={handleSelectChange} /> */}</div>
        </div>

        <div className="flex items-center justify-between flex-wrap mb-3">
          <div className="w-[48%]">
            <CustomInput type="text" id="regular_price" label="Regular Price" placeHolder="Enter Regular Price" />
          </div>
          <div className="w-[48%]">
            <CustomInput type="text" id="discount_price" label="Discount Price" placeHolder="Enter Discount Price" />
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap mb-3">
          <div className="w-[48%]">
            <CustomInput type="text" id="shipping_free" label="Shipping Free" placeHolder="Enter Shipping Free" />
          </div>
          <div className="w-[48%]">
            <CustomInput type="text" id="tax_rate" label="Tax Rate" placeHolder="Enter Tax Rate" />
          </div>
        </div>
      </form>
    </div>
  );
}
