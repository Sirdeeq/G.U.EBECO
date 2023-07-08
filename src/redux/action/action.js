// Action types
export const SET_QUOTATION_NUMBER = "SET_QUOTATION_NUMBER";
export const ADD_QUOTATION = "ADD_QUOTATION";
export const REMOVE_QUOTATION = "REMOVE_QUOTATION";
export const SET_QUOTATION = "SET_QUOTATION";
export const ADD_COST_SHEET_ITEM = "ADD_COST_SHEET_ITEM";
export const REMOVE_COST_SHEET_ITEM = "REMOVE_COST_SHEET_ITEM";
export const FETCH_SAVED_DATA = "FETCH_SAVED_DATA";
export const SET_CUSTOMER_NAME = "SET_CUSTOMER_NAME";
export const SET_JOB = "SET_JOB";
export const SET_SITE_INFORMATION = "SET_SITE_INFORMATION";

// Action creators
export const setQuotation = (quotation) => ({
  type: SET_QUOTATION,
  payload: quotation,
});

export const addCostSheetItem = (itemId, itemName, quantity, price) => ({
  type: ADD_COST_SHEET_ITEM,
  payload: {
    itemId,
    itemName,
    quantity,
    price,
  },
});

export const removeCostSheetItem = (itemId) => ({
  type: REMOVE_COST_SHEET_ITEM,
  payload: itemId,
});

export const setQuotationNumber = (quotationNumber) => ({
  type: SET_QUOTATION_NUMBER,
  payload: quotationNumber,
});

export const addQuotation = (quotation) => ({
  type: ADD_QUOTATION,
  payload: quotation,
});

export const removeQuotation = (quotationId) => ({
  type: REMOVE_QUOTATION,
  payload: quotationId,
});

export const fetchSavedData = () => ({
  type: FETCH_SAVED_DATA,
});
export const setCustomerName = (customerName) => ({
    type: SET_CUSTOMER_NAME,
    payload: customerName,
  });
  
  export const setJob = (job) => ({
    type: SET_JOB,
    payload: job,
  });

  export const setSiteInformation = (siteInformation) => ({
    type: SET_SITE_INFORMATION,
    payload: siteInformation,
  });
  