import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom if you're using it for navigation

export default function CustomButton({
  type,
  color,
  darkMode,
  buttonText,
  bannerText,
  onClick,
}) {
  // const navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    // Execute the passed onClick function (if provided)
    if (onClick) {
      onClick();
    }
  };

  const getButtonClasses = () => {
    let buttonClasses = "px-8 py-3 font-semibold rounded-full";
    if (darkMode) {
      buttonClasses += " dark:bg-gray-100 dark:text-gray-800";
    }
    return buttonClasses;
  };

  const getBannerClasses = () => {
    let bannerClasses =
      "relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded";
    if (darkMode) {
      bannerClasses += " dark:bg-gray-100 dark:text-gray-900";
    }
    return bannerClasses;
  };

  const getCaretButtonClasses = () => {
    let caretButtonClasses = "px-8 py-3";
    if (darkMode) {
      caretButtonClasses += " dark:bg-violet-400 dark:text-gray-800";
    }
    return caretButtonClasses;
  };

  return (
    <div>
      {type === "button" && (
        <button
          type="button"
          className={`${getButtonClasses()} ${color}`}
          onClick={handleButtonClick} // Add onClick to the button element
        >
          {buttonText}
        </button>
      )}

      {type === "buttonBanner" && (
        <button
          type="button"
          className={`${getBannerClasses()} ${color}`}
          onClick={handleButtonClick} // Add onClick to the button element
        >
          {buttonText}
          <span
            className={`absolute top-0 right-0 px-5 py-1 text-xs tracking-tight text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 ${
              darkMode ? "dark:bg-violet-400" : "bg-violet-400"
            }`}
          >
            {bannerText}
          </span>
        </button>
      )}

      {type === "buttonDropdown" && (
        <div
          className={`inline-flex items-center divide-x rounded ${
            darkMode ? "dark:bg-violet-400 dark:text-gray-800" : ""
          }`}
        >
          <button
            type="button"
            className={`${getCaretButtonClasses()} ${color}`}
          >
            Caret
          </button>
          <button type="button" title="Toggle dropdown" className="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
