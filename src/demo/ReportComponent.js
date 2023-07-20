import React, { useEffect, useState } from 'react';
import CustomButton from '../component/democomponent/form/CustomButton';
import { useNavigate } from 'react-router';
import DataTable from '../component/democomponent/table/DataTable';

export default function ReportComponent() {
  const navigate = useNavigate();

  // Sample data for the DataTable
  const headers = ["Name", "Age", "Location"];
  const data = [
    { Name: "John Doe", Age: 30, Location: "New York" },
    { Name: "Jane Smith", Age: 25, Location: "San Francisco" },
    { Name: "Bob Johnson", Age: 40, Location: "Los Angeles" },
    // Add more data rows as needed
  ];

  const dummyQuotationData = [
    {
      "Quotation Number": "Q1001",
      "Date": "2023-07-20",
      "Site Address": "123 Main St, New York",
      "Job Description": "Renovation",
      "Person": "John Doe"
    },
    {
      "Quotation Number": "Q1002",
      "Date": "2023-07-21",
      "Site Address": "456 Oak Ave, San Francisco",
      "Job Description": "Painting",
      "Person": "Jane Smith"
    },
    {
      "Quotation Number": "Q1003",
      "Date": "2023-07-22",
      "Site Address": "789 Maple Rd, Los Angeles",
      "Job Description": "Carpentry",
      "Person": "Bob Johnson"
    }
  ];
  const dummyCustomerData = [
    {
      "Customer Name": "John Doe",
      "Job Description": "Renovation",
      "Quotation Number": "Q1001",
      "Value of Jobs": "$5000",
      "Phone Number": "123-456-7890",
    },
    {
      "Customer Name": "Jane Smith",
      "Job Description": "Painting",
      "Quotation Number": "Q1002",
      "Value of Jobs": "$3000",
      "Phone Number": "987-654-3210",
    },
    {
      "Customer Name": "Bob Johnson",
      "Job Description": "Carpentry",
      "Quotation Number": "Q1003",
      "Value of Jobs": "$4000",
      "Phone Number": "555-555-5555",
    },
  ];

  const dummyJobTitleData = [
    {
      Quantity: 5,
      Description: "Plumbing Services",
      "Sales Value": "$3000",
      "Cost Value": "$1500",
      "Quotation Number": "Q1004",
      "Customer Name": "Michael Johnson",
    },
    {
      Quantity: 10,
      Description: "Electrical Services",
      "Sales Value": "$5000",
      "Cost Value": "$2500",
      "Quotation Number": "Q1005",
      "Customer Name": "Emily Adams",
    },
    // Add more job title data as needed
  ];

  const dummyMaterialsData = [
    {
      Quantity: 50,
      Details: "Fabric material for chairs",
      "Unit Price": "$20",
      "Customer Name": "John Doe",
      "Quotation Number": "Q1006",
    },
    {
      Quantity: 30,
      Details: "Wooden boards for tables",
      "Unit Price": "$30",
      "Customer Name": "Jane Smith",
      "Quotation Number": "Q1007",
    },
    // Add more materials data as needed
  ];

  const dummyDateData = [
    {
      Date: "2023-07-25",
      "Customer Name": "John Doe",
      "Person Uncharged": "Michael Johnson",
      "Site Address": "101 First St, Chicago",
      "Quotation Number": "Q1008",
    },
    {
      Date: "2023-07-26",
      "Customer Name": "Jane Smith",
      "Person Uncharged": "Emily Adams",
      "Site Address": "555 Fifth Ave, Seattle",
      "Quotation Number": "Q1009",
    },
    // Add more date data as needed
  ];

  const [viewReportBy, setViewReportBy] = useState("");
  const [furnitureType, setFurnitureType] = useState("");
  const [material, setMaterial] = useState("");
  const [quotationData, setQuotationData] = useState([]);

  useEffect(() => {
    if (viewReportBy === "quotation_number") {
      // Set dummy data for the DataTable when "View by Quotation Number" is selected
      setQuotationData(dummyQuotationData);
    }
  }, [viewReportBy]);

  const getFilteredData = () => {
    let filteredData = [...data];

    if (viewReportBy === "customer_name") {
      filteredData = dummyCustomerData; // Use dummy data for "customer_name" view
    } else if (viewReportBy === "quotation_number") {
      filteredData = quotationData; // Use fetched quotation data
    } else if (viewReportBy === "job_title") {
      filteredData = dummyJobTitleData; // Use dummy data for "job_title" view
    } else if (viewReportBy === "materials") {
      filteredData = dummyMaterialsData; // Use dummy data for "materials" view
    }
    else if (viewReportBy === "date") {
      filteredData = dummyDateData; // Use dummy data for "materials" view
    }

    return filteredData;
  };

  const handleViewQuotation = (quotationData) => {
    console.log("View Quotation Data:", quotationData);
    navigate('/view/quotation-details')
  };
  return (
    <div>
      <div className="p-5 m-8 border shadow-sm">
        <h1
          style={{ fontSize: "30px" }}
          className="text-lg font-bold leading-7 text-center text-violet-400 text-gray-900"
        >
          Report
        </h1>

        {/* View Report By Select */}
        <div className="my-4">
          <label className="mr-4">View Report By:</label>
          <select
            className="border p-1 bg-slate-900 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            value={viewReportBy}
            onChange={(e) => setViewReportBy(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="customer_name">Customer Name</option>
            <option value="quotation_number">Quotation Number</option>
            <option value="job_title">Job Title</option>
            <option value="materials">Materials</option>
            <option value="date">Date</option>
          </select>
        </div>

        {/* By Furniture Type Select */}
        {viewReportBy === "job_title" && (
          <div className="my-4">
            <label className="mr-4">By Job Type:</label>
            <select
              className="border p-1 bg-slate-900 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              value={furnitureType}
              onChange={(e) => setFurnitureType(e.target.value)}
            >
              <option value="">Select a furniture type</option>
              <option value="table">Table</option>
              <option value="chairs">Chairs</option>
              <option value="wardrobe">Wardrobe</option>
              <option value="cabinets">Cabinets</option>
              <option value="others">Others</option>
            </select>
          </div>
        )}

        {/* By Material Select */}
        {viewReportBy === "materials" && (
          <div className="my-4">
            <label className="mr-4">By Material:</label>
            <select
              className="border p-1 bg-slate-900 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="">Select a material</option>
              <option value="fabrics">Fabrics</option>
              <option value="boards">Boards</option>
              <option value="door_handle">Door Handle</option>
              {/* Add more options as needed */}
            </select>
          </div>
        )}

        {/* DataTable */}
        {viewReportBy === "customer_name" && (
          <DataTable
            headers={["Customer Name", "Job Description", "Quotation Number", "Value of Jobs", "Phone Number"]}
            data={getFilteredData()}
            actionHeader="Action"
            darkMode={true}
            onClick={handleViewQuotation} // Set to true for dark mode, false for light mode
          />
        )}
        {viewReportBy === "quotation_number" && (
          <DataTable
            headers={["Quotation Number", "Date", "Site Address", "Job Description", "Person"]}
            data={getFilteredData()}
            actionHeader="Action"
            darkMode={true}
            onClick={handleViewQuotation} // Set to true for dark mode, false for light mode
          />
        )}
        {viewReportBy === "job_title" && (
          <DataTable
            headers={["Quantity", "Descrition", "Sales Value", "Cost Value", "Quotation Number", "Customer Name"]}
            data={getFilteredData()}
            actionHeader="Action"
            darkMode={true}
            onClick={handleViewQuotation} // Set to true for dark mode, false for light mode
          />
        )}
        {viewReportBy === "materials" && (
          <DataTable
            headers={["Quantity", "Details", "Unit Price", "Customer Name", "Quotation Number"]}
            data={getFilteredData()}
            actionHeader="Action"
            darkMode={true}
            onClick={handleViewQuotation} // Set to true for dark mode, false for light mode
          />
        )}
        {viewReportBy === "date" && (
          <DataTable
            headers={["Date", "Customer Name", "Person Uncharged", "Site Address", "Quotation Number"]}
            data={getFilteredData()}
            actionHeader="Action"
            darkMode={true}
            onClick={handleViewQuotation} // Set to true for dark mode, false for light mode
          />
        )}
      </div>

      {/* Call the DataTable component with the sample data */}
    </div>
  );
}
