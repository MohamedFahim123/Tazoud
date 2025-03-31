import { FormikHandlers } from "formik";

interface CustomSelectOptionsProps {
  id?: string;
  label?: string;
  options: { id: number; name: string }[];
  onChange?: FormikHandlers["handleChange"];
  value?: string;
  className?: string;
}

const CustomSelectOptions = ({
  id,
  label,
  options,
  onChange,
  value,
  className,
}: CustomSelectOptionsProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray_dark "
        >
          {label}
        </label>
      )}
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange ? onChange : () => {}}
        className={`bg-white border border-primary text-gray_dark text-sm rounded-lg focus:border-primary outline-none block w-full p-2.5 ${className}`}
      >
        {label === "Sub Category" ? (
          <option value="">
            Add {label}
          </option>
        ) : (
          <option value="" disabled>
            Add {label}
          </option>
        )}
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
