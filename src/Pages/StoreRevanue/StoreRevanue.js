import React, { useEffect, useState } from "react";
import { productData } from "./RevanueData";
import { getRevanueAPI } from "../../APIs/StoreAPI";

const StoreRevenue = () => {
  const [storeRevenueData, setStoreRevenueData] = useState(productData);
  const [totalRevanue, setTotalRevanue] = useState(0);
  const [ratingList, setRatingList] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const res = await getRevanueAPI(sessionStorage.getItem("id_store"));
      console.log("Response from getUserListAPI api : ", res?.st?.prod);
      setStoreRevenueData(res?.st?.prod);
      setRatingList(res?.st?.rat);
      setTotalRevanue(res?.st?.sum[0]?.TotalRevenue);
    };

    callAPI();
  }, []);

  return (
    <div className="w-[80vw] mx-auto h-[95vh] mt-10  ">
      <h2 className="text-2xl font-bold mb-4">Store Revenue</h2>
      <div className="overflow-x-auto">
        <table className="w-full mx-auto border border-gray-800 text-[18px]">
          <thead>
            <tr>
              <th className="border p-2">Product ID</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Quantity Sold</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Rating Star</th>
              <th className="border p-2">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {storeRevenueData.map((item, index) => (
              <tr key={item.id}>
                <td className="border p-2 text-center">{item.id_product}</td>
                <td className="border p-2  text-center">{item.name}</td>
                <td className="border p-2  text-center">{item.soldnumber}</td>
                <td className="border p-2  text-center">$ {item.price}</td>
                <td className="border p-2  text-center">
                  {ratingList[index]?.productRating} / 5
                </td>
                <td className="border p-2  text-center text-[blue]">
                  ${item.Total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex item-center justify-end mt-10">
        <span className="text-[20px] font-bold ">
          Store Revenue: ${totalRevanue}
        </span>
      </div>
    </div>
  );
};

export default StoreRevenue;
