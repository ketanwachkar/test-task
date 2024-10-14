import axios from "axios";
import { API_ROUTES } from "../api/apiRoutes";

// let data = [
//   {
//     id: 1,
//     supplierName: "Ramesh",
//     itemName: "bottle",
//     quantity: 5,
//     unitPirce: "55",
//     cityName: "Indore",
//     countryName: "India",
//     email: "Test@test.com",
//     phoneNumber: "8989765678",
//   },
//   {
//     id: 2,
//     supplierName: "ketan",
//     itemName: "bottle",
//     quantity: 5,
//     unitPirce: "55",
//     cityName: "Indore",
//     countryName: "India",
//     email: "Test@test.com",
//     phoneNumber: "8989765678",
//   },
//   {
//     id: 3,
//     supplierName: "ktn",
//     itemName: "bottle",
//     quantity: 5,
//     unitPirce: "55",
//     cityName: "Indore",
//     countryName: "India",
//     email: "Test@test.com",
//     phoneNumber: "8989765678",
//   },
//   {
//     id: 4,
//     supplierName: "sumesh",
//     itemName: "bottle",
//     quantity: 5,
//     unitPirce: "55",
//     cityName: "Indore",
//     countryName: "India",
//     email: "Test@test.com",
//     phoneNumber: "8989765678",
//   },
// ];

export const SaveItemsAndSuppliers = async (data) => {
  try {
    const response = await axios.post(API_ROUTES.Save_Items, data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
export const getItems = async () => {
    try {
        const response = await axios.get(API_ROUTES.GET_ALL_ITEMS_LIST);
        return response.data;
      } catch (error) {
        console.log("error", error);
        throw error;
      }
};
export const getcountryList = async () => {
  try {
    const response = await axios.get(API_ROUTES.GET_COUNTRY_LIST);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
