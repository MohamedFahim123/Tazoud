import CustomInput from "../CustomInput/CustomInput";

const ProductVariation = () => {
  return (
    <div className="max-h-[500px] p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h3 className="text-lg font-bold mb-3">Variations</h3>
      <form action="" className="">
        <div className="flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <CustomInput type="text" id="regular_price" label="Regular Price" placeHolder="Enter Regular Price" />
          </div>
          <div className="md:w-[48%] w-full">
            <CustomInput type="text" id="discount_price" label="Discount Price" placeHolder="Enter Discount Price" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between mb-3">
          <div className="md:w-[48%] w-full">
            <CustomInput type="text" id="stock" label="Stock" placeHolder="type" />
          </div>
          <div className="md:w-[48%] w-full">
            <CustomInput type="text" id="code" label="code" placeHolder="type" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductVariation;
