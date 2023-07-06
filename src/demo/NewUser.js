import React, { useState } from 'react';
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';

export default function NewUser() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        address: '',
        additionalInfo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <div>
            <div className="p-5 m-8 border shadow-sm ">
                <CustomButton
                    type="button"
                    color="bg-violet-400"
                    buttonText="Back"
                    onClick={() => navigate(-1)}
                />
                <h1 style={{ fontSize: '30px' }} className="text-lg font-bold leading-7 text-center text-violet-400">
                    Create New User
                </h1>
                <div className="p-3 m-5 shadow border">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-white text-sm font-medium leading-6 text-gray-900">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={userData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-white text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={userData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="phone" className="block text-white text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={userData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="birthDate" className="block text-white text-sm font-medium leading-6 text-gray-900">
                                Date of Birth
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="birthDate"
                                    id="birthDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={userData.birthDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="address" className="block text-white text-sm font-medium leading-6 text-gray-900">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={userData.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="additionalInfo" className="block text-white text-sm font-medium leading-6 text-gray-900">
                                Additional Information
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="additionalInfo"
                                    id="additionalInfo"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={userData.additionalInfo}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-full">
                            <center>
                                <CustomButton type="button" color="bg-green-600" buttonText="Submit" onClick={handleSubmit} />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}