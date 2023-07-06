import React from "react";

const CustomDisplayTable = ({ headers, data, actionHeader, darkMode }) => {
  const getTableClasses = () => {
    let tableClasses = "border w-full";
    if (darkMode) {
      tableClasses += " bg-gray-800 text-gray-100";
    } else {
      tableClasses += " bg-white text-gray-700";
    }
    return tableClasses;
  };

  const getCellClasses = () => {
    let cellClasses = "border px-4 py-2 ";
    if (darkMode) {
      cellClasses += " border-gray-700";
    } else {
      cellClasses += " border-gray-300";
    }
    return cellClasses;
  };

  return (
    <table className={getTableClasses()}>
      <thead>
        <tr>
          <th className={getCellClasses()}>ID</th>
          {headers.map((header) => (
            <th key={header} className={getCellClasses()}>
              {header}
            </th>
          ))}
          {actionHeader && (
            <th className={getCellClasses(true)}>Action</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className={getCellClasses()}>{index + 1}</td>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className={getCellClasses()}>
                {cell}
              </td>
            ))}
            {actionHeader && <td className={getCellClasses()}>{actionHeader}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomDisplayTable;
