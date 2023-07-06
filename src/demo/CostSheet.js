import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setQuotationNumber,
  setCustomerName,
  setJob,
  addCostSheetItem,
  removeCostSheetItem,
} from "../redux/action/action";
import CustomButton from "../component/democomponent/form/CustomButton";
import CustomTable from "../component/democomponent/table/CustomTable";
import CustomInput from "../component/democomponent/form/CustomInput";

const CostSheet = ({
  quotationNumber,
  customerName,
  job,
  costSheet,
  setQuotationNumber,
  setCustomerName,
  setJob,
  addCostSheetItem,
  removeCostSheetItem,
}) => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState("");

  const headers = [
    { key: "name", label: "Name", input: true },
    { key: "quantity", label: "Quantity", input: true },
    { key: "price", label: "Price", input: true },
    { key: "total", label: "Total" },
  ];

  const data = [
    { name: "Item 1", quantity: 2, price: 10, total: 20 },
    { name: "Item 2", quantity: 3, price: 15, total: 45 },
    { name: "Item 3", quantity: 4, price: 8, total: 32 },
  ];

  const calculateTotal = () => {
    const total = data.reduce((sum, row) => sum + row.quantity * row.price, 0);
    return total;
  };

  const saveDataAndNavigate = (data) => {
    // Save data to local storage
    localStorage.setItem("data", JSON.stringify(data));

    // Navigate to the report component
    navigate("/report");
  };

  const handleButtonClick = () => {
    // Dispatch actions to update the Redux store
    setQuotationNumber("YOUR_QUOTATION_NUMBER");
    setCustomerName("YOUR_CUSTOMER_NAME");
    setJob("YOUR_SELECTED_JOB");
    addCostSheetItem(
      "YOUR_ITEM_ID",
      "YOUR_ITEM_NAME",
      "YOUR_QUANTITY",
      "YOUR_PRICE"
    );

    // Navigate to the report component
    navigate("/report");
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
        <h1
          style={{ fontSize: "30px" }}
          className="text-lg font-bold leading-7 text-center text-violet-400"
        >
          Cost Sheet
        </h1>
        <div className="p-5 m-8 border shadow-sm  flex">
          <div className="border shadow-sm flex-1 p-4">
            <p className="text-lg font-semibold">Display Quotation Number</p>
          </div>
          <div className="border shadow-sm flex-1 p-4">
            <p className="text-lg font-semibold">Display Customer Name</p>
          </div>
        </div>
        <div className="p-2 m-8">
          <div className="p-4 m-8 flex">
            <div className=" flex-1">
              <CustomInput
                darkMode={true}
                label="List of Jobs"
                type="select"
                options={[
                  { value: "select", label: "-- Select Job --" },
                  { value: "inventory-analyst", label: "Inventory Analyst" },
                  { value: "warehouse-manager", label: "Warehouse Manager" },
                  { value: "stock-controller", label: "Stock Controller" },
                  {
                    value: "supply-chain-specialist",
                    label: "Supply Chain Specialist",
                  },
                  {
                    value: "logistics-coordinator",
                    label: "Logistics Coordinator",
                  },
                  { value: "purchasing-officer", label: "Purchasing Officer" },
                  { value: "demand-planner", label: "Demand Planner" },
                  { value: "inventory-manager", label: "Inventory Manager" },
                  {
                    value: "operations-supervisor",
                    label: "Operations Supervisor",
                  },
                  {
                    value: "shipping-and-receiving-clerk",
                    label: "Shipping and Receiving Clerk",
                  },
                ]}
              />
            </div>
            <div className=" flex-1">
              <CustomInput darkMode={true} type="date" label="Date of issue" />
            </div>
          </div>
          <div className=" col-span-full">
            <CustomInput
              darkMode={true}
              label="Recieving By"
              type="select"
              options={[
                { value: "select", label: "-- Select Customer --" },
                { value: "ahmed", label: "Ahmed Hassan" },
                { value: "fatima", label: "Fatima Ali" },
                { value: "muhammad", label: "Muhammad Ahmed" },
                { value: "aisha", label: "Aisha Khan" },
                { value: "ali", label: "Ali Malik" },
                { value: "zainab", label: "Zainab Hussain" },
                { value: "yusuf", label: "Yusuf Rahman" },
                { value: "maryam", label: "Maryam Khan" },
                { value: "ibrahim", label: "Ibrahim Ali" },
                { value: "sarah", label: "Sarah Ahmed" },
              ]}
            />
          </div>
        </div>

        <div className="p-5 m-8 border shadow-sm ">
          <CustomTable
            id="ID"
            headers={headers}
            data={data}
            darkMode={true}
            total={calculateTotal()}
          />
        </div>
        <center>
          <CustomButton
            type="button"
            buttonText="Submit"
            onClick={handleButtonClick}
            color="bg-violet-400"
          />
        </center>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  quotationNumber: state.quotationNumber,
  customerName: state.customerName,
  job: state.job,
  costSheet: state.costSheet,
});

const mapDispatchToProps = {
  setQuotationNumber,
  setCustomerName,
  setJob,
  addCostSheetItem,
  removeCostSheetItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CostSheet);
