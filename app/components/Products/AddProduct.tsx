import React from "react";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
export default function AddProduct() {
  return (
    <div className="w-full bg-slate-100  p-4 rounded-lg border">
      <div className="flex items-start justify-center gap-2 flex-col lg:flex-row ">
        <div className="max-w-full lg:max-w-[49%] max-h-[700px] p-6 border-[1px] bg-white rounded-lg shadow-sm  border-gray-200 ">
          <h3 className="text-lg font-bold mb-3">Basic Information</h3>
          <form action="">
            <div>
              <label htmlFor="product_title">Product Title</label>
              <input
                type="text"
                name="product_title"
                id="product_title"
                placeholder="type"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary mb-3"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap">
              <div className="w-[48%]">
                <label htmlFor="regular_price">Regular Price</label>
                <input
                  type="text"
                  name="regular_price"
                  id="regular_price"
                  placeholder="type"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary mb-3"
                />
              </div>
              <div className="w-[48%]">
                <label htmlFor="discount_price">Discount Price</label>
                <input
                  type="text"
                  name="discount_price"
                  id="discount_price"
                  placeholder="type"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary mb-3"
                />
              </div>
            </div>

            <div>
              <label htmlFor="about_description">About Description</label>
              <textarea
                name="about_description"
                id="about_description"
                rows={2}
                cols={4}
                className="w-full resize-none px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary mb-3"
              ></textarea>
            </div>

            <div className="flex items-center justify-between flex-wrap mb-3">
              <div className="w-[48%]">
                <label htmlFor="category" className=" text-sm font-medium ">
                  Category
                </label>
                <div className="relative mt-1">
                  <select id="category" className=" w-full appearance-non border text-gray-400 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500">
                    <option value="men">men</option>
                    <option value="women">Women</option>
                  </select>
                </div>
              </div>
              <div className="w-[48%]">
                <label htmlFor="brand" className=" text-sm font-medium ">
                  Brand
                </label>
                <div className="relative mt-1">
                  <select id="brand" className=" w-full appearance-non border text-gray-400 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500">
                    <option value="men">Nogor Polli</option>
                    <option value="men">Nogor Polli</option>
                    <option value="men">Nogor Polli</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap mb-3">
              <div className="w-[48%]">
                <label htmlFor="shipping_free">Shipping Free</label>
                <input
                  type="text"
                  name="shipping_free"
                  id="shipping_free"
                  placeholder="type"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
                />
              </div>
              <div className="w-[48%]">
                <label htmlFor="tax_rate">Tax Rate</label>
                <input
                  type="text"
                  name="tax_rate"
                  id="tax_rate"
                  placeholder="type"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
                />
              </div>
            </div>

            <div>
              <label htmlFor="tag">Tag</label>
              <textarea
                name="tag"
                id="tag"
                rows={2}
                cols={4}
                className="w-full resize-none px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary mb-3"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="max-w-full lg:max-w-[49%] ">
          <div className="max-h-[500px] p-6 border-[1px]  bg-white rounded-lg shadow-sm  border-gray-200 mb-3">
            <h3 className="text-lg font-bold mb-3"> Organization</h3>
            <form action="" className="">
              <div className="flex items-center mb-3">
                <div className="w-[80%]">
                  <label htmlFor="add_category">Add Category</label>
                  <input
                    type="text"
                    name="add_category"
                    id="add_category"
                    placeholder="type"
                    className="w-full px-4 py-2 border border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
                  />
                </div>
                <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
                  Add
                </button>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-[80%]">
                  <label htmlFor="add_brand">Add Brand</label>
                  <input
                    type="text"
                    name="add_brand"
                    id="add_brand"
                    placeholder="type"
                    className="w-full px-4 py-2 border border-r-0 rounded-l-md  focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
                  />
                </div>
                <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
                  Add
                </button>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-[80%]">
                  <label htmlFor="add_color">Add Color</label>
                  <input
                    type="text"
                    name="add_color"
                    id="add_color"
                    placeholder="type"
                    className="w-full px-4 py-2 border border-r-0 rounded-l-md  focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
                  />
                </div>
                <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
                  Add
                </button>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-[80%]">
                  <label htmlFor="add_size">Add Size</label>
                  <input
                    type="text"
                    name="add_size"
                    id="add_size"
                    placeholder="type"
                    className="w-full px-4 py-2 border border-r-0 rounded-l-md  focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
                  />
                </div>
                <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
                  Add
                </button>
              </div>
            </form>
          </div>

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
        </div>
      </div>
      <div className="max-w-full mt-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6 border-[1px] bg-white rounded-lg shadow-sm border-gray-200">
        <div className="p-3 bg-slate-100  rounded-lg border relative">
          <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
            <FiEdit size={25} className="cursor-pointer hover:text-primary my-4 " />
            <MdOutlineCancel size={25} className="cursor-pointer hover:text-primary " />
          </div>
          <Image src={"/images/product-img1.png"} width={200} height={200} alt="image" priority placeholder="blur" blurDataURL="/images/profile.png" />
        </div>

        <div className="p-3 bg-slate-100  rounded-lg border relative">
          <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
            <FiEdit size={25} className="cursor-pointer hover:text-primary my-4 " />
            <MdOutlineCancel size={25} className="cursor-pointer hover:text-primary " />
          </div>
          <Image src={"/images/product-img1.png"} width={200} height={200} alt="image" priority placeholder="blur" blurDataURL="/images/profile.png" />
        </div>

        <div className="p-3 bg-slate-100  rounded-lg border relative">
          <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
            <FiEdit size={25} className="cursor-pointer hover:text-primary my-4 " />
            <MdOutlineCancel size={25} className="cursor-pointer hover:text-primary " />
          </div>
          <Image src={"/images/product-img1.png"} width={200} height={200} alt="image" priority placeholder="blur" blurDataURL="/images/profile.png" />
        </div>

        <div className="p-3 bg-slate-100  rounded-lg border relative">
          <div className=" absolute ms-3 top-0 right-0 left-0 bottom-0] ">
            <FiEdit size={25} className="cursor-pointer hover:text-primary my-4 " />
            <MdOutlineCancel size={25} className="cursor-pointer hover:text-primary " />
          </div>
          <Image src={"/images/product-img1.png"} width={200} height={200} alt="image" priority placeholder="blur" blurDataURL="/images/profile.png" />
        </div>

        <div className="p-3 bg-slate-100  rounded-lg border">
          <label className="flex sm:flex-col items-center justify-center max:w-48 h-48 border-2 border-dashed  rounded-lg cursor-pointer hover:border-primary hover:text-primary">
            <input type="file" className="hidden" />
            <FaImage className="text-4xl mb-2" />
            <span className="text-sm">{"Image Upload"}</span>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mt-7">
        <span className="px-8 py-3 text-white bg-primary ">Add Product</span>
        <span className="px-8 py-3 text-white bg-red-500 ">Cancel </span>
      </div>
    </div>
  );
}
