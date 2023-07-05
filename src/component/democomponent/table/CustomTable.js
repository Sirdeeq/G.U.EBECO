import React, { useState } from "react";

const CustomTable = ({ id, headers, data, darkMode }) => {
  const [rows, setRows] = useState(data);

  const handleAddRow = () => {
    const newRow = headers.reduce((obj, header) => {
      obj[header.key] = header.key === "total" ? 0 : ""; // Set total as 0 for new row
      return obj;
    }, {});
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleInputChange = (e, rowIndex, key) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][key] = e.target.value;
    if (key === "quantity" || key === "price") {
      const quantity = parseFloat(updatedRows[rowIndex]["quantity"]) || 0;
      const price = parseFloat(updatedRows[rowIndex]["price"]) || 0;
      updatedRows[rowIndex]["total"] = quantity * price; // Update total based on quantity and price
    }
    setRows(updatedRows);
  };

  const handleDeleteRow = (rowIndex) => {
    const updatedRows = [...rows];
    updatedRows.splice(rowIndex, 1);
    setRows(updatedRows);
  };

  const handleSave = () => {
    // Implement the save functionality here
    console.log("Saving table data:", rows);
  };

  const getTableClasses = () => {
    let inputClasses =
      "w-full px-4 py-2 border rounded-md focus:border-blue-500 shadow-sm";
    if (darkMode) {
      inputClasses +=
        " bg-gray-800 text-gray-100 placeholder-gray-400 focus:bg-gray-900 focus:border-violet-400";
    } else {
      inputClasses +=
        " bg-white text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-500";
    }
    return inputClasses;
  };

  return (
    <div className={`table-container ${darkMode ? "dark" : ""}`}>
      <table
        className={`min-w-full ${
          darkMode ? "bg-gray-800" : "bg-white"
        } border border-gray-300`}
      >
        {/* Table header */}
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">{id}</th>
            {headers.map((header) => (
              <th
                key={header.key}
                className="py-2 px-4 border-b text-left border-gray-300"
              >
                {header.label}
              </th>
            ))}
            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-4 border-b border-gray-300">
                {rowIndex + 1}
              </td>
              {headers.map((header) => (
                <td
                  key={header.key}
                  className="py-2 px-4 border-b border-gray-300"
                >
                  {header.input ? (
                    <input
                      type="text"
                      value={row[header.key]}
                      onChange={(e) =>
                        handleInputChange(e, rowIndex, header.key)
                      }
                      className={getTableClasses()}
                    />
                  ) : (
                    row[header.key]
                  )}
                </td>
              ))}
              <td className="py-3 px-4 border-b border-gray-300">
                <button
                  type="button"
                  onClick={() => handleDeleteRow(rowIndex)}
                  className={`text-white hover:text-white ${
                    darkMode
                      ? "bg-red-600 text-white  hover:bg-red-900"
                      : "bg-red-600 text-white hover:bg-red-900"
                  } px-4 py-2 rounded `}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        {/* Table footer */}
        <tfoot>
          <tr>
            <td colSpan={headers.length + 2} className="py-2 px-4">
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleAddRow}
                  className={`py-2 px-4 ${
                    darkMode ? "bg-blue-500" : "bg-blue-500"
                  } text-white rounded hover:bg-blue-700`}
                >
                  Add Row
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className={`py-2 px-4 ${
                    darkMode ? "bg-green-500" : "bg-green-500"
                  } text-white rounded hover:bg-green-700`}
                >
                  Save
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={headers.length} className="text-right py-2 px-4">
              Total:
            </td>
            <td className="py-2 px-4 border-t border-gray-300">
              {rows.reduce((sum, row) => sum + row.total, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CustomTable;
