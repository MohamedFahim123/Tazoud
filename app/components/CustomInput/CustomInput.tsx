"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface customInputTypes {
  name?: string;
  placeHolder?: string;
  type?: string;
  label?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  value?: string;
}

const CustomInput = ({ name, onChange, onClick, onBlur, value, placeHolder, type, label, id }: customInputTypes) => {
  const [viewPassword, setViewPassword] = useState(false);
  const handleToggleShowPassword = () => setViewPassword(!viewPassword);

  return (
    <div className="relative">
      {type === "checkbox" ? (
        <input
          id={id}
          name={name}
          type={type}
          onClick={onClick}
          onChange={onChange}
          onBlur={onBlur}
          value=""
          className="w-4 h-4 relative top-[2px] border border-gray-300 rounded bg-gray_dark focus:ring-3 focus:ring-primary"
        />
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
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeHolder}
          className={` bg-white my-2 p-3 text-base border rounded focus:outline-none border-primary block w-full `}
        />
      )}

      {type === "password" && (
        <div className={`absolute right-3 top-11 text-[20px] cursor-pointer text-black`} onClick={handleToggleShowPassword}>
          {viewPassword ? <FaEyeSlash className="text-primary" /> : <FaEye className=" text-primary" />}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
