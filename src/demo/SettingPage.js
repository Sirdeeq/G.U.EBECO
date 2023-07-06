import React, { useState } from 'react';

const SettingsPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleAdminCheckbox = (event) => {
        setIsAdmin(event.target.checked);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="adminCheckbox"
                    checked={isAdmin}
                    onChange={handleAdminCheckbox}
                    className="rounded border-gray-300 text-violet-600 shadow-sm focus:border-violet-400 focus:ring focus:ring-violet-200 focus:ring-opacity-50 mr-2"
                /> Admin
                <label htmlFor="adminCheckbox" className="text-gray-800">
                    Admin Functionality
                </label>
            </div>
            {isAdmin && (
                <div className="bg-green-100 text-green-800 border border-green-300 rounded p-4">
                    <h2 className="text-lg font-bold mb-2">Admin Privileges:</h2>
                    <ul>
                        <li>Create, edit, and delete inventory items</li>
                        <li>Manage inventory categories</li>
                        <li>Generate inventory reports</li>
                        <li>Assign user roles and permissions</li>
                        <li>Access advanced settings and configurations</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SettingsPage;
