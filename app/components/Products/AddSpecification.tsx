import React from "react";

export default function AddSpecification() {
  return (
    <div className="max-h-[500px] p-6 border-[1px] bg-white rounded-lg shadow-sm  border-gray-200">
      <h3 className="text-lg font-bold mb-3">Specification</h3>
      <form action="" className="">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-[48%]">
            <label htmlFor="stock">Stock</label>
            <input
              type="text"
              name="stock"
              id="stock"
              placeholder="type"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary mb-3"
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="type"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary mb-3"
            />
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
