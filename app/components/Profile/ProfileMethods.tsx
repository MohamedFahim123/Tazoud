import { AiFillBank } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

export default function ProfileMethods() {
  return (
    <div className="flex flex-col gap-4 bg-slate-100 py-6 px-4 rounded-md">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <span className="bg-primary text-white px-7 py-4 rounded-md cursor-pointer">Add New Bank</span>
        <span className="bg-green text-white px-7 py-4 rounded-md cursor-pointer">Add New Card</span>
      </div>
      <div className="px-2">
        <h3 className="text-xl font-bold">Add a payment method</h3>
        <div className="flex flex-col md:flex-row items-center mt-4 bg-white py-4 px-4 rounded-md border-b border-gray-200">
          <div className="bg-primary rounded-full h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
            <AiFillBank color="#fff" size={60} />
          </div>
          <div className="flex flex-col ml-0 md:ml-4 text-center md:text-left mt-3 md:mt-0">
            <h3 className="text-lg font-bold text-gray-600">Bank of America</h3>
            <p className="text-md text-gray-700">Visa</p>
            <p className="text-md text-gray-700">**** **** **** 1234</p>
            <p className="text-sm text-green">Verified</p>
          </div>
          <span className="mt-3 md:mt-0 ms-auto bg-yellow text-black font-semibold px-5 py-2 md:px-7 md:py-3 rounded-md cursor-pointer text-sm md:text-base">Manage</span>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 bg-white py-4 px-4 rounded-md border-b border-gray-200">
          <div className="bg-primary rounded-full h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
            <RiVisaLine color="#fff" size={60} />
          </div>
          <div className="flex flex-col ml-0 md:ml-4 text-center md:text-left mt-3 md:mt-0">
            <h3 className="text-lg font-bold text-gray-600">Bank of America</h3>
            <p className="text-md text-gray-700">Visa</p>
            <p className="text-md text-gray-700">**** **** **** 1234</p>
            <p className="text-sm text-green">Verified</p>
          </div>
          <span className="mt-3 md:mt-0 ms-auto bg-yellow text-black font-semibold px-5 py-2 md:px-7 md:py-3 rounded-md cursor-pointer text-sm md:text-base">Manage</span>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 bg-white py-4 px-4 rounded-md border-b border-gray-200">
          <div className="bg-primary rounded-full h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
            <FaPaypal color="#fff" size={60} />
          </div>
          <div className="flex flex-col ml-0 md:ml-4 text-center md:text-left mt-3 md:mt-0">
            <h3 className="text-lg font-bold text-gray-600">Bank of America</h3>
            <p className="text-md text-gray-700">Visa</p>
            <p className="text-md text-gray-700">**** **** **** 1234</p>
            <p className="text-sm text-green">Verified</p>
          </div>
          <span className="mt-3 md:mt-0 ms-auto bg-yellow text-black font-semibold px-5 py-2 md:px-7 md:py-3 rounded-md cursor-pointer text-sm md:text-base">Manage</span>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex items-center justify-start mt-4 bg-white py-4 px-4 rounded-md border-b-[1px] border-gray-200">
<div className="bg-primary rounded-full h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
  <RiVisaLine color="#fff" size={60} />
</div>
<div className="flex flex-col ml-0 md:ml-4 text-center md:text-left mt-3 md:mt-0">
  <h3 className="text-lg font-bold text-gray-600">Bank of America</h3>
  <p className="text-md text-gray-700">Visa</p>
  <p className="text-md text-gray-700">**** **** **** 1234</p>
  <p className="text-sm text-green">Verified</p>
</div>
<span className="mt-3 md:mt-0 ms-auto bg-yellow text-black font-semibold px-5 py-2 md:px-7 md:py-3 rounded-md cursor-pointer text-sm md:text-base">Manage</span>
</div>
<div className="flex items-center justify-start mt-4 bg-white py-4 px-4 rounded-md border-b-[1px] border-gray-200">
<div className="bg-primary rounded-full h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
  <FaCcPaypal color="#fff" size={60} />
</div>
<div className="flex flex-col ml-0 md:ml-4 text-center md:text-left mt-3 md:mt-0">
  <h3 className="text-lg font-bold text-gray-600">Bank of America</h3>
  <p className="text-md text-gray-700">Visa</p>
  <p className="text-md text-gray-700">**** **** **** 1234</p>
  <p className="text-sm text-green">Verified</p>
</div>
<span className="mt-3 md:mt-0 ms-auto bg-yellow text-black font-semibold px-5 py-2 md:px-7 md:py-3 rounded-md cursor-pointer text-sm md:text-base">Manage</span>
</div> */
}
