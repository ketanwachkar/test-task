import React, { useState } from "react";
import "./itemForm.css";

export const ItemForm = ({ setItemData }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState("");
  const [submissionData, setSubmissionData] = useState("");

  const handleInputChange = () => {
    setItemData({ itemName, quantity, unitPrice, submissionData });
  };

  return (
    <div>
      <h2>Item Details</h2>
      <div className="item-form">
        <div className="item-container">
            <div className="Input-head">
           <label>Item Name</label>     
          <input
          className="item-input-field"
            type="text"
            placeholder="Item Name"
            value={itemName}
            maxLength={225}
            onChange={(e) => setItemName(e.target.value)}
          />
            </div>
            <div className="Input-head">
            <label>Quantity</label> 
          <input
            type="number"
            className="item-input-field"
            placeholder="Quantity "
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
            </div>
        </div>
        <div className="item-container">
        <div className="Input-head">
        <label>Unit Price</label> 
          <input
          className="item-input-field"
            type="text"
            placeholder="Unit Price"
            value={unitPrice}
            maxLength={225}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
        <div className="Input-head">
        <label>Date of Submission</label> 
          <input
            type="date"
            className="item-input-field"
            placeholder="Item Name"
            value={submissionData}
            onChange={(e) => setSubmissionData(e.target.value)}
          />
        </div>
        </div>
      </div>
    </div>
  );
};
