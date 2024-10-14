import React, { useState } from "react";
import { SaveItemsAndSuppliers } from "../../services/api";
import { ItemForm } from "../itemform/ItemForm";
import { SupplierForm } from "../supplierform/SupplierForm";

import "./checkbox.css"

export const Checkbox = () => {
  const [isItemChecked, setIsItemChecked] = useState(false);
  const [isSupplierChecked, setIsSupplierChecked] = useState(false);
  const [itemData, setItemData] = useState({});
  const [supplierData, setSupplierData] = useState({});

  const handleSubmit = async () => {
    const payload = {
      itemDetails: itemData,
      supplier: supplierData,
    };
    try {
      const response = await SaveItemsAndSuppliers(payload);
      alert("data saved");
    } catch (error) {
      alert("Error saving data");
    }
  };

  return (
    <div>
      <div>
        <h2>Items and Supplier Form</h2>
        <div className="label-container">
            
        <label>
          <input
            type="checkbox"
            checked={isItemChecked}
            onChange={(e) => setIsItemChecked(e.target.checked)}
          />
          Item
        </label>

        <label>
          <input
            type="checkbox"
            checked={isSupplierChecked}
            onChange={(e) => setIsSupplierChecked(e.target.checked)}
          />
          Supplier
        </label>
        </div>

        {/* <input type="checkbox" /> */}
        {isItemChecked && <ItemForm setItemData={setItemData} />}
        {isSupplierChecked && (
          <SupplierForm setSupplierData={setSupplierData} />
        )}
      </div>

      <button className="Save-change-button" onClick={handleSubmit}> Submit</button>
    </div>
  );
};
