"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface customInputTypes {
  name?: string;
  placeHolder?: string;
  type?: string;
  label?: string;
  id?: string;
}

const CustomInput = ({ name, placeHolder, type, label, id }: customInputTypes) => {
  const [viewPassword, setViewPassword] = useState(false);
  const handleToggleShowPassword = () => setViewPassword(!viewPassword);

  return (
    <div className="relative">
      {type === "checkbox" ? (
        <input id={id} type={type} value="" className="w-4 h-4 relative top-[2px] border border-gray-300 rounded bg-gray_dark focus:ring-3 focus:ring-primary" />
      ) : (
        <label htmlFor={id} className={`text-gray_dark block mb-2 text-sm font-medium`}>
          {label}
        </label>
      )}

      {type === "checkbox" ? (
        <label htmlFor={id} className="ms-2 text-sm font-medium">
          {label}
        </label>
      ) : (
        <input
          type={type === "password" ? (viewPassword ? "text" : type) : type}
          id={id}
          placeholder={placeHolder}
          className={` bg-white my-2 p-3 text-base border rounded focus:outline-none hover:outline-none focus-visible:outline-none focus-within:outline-none active:outline-none  border-gray  block w-full `}
        />
      )}

      {type === "password" && (
        <div className={`absolute right-3 top-10 text-[20px] cursor-pointer text-black`} onClick={handleToggleShowPassword}>
          {viewPassword ? <FaEyeSlash className="text-primary" /> : <FaEye className=" text-primary" />}
        </div>
      )}

      {/* {error?.[name] && <p className={`${styles.error} text-red-500 text-xs`}>{error[name]?.message as string}</p>} */}
    </div>
  );
};

export default CustomInput;
