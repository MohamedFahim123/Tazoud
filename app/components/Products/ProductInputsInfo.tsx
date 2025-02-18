import React from "react";

export default function ProductInputsInfo() {
  return (
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
              <select
                id="category"
                className=" w-full appearance-non border text-gray-400 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              >
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
              <select
                id="brand"
                className=" w-full appearance-non border text-gray-400 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              >
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
  );
}
