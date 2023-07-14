import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setQuotation } from "../../../redux/action/action";
import { useEffect, useState } from "react";

export default function ProfileForm() {
  const quotation = useSelector((state) => state.quotation);
  const [customerName, setCustomerName] = useState("");
  const [showSiteInformation, setShowSiteInformation] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Set the initial customer name value
    if (quotation.customerName) {
      setCustomerName(quotation.customerName);
    }
  }, [quotation.customerName]);

  const handleSaveAndGoBack = () => {
    console.log("Saving data...");
    const updatedQuotation = {
      ...quotation,
      questionNumber: getValueById("question-no"),
      selectDate: getValueById("selectDate"),
      customerName: getValueById("customerName"),
      jobs: getValueById("jobs"),
      jobDeliveryDate: getValueById("jobDeliveryDate"),
      deliveryPersonName: getValueById("deliveryPersonName"),
      amount: getValueById("amount"),
      siteInformation: {
        dateFirstPayment: getValueById("dateFirstPayment"),
        dateMeasurementReadiness: getValueById("dateMeasurementReadiness"),
        dateFactoryCommencement: getValueById("dateFactoryCommencement"),
        dateInstallation: getValueById("dateInstallation"),
        balancePaid: getValueById("balancePaid"),
        siteCommencement: getValueById("siteCommencement"),
        siteTeam: getValueById("siteTeam"),
        durationInstallation: getValueById("durationInstallation"),
        dateFinishingInstallation: getValueById("dateFinishingInstallation"),
        teamHeadName: getValueById("teamHeadName"),
        siteManagerName: getValueById("siteManagerName"),
        reportFromHeadSite: getValueById("reportFromHeadSite"),
      },
    };
    dispatch(setQuotation(updatedQuotation));
    localStorage.setItem("quotationData", JSON.stringify(updatedQuotation));
    navigate(-1);
  };

  const handleSaveAndRoute = () => {
    console.log("Saving data...");
    const updatedQuotation = {
      ...quotation,
      questionNumber: getValueById("question-no"),
      selectDate: getValueById("selectDate"),
      customerName: getValueById("customerName"),
      jobs: getValueById("jobs"),
      jobDeliveryDate: getValueById("jobDeliveryDate"),
      deliveryPersonName: getValueById("deliveryPersonName"),
      amount: getValueById("amount"),
      siteInformation: {
        dateFirstPayment: getValueById("dateFirstPayment"),
        dateMeasurementReadiness: getValueById("dateMeasurementReadiness"),
        dateFactoryCommencement: getValueById("dateFactoryCommencement"),
        dateInstallation: getValueById("dateInstallation"),
        balancePaid: getValueById("balancePaid"),
        siteCommencement: getValueById("siteCommencement"),
        siteTeam: getValueById("siteTeam"),
        durationInstallation: getValueById("durationInstallation"),
        dateFinishingInstallation: getValueById("dateFinishingInstallation"),
        teamHeadName: getValueById("teamHeadName"),
        siteManagerName: getValueById("siteManagerName"),
        reportFromHeadSite: getValueById("reportFromHeadSite"),
      },
    };
    dispatch(setQuotation(updatedQuotation));
    localStorage.setItem("quotationData", JSON.stringify(updatedQuotation));
    localStorage.removeItem("quotationData"); // Remove the quotation data from localStorage
    navigate("/cost-sheet");
  };

  const randomNumber = `G/U/EBECO/${Math.floor(Math.random() * 1000000)}`;
  const questionNumberDisabled = Boolean(quotation.questionNumber); // Disable the input if the question number is already set

  const [questionNumber, setQuestionNumber] = useState(
    quotation.questionNumber || randomNumber.slice(0, -1)
  );

  const handleQuestionNumberChange = (e) => {
    if (!quotation.questionNumber) {
      setQuestionNumber(e.target.value);
      dispatch(setQuotation({ questionNumber: e.target.value }));
    }
  };

  const handleSelectDateChange = (e) => {
    dispatch(setQuotation({ selectDate: e.target.value }));
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleCustomerNameManualEntry = (e) => {
    setCustomerName(e.target.value);
    dispatch(setQuotation({ customerName: e.target.value }));
  };

  const handleCustomerNameSelect = () => {
    dispatch(setQuotation({ customerName }));
  };

  // Utility function to get the value of an element by ID
  const getValueById = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : "";
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
              Add Quotation Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="question-no"
                id="question-no"
                autoComplete="question-no"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={questionNumber}
                onChange={handleQuestionNumberChange}
                disabled
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
            <div className="mt-2 flex">
              <select
                id="customerName"
                name="customerName"
                value={customerName}
                onChange={handleCustomerNameChange}
                onBlur={handleCustomerNameSelect}
                autoComplete="customerName"
                className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">-- Select --</option>
                <option value="Ali">Ali</option>
                <option value="Fatima">Fatima</option>
                <option value="Ahmed">Ahmed</option>
                <option value="Aisha">Aisha</option>
                <option value="Mohammed">Mohammed</option>
              </select>
              <input
                type="text"
                id="customerNameInput"
                name="customerNameInput"
                value={customerName}
                onChange={handleCustomerNameManualEntry}
                className="w-1/4 ml-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
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
          <div className="sm:col-span-full">
            <label className="block text-white text-sm font-medium leading-6 text-gray-900">
              Site
            </label>
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="siteCheckbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                onChange={() => setShowSiteInformation(!showSiteInformation)}
              />
              <label htmlFor="siteCheckbox" className="ml-2 text-gray-200">
                Include Site Information
              </label>
            </div>
          </div>
          <div className="sm:col-span-full">
            {showSiteInformation && (
              <div className="p-5 m-8 border shadow-sm">
                <div className="border-t border-gray-900/10 pt-6 mt-6">
                  <h2 className="text-base font-semibold leading-7 text-white text-center">
                    Site Information
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Date of First Payment
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          id="dateFirstPayment"
                          name="dateFirstPayment"
                          autoComplete="dateFirstPayment"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Date of Measurement Readiness
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          id="dateMeasurementReadiness"
                          name="dateMeasurementReadiness"
                          autoComplete="dateMeasurementReadiness"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Date of Factory Commencement
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          id="dateFactoryCommencement"
                          name="dateFactoryCommencement"
                          autoComplete="dateFactoryCommencement"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Date of Installation
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          id="dateInstallation"
                          name="dateInstallation"
                          autoComplete="dateInstallation"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Balance Paid
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="balancePaid"
                          name="balancePaid"
                          autoComplete="balancePaid"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Site Commencement
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="siteCommencement"
                          name="siteCommencement"
                          autoComplete="siteCommencement"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Site Team
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="siteTeam"
                          name="siteTeam"
                          autoComplete="siteTeam"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Duration of Installation
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="durationInstallation"
                          name="durationInstallation"
                          autoComplete="durationInstallation"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Date of Finishing Installation
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          id="dateFinishingInstallation"
                          name="dateFinishingInstallation"
                          autoComplete="dateFinishingInstallation"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400To continue the code from where it left off:

```jsx
focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Team Head Name and Sign
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="teamHeadName"
                          name="teamHeadName"
                          autoComplete="teamHeadName"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Site Manager Name and Sign
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="siteManagerName"
                          name="siteManagerName"
                          autoComplete="siteManagerName"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label className="block text-white text-sm font-medium leading-6 text-gray-900">
                        Report from the Head Site
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="reportFromHeadSite"
                          name="reportFromHeadSite"
                          rows="3"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
