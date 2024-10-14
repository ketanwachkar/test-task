import React, { useEffect, useState } from "react";
import { getcountryList } from "../../services/api";
import "./supplierform.css";

export const SupplierForm = ({ setSupplierData }) => {
  const [supplierName, setSupplierName] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchContries = async () => {
      const data = await getcountryList();
      setCountryList(data.data.countyList);
    };
    fetchContries();
  }, []);

  const handleInputChange = () => {
    setSupplierData({ supplierName });
  };
  return (
    <div className="supplier-main-container">
      <h2>Supplier Details</h2>
      <div className="supplier-container">
        <div className="supplier-input-container">
          <span className="label-tag">Supplier Name</span>
          <input
          className="supplier-input-field"
            type="text"
            placeholder="Supplier Name"
            value={supplierName}
            maxLength={225}
            onChange={(e) => setSupplierName(e.target.name)}
          />
        </div>
        
        <div className="supplier-input-container">
          <span className="label-tag">Company Name</span>
          <select onChange={(e) => setCountry(e.target.value)}  className="supplier-input-field">
            {countryList.map((country) => (
              <option key={country.countryId} value={country.countryId}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="supplier-container">
        <div className="supplier-input-container">
          <span className="label-tag">Country</span>
          <input
          className="supplier-input-field"
            type="text"
            placeholder="Supplier Name"
            value={supplierName}
            maxLength={225}
            onChange={(e) => setSupplierName(e.target.name)}
          />
        </div>
        
        <div className="supplier-input-container">
          <span className="label-tag">State</span>
          <select onChange={(e) => setCountry(e.target.value)}  className="supplier-input-field">
            {countryList.map((country) => (
              <option key={country.countryId} value={country.countryId}>
                {country.phonecode}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="supplier-container">
        <div className="supplier-input-container">
          <span className="label-tag">City</span>
          <input
          className="supplier-input-field"
            type="text"
            placeholder="Supplier Name"
            value={supplierName}
            maxLength={225}
            onChange={(e) => setSupplierName(e.target.name)}
          />
        </div>
        
        <div className="supplier-input-container">
          <span className="label-tag">Email Address</span>
          <select onChange={(e) => setCountry(e.target.value)}  className="supplier-input-field">
            {countryList.map((country) => (
              <option key={country.countryId} value={country.countryId}>
                {country.currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="supplier-container-last">
        <div className="supplier-input-container">
          <span className="label-tag">Email Address</span>
          <input
          className="supplier-input-field"
            type="text"
            placeholder="Supplier Name"
            value={supplierName}
            maxLength={225}
            onChange={(e) => setSupplierName(e.target.name)}
          />
        </div>
      </div>
    </div>
  );
};
