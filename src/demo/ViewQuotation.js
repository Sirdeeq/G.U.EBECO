import React, { useState } from 'react';

const ViewQuotation = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [quotation, setQuotation] = useState({
        customerName: 'John Doe',
        customerNumber: '1234567890',
        siteAddress: '123 Main St, City, Country',
        date: '2023-07-07',
        costSheet: [
            { item: 'Item 1', price: 100 },
            { item: 'Item 2', price: 200 },
            { item: 'Item 3', price: 300 },
        ],
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        // Perform update logic here
        console.log('Updated quotation:', quotation);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuotation((prevQuotation) => ({
            ...prevQuotation,
            [name]: value,
        }));
    };

    return (
        <div className="p-5 m-8 border shadow-sm">

            <div className="max-w-md mx-auto bg-slate-900 rounded-md shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Quotation Information</h2>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Customer Name:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="customerName"
                            value={quotation.customerName}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{quotation.customerName}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Customer Number:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="customerNumber"
                            value={quotation.customerNumber}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{quotation.customerNumber}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Site Address:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="siteAddress"
                            value={quotation.siteAddress}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{quotation.siteAddress}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Date:</label>
                    {isEditing ? (
                        <input
                            type="date"
                            name="date"
                            value={quotation.date}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{quotation.date}</p>
                    )}
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Cost Sheet</h3>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="py-2">Item</th>
                                <th className="py-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quotation.costSheet.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2">{item.item}</td>
                                    <td className="py-2">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-4">
                    {isEditing ? (
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    )}
                    <button
                        type="button"
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                        onClick={() => console.log('Dummy button clicked')}
                    >
                        Dummy Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewQuotation;
