import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuotation,
  removeQuotation,
  setQuotationNumber,
} from "../redux/action/action";

const MyComponent = () => {
  const dispatch = useDispatch();
  const quotationNumber = useSelector(
    (state) => state.quotation.quotationNumber
  );
  const quotations = useSelector((state) => state.quotation.quotations);

  const handleSetQuotationNumber = () => {
    const newQuotationNumber = "QUO-123"; // Example quotation number
    dispatch(setQuotationNumber(newQuotationNumber));
  };

  const handleAddQuotation = () => {
    const newQuotation = {
      id: Date.now(), // Example unique ID for the quotation
      content: "Sample quotation", // Example quotation content
    };
    dispatch(addQuotation(newQuotation));
  };

  const handleRemoveQuotation = (quotationId) => {
    dispatch(removeQuotation(quotationId));
  };

  return (
    <div>
      <button onClick={handleSetQuotationNumber}>Set Quotation Number</button>
      <button onClick={handleAddQuotation}>Add Quotation</button>
      <p>Quotation Number: {quotationNumber}</p>
      <ul>
        {quotations &&
          Array.isArray(quotations) &&
          quotations.map((quotation) => (
            <li key={quotation.id}>
              {quotation.content}
              <button onClick={() => handleRemoveQuotation(quotation.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MyComponent;
