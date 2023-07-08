import React from 'react'
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';
import CustomDisplayTable from '../component/democomponent/table/CustomDisplayTable';

export default function Users() {
    const navigate = useNavigate();
    const headers = ["Name", "Role", "Phone Number"];
    const data = [
        { name: "John Doe", role: "Manager", phoneNumber: "1234567890" },
        { name: "Jane Smith", role: "Supervisor", phoneNumber: "9876543210" },
    ];
    const handleView = (rowIndex) => {
        // Handle View logic here
        console.log("View clicked for row", rowIndex);
        navigate('/view/user-details', { state: { rowIndex } });
    };
    const goToNewUser = () => {
        navigate('/new-user');
      };
    return (
        <div>
            <div className='p-5 m-8 border shadow-sm'>
                <CustomButton
                    type="button"
                    color="bg-violet-400"
                    buttonText="Create New user"
                    onClick={goToNewUser}
                />
                <h1
                    style={{ fontSize: "30px" }}
                    className="text-lg font-bold leading-7 text-center text-violet-400"
                >
                    Users
                </h1>
                <CustomDisplayTable
                    headers={headers}
                    data={data}
                    darkMode={true}
                    actionHeader={
                        <>
                            <CustomButton type="button" color="bg-blue-400" onClick={() => handleView(0)} buttonText="View" />
                            {/* <CustomButton type="button" color="bg-green-400" onClick={() => handleSave(0)} buttonText="Save" /> */}
                        </>
                    }
                />
            </div>
        </div>
    )
}
