import React from 'react'
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';
import CustomDisplayTable from '../component/democomponent/table/CustomDisplayTable';

export default function Customers() {
  const navigate = useNavigate();
  const headers = ["Customer Name", "Status", "Phone Number"];
  const data = [
    { name: "John Doe", status: "existing", phoneNumber: "1234567890" },
    { name: "Jane Smith", status: "walk-in", phoneNumber: "9876543210" },
  ];
  const handleView = (rowIndex) => {
    // Handle View logic here
    console.log("View clicked for row", rowIndex);
    navigate('/view/customers-details', { state: { rowIndex } });
  };
  const goToNewCustomer = () => {
    navigate('/new-customer');
  };
  return (
    <div>
      <div className='p-5 m-8 border shadow-sm'>
        <CustomButton
          type="button"
          color="bg-violet-400"
          buttonText="Create New Customers"
          onClick={goToNewCustomer}
        />
        <h1
          style={{ fontSize: "30px" }}
          className="text-lg font-bold leading-7 text-center text-violet-400"
        >
          Customers
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
