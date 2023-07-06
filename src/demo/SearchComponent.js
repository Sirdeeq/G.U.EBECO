import React, { useState, useEffect } from 'react';
import ReportComponent from './ReportComponent';

export default function SearchComponent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    const handleSearch = async () => {
        try {
            // Perform search logic based on searchQuery
            // Replace the following code with your actual search implementation
            const response = await fetch(`/api/search?query=${searchQuery}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error while performing search:', error);
        }
    };

    const handleViewReport = (result) => {
        setSelectedResult(result);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSearch();
        }
    };

    useEffect(() => {
        // Load initial search results (dummy data)
        setSearchResults([
            {
                quotationNumber: 'Q001',
                customerName: 'John Doe',
                date: '2022-08-15',
            },
            {
                quotationNumber: 'Q002',
                customerName: 'Jane Smith',
                date: '2022-08-16',
            },
            {
                quotationNumber: 'Q001',
                customerName: 'John Doe',
                date: '2022-08-15',
            },
        ]);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-md mt-8">
                <div className="flex items-center border-b border-gray-300">
                    <input
                        type="text"
                        placeholder="Search by quotation number or customer name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {searchResults.map((result, index) => (
                    <div
                        key={index}
                        className="flex-1 p-4 border border-gray-300 rounded shadow"
                    >
                        <h3 className="text-lg font-bold">
                            Quotation Number: {result.quotationNumber}
                        </h3>
                        <p className="text-gray-600">Customer Name: {result.customerName}</p>
                        <p className="text-gray-600">Date: {result.date}</p>
                        <button
                            onClick={() => handleViewReport(result)}
                            className="mt-4 px-4 py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none"
                        >
                            View
                        </button>
                    </div>
                ))}
            </div>
            {selectedResult && <ReportComponent result={selectedResult} />}
        </div>
    );
}
