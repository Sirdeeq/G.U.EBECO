import React from 'react'
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';
import CustomDisplayTable from '../component/democomponent/table/CustomDisplayTable';

export default function Quotations() {
    const navigate = useNavigate();
    const headers = ["Quotation ID", "Name", "Date"];
    const data = [
        { quotation: "G/U/EBECO/39292", name: "ABDULSALAM", date: "23/12/2022" },
    ];
    const handleView = (rowIndex) => {
        // Handle View logic here
        console.log("View clicked for row", rowIndex);
    };
    const goToNewQuotations = () => {
        navigate('/create-new-quotation');
      };
    return (
        <div>
            <div className='p-5 m-8 border shadow-sm'>
                <CustomButton
                    type="button"
                    color="bg-violet-400"
                    buttonText="Create New Quotation"
                    onClick={goToNewQuotations}
                />
                <h1
                    style={{ fontSize: "30px" }}
                    className="text-lg font-bold leading-7 text-center text-violet-400"
                >
                   Quotations
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
