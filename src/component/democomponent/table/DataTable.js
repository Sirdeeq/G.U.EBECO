import React, { useState } from "react";
import { BiSortUp, BiSortDown } from "react-icons/bi";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
import CustomButton from "../form/CustomButton";

const DataTable = ({ headers, data, actionHeader, darkMode, onClick  }) => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortAscending, setSortAscending] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const getTableClasses = () => {
        let tableClasses = "border w-full";
        if (darkMode) {
            tableClasses += " bg-gray-800 text-gray-100";
        } else {
            tableClasses += " bg-white text-gray-700";
        }
        return tableClasses;
    };

    const getCellClasses = (isActionColumn) => {
        let cellClasses = "border px-4 py-2 ";
        if (darkMode) {
            cellClasses += " border-gray-700";
        } else {
            cellClasses += " border-gray-300";
        }
        if (isActionColumn) {
            cellClasses += " flex items-center justify-center";
        }
        return cellClasses;
    };

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortAscending(!sortAscending);
        } else {
            setSortColumn(column);
            setSortAscending(true);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const sortedData = () => {
        if (!sortColumn) {
            return data;
        }

        const sorted = data.slice().sort((a, b) => {
            const valA = a[sortColumn];
            const valB = b[sortColumn];

            if (typeof valA === "string" && typeof valB === "string") {
                return sortAscending ? valA.localeCompare(valB) : valB.localeCompare(valA);
            } else {
                return sortAscending ? valA - valB : valB - valA;
            }
        });

        return sorted;
    };

    const filteredData = () => {
        return sortedData().filter((row) =>
            Object.values(row).some((cell) => {
                if (typeof cell !== "string") {
                    cell = String(cell);
                }
                return cell.toLowerCase().includes(searchQuery.toLowerCase());
            })
        );
    };

   
    return (
        <table className={getTableClasses()}>
            <thead>
                <tr>
                    <th className={getCellClasses()} colSpan={headers.length + 1}>
                        <input
                            type="search"
                            placeholder="Search..."
                            className={`w-full border p-2 text-black ${darkMode ? "text-black" : "text-black"}`}
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </th>
                </tr>
                <tr>
                    <th className={getCellClasses()}></th>
                    {headers.map((header, index) => (
                        <th
                            key={index}
                            className={getCellClasses()}
                            onClick={() => handleSort(header)}
                        >
                            {sortColumn === header ? (
                                sortAscending ? (
                                    <BiSortUp className="mr-1 inline-block" />
                                ) : (
                                    <BiSortDown className="mr-1 inline-block" />
                                )
                            ) : null}
                            {header}
                        </th>
                    ))}
                    {actionHeader && <th className={getCellClasses(true)}>Action</th>}
                </tr>
            </thead>
            <tbody>
                {filteredData().map((row, index) => (
                    <tr key={index}>
                        <td className={getCellClasses()}>
                            {index + 1}
                        </td>
                        {Object.values(row).map((cell, cellIndex) => (
                            <td key={cellIndex} className={getCellClasses()}>
                                {cell}
                            </td>
                        ))}
                        {actionHeader && (
                            <td className={getCellClasses(true)}>
                                <CustomButton onClick={onClick} type="button" buttonText={<AiOutlineEye />} />
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
