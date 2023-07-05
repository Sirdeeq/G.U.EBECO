import React from "react";

const CustomInput = ({
  darkMode,
  label,
  placeholder,
  type,
  id,
  onChange,
  value,
  options,
  disabled, // Add disabled prop
}) => {
  const getInputClasses = () => {
    let inputClasses =
      "w-full px-4 py-2 border rounded-md focus:border-blue-500 shadow-sm";
    if (darkMode) {
      inputClasses +=
        " bg-gray-800 text-gray-100 placeholder-gray-400 focus:bg-gray-900 focus:border-violet-400";
      if (disabled) {
        inputClasses += " bg-secondary-400 cursor-not-allowed";
      }
    } else {
      inputClasses +=
        " bg-white text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-500";
    }
    return inputClasses;
  };

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  console.log("Type:", type);
  console.log("ID:", id);
  console.log("Value:", value);

  return (
    <div className="flex flex-col items-center">
      <section
        className={`p-6 ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-50" : ""
        }`}
      >
        <div
          className={`col-span-full sm:col-span-2 ${
            disabled ? "opacity-50" : ""
          }`}
        >
          <label htmlFor={id} className="text-sm">
            {label}
          </label>
          {type === "textarea" ? (
            <textarea
              id={id}
              placeholder={placeholder}
              className={getInputClasses()}
              onChange={handleInputChange}
              value={value}
            />
          ) : type === "select" ? (
            <select
              id={id}
              className={getInputClasses()}
              onChange={handleInputChange}
              value={value}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              className={getInputClasses()}
              onChange={handleInputChange}
              value={value}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CustomInput;
