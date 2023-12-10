import React, { useState } from "react";
import { productData } from "./RevanueData";

const StoreRevenue = () => {
  const [storeRevenueData, setStoreRevenueData] = useState(productData);

  return (
    <div className="w-[1500px] mx-auto h-[95vh] mt-10  ">
      <h2 className="text-2xl font-bold mb-4">Store Revenue</h2>
      <div className="overflow-x-auto ">
        <table className="min-w-[1000px] mx-auto border border-gray-800 text-[18px]">
          <thead>
            <tr>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Quantity Sold</th>
              <th className="border p-2">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {storeRevenueData.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.quantitySold}</td>
                <td className="border p-2">${item.totalRevenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreRevenue;
