import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../component/democomponent/form/CustomInput";
import CustomButton from "../component/democomponent/form/CustomButton";
import { useNavigate } from "react-router-dom";
import { fetchSavedData } from "../redux/action/action";
import ReportPDFComponent from "./ReportPDFComponent";
import ReactDOM from 'react-dom'; // Add this import
import html2pdf from 'html2pdf.js';
import { renderToStaticMarkup } from 'react-dom/server';



const ReportComponent = ({ savedData, fetchSavedData }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  useEffect(() => {
    fetchSavedData();
  }, [fetchSavedData]);

  const handleDownloadReport = () => {
    const dummyData = {
      name: 'John Doe',
      number: '123456',
      siteAddress: '123 Main St',
      personInChargeNumber: '7890',
      physicalMeasurementTakenBy: 'Jane Smith',
      textThenColor: 'Lorem Ipsum',
      jobOrder: 'Job Order 123',
      quotationNumber: 'Q-987',
      costSheetItems: [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
      ],
    };

    const options = {
      filename: 'report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    const element = <ReportPDFComponent data={dummyData} />;

    // Using html2pdf to generate and download the PDF
    html2pdf().set(options).from(element).save();
  };
  return (
    <div>
      <div className="p-5 m-8 border shadow-sm">
        <CustomButton
          type="button"
          color="bg-violet-400"
          buttonText="Back"
          onClick={() => navigate(-1)}
        />
        <h1
          style={{ fontSize: "30px" }}
          className="text-lg font-bold leading-7 text-center text-violet-400 text-gray-900"
        >
          Report
        </h1>
        <CustomInput
          darkMode={true}
          label="View Report by:"
          type="select"
          options={[
            { value: "job-name", label: "Job Name" },
            { value: "customer-name", label: "Customer Name" },
            { value: "quotation-number", label: "Quotation Number" },
            { value: "date", label: "Date" },
            { value: "bom", label: "Bill of Materials" },
          ]}
          colSpan="full"
          onChange={handleOptionChange}
        />

        <p>Selected Report Option: {selectedOption}</p>

        <div className="p-5 m-8 border shadow-sm">
          <h1
            style={{ fontSize: "20px" }}
            className="text-lg font-bold leading-7 text-center text-white text-gray-900"
          >
            Saved Data
          </h1>
          <CustomButton
            type="button"
            color="bg-blue-500"
            buttonText="Download Report"
            onClick={handleDownloadReport}
          />
          <div className="card">
            <div className="card-body grid grid-cols-2 gap-4">
              <div>
                <CustomInput
                  darkMode={false}
                  label="Job Name"
                  type="text"
                  value={savedData ? savedData.jobName : "No data"}
                  disabled
                />
              </div>
              <div>
                <CustomInput
                  darkMode={false}
                  label="Customer Name"
                  type="text"
                  value={savedData ? savedData.customerName : "No data"}
                  disabled
                />
              </div>
              <div>
                <CustomInput
                  darkMode={false}
                  label="Quotation Number"
                  type="text"
                  value={savedData ? savedData.quotationNumber : "No data"}
                  disabled
                />
              </div>
              <div>
                <CustomInput
                  darkMode={false}
                  label="Date"
                  type="text"
                  value={savedData ? savedData.date : "No data"}
                  disabled
                />
              </div>
              <div>
                <CustomInput
                  darkMode={false}
                  label="Bill of Materials"
                  type="text"
                  value={savedData ? savedData.bom : "No data"}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2>Total Cost Sheet Items</h2>
            <div className="card">
              <div className="card-body">
                {savedData && savedData.costSheet.length > 0 ? (
                  savedData.costSheet.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                      <div>
                        <CustomInput
                          darkMode={false}
                          label={`Item ${index + 1}`}
                          type="text"
                          value={item.itemName}
                          disabled
                        />
                      </div>
                      <div>
                        <CustomInput
                          darkMode={false}
                          label="Quantity"
                          type="text"
                          value={item.quantity}
                          disabled
                        />
                      </div>
                      <div>
                        <CustomInput
                          darkMode={false}
                          label="Price"
                          type="text"
                          value={item.price}
                          disabled
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No cost sheet items available</p>
                )}
              </div>
            </div>
          </div>

          {savedData && savedData.costSheet.length > 0 && (
            <div className="mt-4">
              <CustomButton
                type="button"
                color="bg-blue-500"
                buttonText="Download Report"
                onClick={handleDownloadReport}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedData: state.savedData,
});

const mapDispatchToProps = {
  fetchSavedData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportComponent);
