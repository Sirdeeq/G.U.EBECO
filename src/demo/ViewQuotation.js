import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const ViewQuotation = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [quotation, setQuotation] = useState({
        customerName: 'John Doe',
        quotationNo: '005',
        customerNumber: '1234567890',
        siteAddress: '123 Main St, City, Country',
        date: '2023-07-07',
        deliveryDate: '',
        jobs: '', // Initial empty value for jobs
        costSheet: [
            { item: 'Item 1', price: 100 },
            { item: 'Item 2', price: 200 },
            { item: 'Item 3', price: 300 },
        ],
    });
    const [selectedJobs, setSelectedJobs] = useState(quotation.jobs || []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        console.log('Updated quotation:', quotation);
        toast.success(`Successfully updated ${quotation.quotationNo}`);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuotation((prevQuotation) => ({
            ...prevQuotation,
            [name]: value,
        }));
    };


    const handleJobsChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions || [], (option) => ({
            value: option.value,
            label: option.label,
        }));

        // const isOptionSelected = (option) => {
        //     return selectedJobs.some((selectedOption) => selectedOption.value === option.value);
        // };

        const updatedSelectedJobs = selectedOptions.filter((option) => {
            const isOptionSelected = selectedJobs.some((selectedOption) => selectedOption.value === option.value);
            return !isOptionSelected;
        });

        setSelectedJobs([...selectedJobs, ...updatedSelectedJobs]);
    };

    const handleCancelJob = (value) => {
        const updatedSelectedJobs = selectedJobs.filter((option) => option.value !== value);
        setSelectedJobs(updatedSelectedJobs);
    };

    // const jobOptions = [
    //     'Warehouse Manager',
    //     'Inventory Analyst',
    //     'Purchasing Coordinator',
    //     'Supply Chain Planner',
    //     'Inventory Control Specialist',
    //     'Materials Planner',
    //     'Logistics Coordinator',
    //     'Inventory Supervisor', 
    //     'Operations Manager',
    //     'Demand Planner',
    // ];

    return (
        <div className="p-5 m-8 border shadow-sm">
            <CustomButton
                type="button"
                color="bg-violet-400"
                buttonText={<AiOutlineArrowLeft />}
                onClick={() => navigate(-1)}
            />
            <div className="max-w-md mx-auto bg-slate-900 rounded-md shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Quotation Information</h2>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Quotation Number:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="quotationNo"
                            value={quotation.quotationNo}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{quotation.quotationNo}</p>
                    )}
                </div>
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
                    <label className="block font-bold mb-1">Jobs:</label>
                    {isEditing ? (
                        <div className="mt-2">
                            <div className="flex flex-wrap">
                                {selectedJobs.map((option) => (
                                    <div key={option.value} className="flex items-center mt-2 mr-2">
                                        <div className="px-2 py-1 bg-gray-900 rounded-md flex items-center">
                                            <span className="mr-1">{option.label}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleCancelJob(option.value)}
                                                className="text-red-600 hover:text-red-800 focus:text-red-800 focus:outline-none"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M13.06 5.94a.75.75 0 1 0-1.06 1.06L14.94 10l-2.94 2.94a.75.75 0 1 0 1.06 1.06L16 11.06l2.94 2.94a.75.75 0 0 0 1.06-1.06L17.06 10l2.94-2.94a.75.75 0 1 0-1.06-1.06L16 8.94l-2.94-2.94z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <select
                                id="jobs"
                                name="jobs"
                                autoComplete="jobs"
                                value={selectedJobs.map((option) => option.value)}
                                onChange={handleJobsChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>-- Select --</option>
                                <option value="Warehouse Manager">Warehouse Manager</option>
                                <option value="Inventory Analyst">Inventory Analyst</option>
                                <option value="Purchasing Coordinator">Purchasing Coordinator</option>
                                <option value="Supply Chain Planner">Supply Chain Planner</option>
                                <option value="Inventory Control Specialist">Inventory Control Specialist</option>
                                <option value="Materials Planner">Materials Planner</option>
                                <option value="Logistics Coordinator">Logistics Coordinator</option>
                                <option value="Inventory Supervisor">Inventory Supervisor</option>
                                <option value="Operations Manager">Operations Manager</option>
                                <option value="Demand Planner">Demand Planner</option>
                            </select>
                        </div>
                    ) : (
                        <div className="flex flex-wrap">
                            {selectedJobs.map((option) => (
                                <div key={option.value} className="flex items-center mt-2 mr-2">
                                    <div className="px-2 py-1 bg-gray-900 rounded-md flex items-center">
                                        <span className="mr-1">{option.label}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleCancelJob(option.value)}
                                            className="text-red-600 hover:text-red-800 focus:text-red-800 focus:outline-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M13.06 5.94a.75.75 0 1 0-1.06 1.06L14.94 10l-2.94 2.94a.75.75 0 1 0 1.06 1.06L16 11.06l2.94 2.94a.75.75 0 0 0 1.06-1.06L17.06 10l2.94-2.94a.75.75 0 1 0-1.06-1.06L16 8.94l-2.94-2.94z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
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
