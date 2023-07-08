import {
  ADD_COST_SHEET_ITEM,
  REMOVE_COST_SHEET_ITEM,
  SET_QUOTATION,
  SET_CUSTOMER_NAME,
  SET_JOB,
  SET_SITE_INFORMATION,
} from "../action/action";

// Define initial state
const initialState = {
  quotationNumber: "",
  selectDate: "",
  customerName: "",
  jobs: "",
  jobDeliveryDate: "",
  deliveryPersonName: "",
  amount: "",
  costSheet: [],
};

// Define reducer function
const quotationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTATION:
      const randomNumber = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
      const quotationNumber = `g/u/ebeco/${randomNumber}`; // Format the random number

      return {
        ...state,
        quotationNumber,
        ...action.payload,
      };
    case ADD_COST_SHEET_ITEM:
      return {
        ...state,
        costSheet: [
          ...state.costSheet,
          {
            id: action.payload.itemId,
            itemName: action.payload.itemName,
            quantity: action.payload.quantity,
            price: action.payload.price,
          },
        ],
      };
    case REMOVE_COST_SHEET_ITEM:
      return {
        ...state,
        costSheet: state.costSheet.filter((item) => item.id !== action.payload),
      };
    case SET_CUSTOMER_NAME:
      return {
        ...state,
        customerName: action.payload,
      };
    case SET_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    case SET_SITE_INFORMATION:
      return {
        ...state,
        siteInformation: action.payload,
      };

    default:
      return state;
  }
};

export default quotationReducer;
