import React, { useState } from 'react';
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';

const ViewCustomer = (props) => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [customer, setCustomer] = useState(
        props.customer || {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '1234567890',
            address: '123 Main St, City, Country',
        }
    );

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        // Perform update logic here
        console.log('Updated customer:', customer);
        toast.success(`Successfully updated ${customer.name}`)


        // Switch back to non-editing mode
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    return (
        <div className="p-5 m-8 border shadow-sm">
            <CustomButton
                type="button"
                color="bg-violet-400"
                buttonText="Back"
                onClick={() => navigate(-1)}
                className="ml-2"
            />
            <div className="max-w-md mx-auto bg-slate-900 rounded-md shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Name:</label>
                    {isEditing ? (
                        <div className="sm:col-span-full">
                            <input
                                type="text"
                                name="name"
                                value={customer.name}
                                onChange={handleChange}
                                className="border border-gray-400 rounded-md p-1.5 text-black"
                            />
                        </div>
                    ) : (
                        <p>{customer.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Email:</label>
                    {isEditing ? (
                        <div className="sm:col-span-full">
                            <input
                                type="email"
                                name="email"
                                value={customer.email}
                                onChange={handleChange}
                                className="border border-gray-400 rounded-md p-1.5 text-black"
                            />
                        </div>
                    ) : (
                        <p>{customer.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Phone:</label>
                    {isEditing ? (
                        <div className="sm:col-span-full">
                            <input
                                type="tel"
                                name="phone"
                                value={customer.phone}
                                onChange={handleChange}
                                className="border border-gray-400 rounded-md p-1.5 text-black"
                            />
                        </div>
                    ) : (
                        <p>{customer.phone}</p>
                    )}
                </div>
                <div>
                    <label className="block text-purple-400 font-extrabold mb-1">Address:</label>
                    {isEditing ? (
                        <div className="sm:col-span-full">
                            <textarea
                                name="address"
                                value={customer.address}
                                onChange={handleChange}
                                className="border border-gray-400 rounded-md p-1.5 text-black"
                            />
                        </div>
                    ) : (
                        <p>{customer.address}</p>
                    )}
                </div>
                <div className="flex justify-center mt-4">
                    <CustomButton
                        type="button"
                        color="bg-violet-400"
                        buttonText={isEditing ? 'Update' : 'Edit'}
                        onClick={isEditing ? handleUpdate : handleEdit}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewCustomer;
