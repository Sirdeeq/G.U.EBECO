import React from "react";

export default function CustomForm({ formData, darkMode }) {
  const getInputClasses = () => {
    let inputClasses = "w-full rounded-md focus:ring focus:ri";
    if (darkMode) {
      inputClasses += " dark:border-gray-700 dark:text-gray-900";
    }
    return inputClasses;
  };

  return (
    <div className="flex flex-col items-center">
      <section
        className={`p-6 ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-50" : ""
        }`}
      >
        <div className="flex flex-col items-center mb-8">
          <p className="text-2xl font-medium">{formData.title}</p>
          <p className="text-sm text-gray-500">{formData.description}</p>
        </div>
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          {formData.fields.map((field, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm ${
                darkMode ? "dark:bg-gray-900" : ""
              }`}
            >
              <label htmlFor={field.id} className="text-sm">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className={getInputClasses()}
              />
            </div>
          ))}
        </form>
      </section>
    </div>
  );
}
