import React, { useState } from "react";

export default function SearchInput({ placeholder, darkMode, onChange }) {
  const [searchValue, setSearchValue] = useState("");

  const getInputClasses = () => {
    let inputClasses =
      "w-full px-4 py-2 rounded-md focus:outline-none shadow-sm";
    if (darkMode) {
      inputClasses +=
        " bg-gray-800 text-gray-100 placeholder-gray-400 focus:bg-gray-900 focus:border-violet-400";
    } else {
      inputClasses +=
        " bg-white text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-500";
    }
    return inputClasses;
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    onChange(value);
  };

  return (
    <div>
      <fieldset className={`w-full border ${darkMode ? "text-gray-100" : ""}`}>
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative">
          {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className={`w-5 h-5 ${
                darkMode ? "text-gray-100" : "text-gray-400"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.5 15.5l5 5m-5-5l-5 5M15.5 8.5A7 7 0 119.56 5"
              />
            </svg>
          </span> */}
          <input
            type="search"
            name="Search"
            placeholder={placeholder}
            className={getInputClasses()}
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
    </div>
  );
}
