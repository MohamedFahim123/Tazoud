import React from "react";
import CustomInput from "../CustomInput/CustomInput";

export default function AddSpecification() {
  return (
    <div className="max-h-[500px] p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray_dark">
      <h3 className="text-lg font-bold mb-3">Specification</h3>
      <form action="" className="">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-[48%]">
            <CustomInput type="text" id="stock" label="Stock" placeHolder="type" />
          </div>
          <div className="w-[48%]">
            <CustomInput type="text" id="weight" label="Weight" placeHolder="type" />
          </div>
        </div>
        <div className=" flex items-start justify-between flex-wrap">
          <div className="max-w-[48%] ">
            <h5>Size</h5>
            <div className="flex flex-wrap border-[1px] rounded-md p-4 gap-3 ">
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                MM
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                XL
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                M
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                X
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                L
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                2XL
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                3XL
              </span>
            </div>
          </div>
          <div className="max-w-[48%]">
            <h5>Colors</h5>
            <div className=" flex flex-wrap border-[1px] rounded-md p-4 gap-3 ">
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                White
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                Red
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                Green
              </span>
              <span
                className={`py-2 px-4 rounded-md text-black text-sm font-light border-[1px] border-primary  active:border-none hover:bg-primary active:bg-primary active:text-white cursor-pointer`}
              >
                Black
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
