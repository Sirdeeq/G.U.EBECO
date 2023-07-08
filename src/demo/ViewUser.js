import React, { useState } from 'react';
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';

const ViewUser = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [employee, setEmployee] = useState({
        name: 'John Doe',
        position: 'Software Developer',
        department: 'Engineering',
        email: 'johndoe@example.com',
        phone: '1234567890',
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        // Perform update logic here
        console.log('Updated employee:', employee);
        toast.success(`Successfully updated ${employee.name}`)

        setIsEditing(false)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
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
            />
            <div className="max-w-md mx-auto bg-slate-900 rounded-md shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Name:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={employee.name}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{employee.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Position:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="position"
                            value={employee.position}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{employee.position}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Department:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{employee.department}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Email:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{employee.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-purple-400 font-extrabold mb-1">Phone:</label>
                    {isEditing ? (
                        <input
                            type="tel"
                            name="phone"
                            value={employee.phone}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-1.5 text-black"
                        />
                    ) : (
                        <p>{employee.phone}</p>
                    )}
                </div>
                <div className="flex justify-center mt-4">
                    {isEditing ? (
                        <CustomButton
                            type="button"
                            color="bg-violet-400"
                            buttonText="Update"
                            onClick={handleUpdate}
                        />
                    ) : (
                        <CustomButton
                            type="button"
                            color="bg-violet-400"
                            buttonText="Edit"
                            onClick={handleEdit}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewUser;
