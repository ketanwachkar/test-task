import React, { useEffect, useState } from 'react'
import { getItems } from '../../services/api';

import "./dataTable.css"

export const DataTable = () => {
    const [data, setData ] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const items = await getItems();
            console.log(items)
            setData(items.data.items)
        };
        fetchData()
    }, [])
  return (
    <div className='data-table-container'>
      <table>
        <thead>
            <tr>
                <th>Supplier</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Jnit Price</th>
                <th>City Country</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    <td>{row.Supplier.supplierName} </td>
                    <td>{row.itemName} </td>
                    <td>{row.quantity} </td>
                    <td>{row.unitPrice} </td>
                    <td>{row.Supplier.cityName} {row.Supplier.countryName} </td>
                    <td>{row.Supplier.email} </td>
                    <td>{row.Supplier.phoneNumber} </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

