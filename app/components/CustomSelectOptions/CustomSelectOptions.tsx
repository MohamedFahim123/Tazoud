"use client";

import { useState } from "react";

interface CustomSelectOptionsProps {
  id?: string;
  label?: string;
  options: { id: number; name: string }[];
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

const CustomSelectOptions = ({ id, label, options, onChange, value, className }: CustomSelectOptionsProps) => {
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray_dark ">
          {label}
        </label>
      )}
      <select
        id={id}
        value={selectedValue}
        onChange={handleChange}
        className={`bg-white border border-primary text-gray_dark text-sm rounded-lg focus:border-primary outline-none block w-full p-2.5 ${className}`}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectOptions;
