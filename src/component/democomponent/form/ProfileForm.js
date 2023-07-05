import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setQuotation } from "../../../redux/action/action";

export default function ProfileForm() {
  const quotation = useSelector((state) => state.quotation);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSaveAndGoBack = () => {
    console.log("Saving data...");
    const updatedQuotation = {
      ...quotation,
      questionNumber: document.getElementById("question-no").value,
      selectDate: document.getElementById("selectDate").value,
      customerName: document.getElementById("customerName").value,
      jobs: document.getElementById("jobs").value,
      jobDeliveryDate: document.getElementById("jobDeliveryDate").value,
      deliveryPersonName: document.getElementById("deliveryPersonName").value,
      amount: document.getElementById("amount").value,
    };
    dispatch(setQuotation(updatedQuotation));
    localStorage.setItem("quotationData", JSON.stringify(updatedQuotation));
    navigate(-1);
  };

  const handleSaveAndRoute = () => {
    console.log("Saving data...");
    const updatedQuotation = {
      ...quotation,
      questionNumber: document.getElementById("question-no").value,
      selectDate: document.getElementById("selectDate").value,
      customerName: document.getElementById("customerName").value,
      jobs: document.getElementById("jobs").value,
      jobDeliveryDate: document.getElementById("jobDeliveryDate").value,
      deliveryPersonName: document.getElementById("deliveryPersonName").value,
      amount: document.getElementById("amount").value,
    };
    dispatch(setQuotation(updatedQuotation));
    localStorage.setItem("quotationData", JSON.stringify(updatedQuotation));
    navigate("/cost-sheet");
  };

  const handleQuestionNumberChange = (e) => {
    dispatch(setQuotation({ questionNumber: e.target.value }));
  };

  const handleSelectDateChange = (e) => {
    dispatch(setQuotation({ selectDate: e.target.value }));
  };

  const handleCustomerNameChange = (e) => {
    dispatch(setQuotation({ customerName: e.target.value }));
  };

  const handleJobsChange = (e) => {
    dispatch(setQuotation({ jobs: e.target.value }));
  };

  const handleJobDeliveryDateChange = (e) => {
    dispatch(setQuotation({ jobDeliveryDate: e.target.value }));
  };

  const handleDeliveryPersonNameChange = (e) => {
    dispatch(setQuotation({ deliveryPersonName: e.target.value }));
  };

  const handleAmountChange = (e) => {
    dispatch(setQuotation({ amount: e.target.value }));
  };

  return (
    <form>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-white text-center">
          Add New Questions
        </h2>
        {/* <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p> */}

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="question-no"
              className="block text-white text-sm font-medium leading-6 text-gray-900 "
            >
              Add Question Number
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="question-no"
                id="question-no"
                autoComplete="question-no"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={quotation.questionNumber}
                onChange={handleQuestionNumberChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="selectDate"
              className="block text-white text-sm font-medium leading-6 text-gray-900"
            >
              Select Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="selectDate"
                id="selectDate"
                value={quotation.selectDate}
                onChange={handleSelectDateChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-full">
            <label
              htmlFor="customerName"
              className="block text-white text-sm font-medium leading-6 text-gray-900"
            >
              Customer Name
            </label>
            <div className="mt-2">
              <select
                id="customerName"
                name="customerName"
                value={quotation.customerName}
                onChange={handleCustomerNameChange}
                autoComplete="customerName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>-- Select --</option>
                <option value="Ali">Ali</option>
                <option value="Fatima">Fatima</option>
                <option value="Ahmed">Ahmed</option>
                <option value="Aisha">Aisha</option>
                <option value="Mohammed">Mohammed</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="jobs"
              className="block text-white text-sm font-medium leading-6 text-gray-900"
            >
              List of jobs to be produced
            </label>
            <div className="mt-2">
              <select
                id="jobs"
                name="jobs"
                autoComplete="jobs"
                value={quotation.jobs}
                onChange={handleJobsChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>-- Select --</option>
                <option>Warehouse Manager</option>
                <option>Inventory Analyst</option>
                <option>Purchasing Coordinator</option>
                <option>Supply Chain Planner</option>
                <option>Inventory Control Specialist</option>
                <option>Materials Planner</option>
                <option>Logistics Coordinator</option>
                <option>Inventory Supervisor</option>
                <option>Operations Manager</option>
                <option>Demand Planner</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="jobDeliveryDate"
              className="block text-white text-sm font-medium leading-6 text-gray-900"
            >
              Select Delivery Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                id="jobDeliveryDate"
                name="jobDeliveryDate"
                autoComplete="jobDeliveryDate"
                value={quotation.jobDeliveryDate}
                onChange={handleJobDeliveryDateChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-4">
            <label
              htmlFor="deliveryPersonName"
              className="block text-white text-sm font-medium leading-6 text-gray-900"
            >
              Add the name of person
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="deliveryPersonName"
                id="deliveryPersonName"
                autoComplete="deliveryPersonName"
                value={quotation.deliveryPersonName}
                onChange={handleDeliveryPersonNameChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="amount"
              className="block text-white text-sm font-medium leading-6 text-gray-900"
            >
              Enter the amount of the job
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="amount"
                id="amount"
                autoComplete="amount"
                value={quotation.amount}
                onChange={handleAmountChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <CustomButton
              type="button"
              color="bg-violet-400"
              onClick={handleSaveAndGoBack}
              buttonText="Save &amp; close"
            />
          </div>
          <div className="sm:col-span-3">
            <CustomButton
              type="button"
              color="bg-violet-400"
              onClick={handleSaveAndRoute}
              buttonText="Save &amp; Create Costsheet"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
