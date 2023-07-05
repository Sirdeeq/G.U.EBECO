import React from "react";

const CustomDisplayTable = ({ headers, data, actionHeader }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
          {actionHeader && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
            {actionHeader && <td>{actionHeader}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomDisplayTable;
