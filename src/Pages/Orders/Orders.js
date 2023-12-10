import React, { useEffect, useState } from "react";
import { OrderData } from "./OrdersDataFake";

const Orders = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [filteredOrders, setFilteredOrders] = useState(OrderData);

  const handleOrderConfirmation = (id) => {
    console.log("Params for change Order -> Bill : ", id);
  };

  useEffect(() => {
    // Lọc dữ liệu khi selectedStatus thay đổi
    if (selectedStatus === "all") {
      setFilteredOrders(OrderData);
    } else {
      const filteredData = OrderData.filter(
        (bill) => bill.status === selectedStatus
      );
      setFilteredOrders(filteredData);
    }
  }, [selectedStatus]);

  return (
    <div className="w-[1500px] mx-auto h-[95vh] mt-10 ">
      <h2 className="text-[24px] font-bold mb-4 px-10">Orders</h2>

      {/* Radio buttons */}
      <div className="flex gap-10 w-full font-bold items-center justify-center mb-4">
        <label className="text-[18px]">
          <input
            type="radio"
            name="status"
            value="all"
            className="w-5 h-5 "
            checked={selectedStatus === "all"}
            onChange={() => setSelectedStatus("all")}
          />
          <span className="ml-4">All</span>
        </label>

        <label className="text-[18px]">
          <input
            type="radio"
            name="status"
            value="paid"
            className="w-5 h-5 "
            checked={selectedStatus === "paid"}
            onChange={() => setSelectedStatus("paid")}
          />
          <span className="ml-4">Paid</span>
        </label>

        <label className="text-[18px]">
          <input
            type="radio"
            name="status"
            value="shipping"
            className="w-5 h-5 "
            checked={selectedStatus === "shipping"}
            onChange={() => setSelectedStatus("shipping")}
          />
          <span className="ml-4">Shipping</span>
        </label>
      </div>
      <div className="w-full h-[90vh] shadow-xl overflow-y-auto p-4 text-[18px]">
        {filteredOrders.map((bill) => (
          <div
            key={bill.id}
            className="border border-gray-300 p-4 mb-4 rounded-lg flex "
          >
            <div>
              <p className="text-lg font-bold mb-2">Time: {bill.time}</p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Status:{" "}
                </span>
                {bill.status}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Total Price:{" "}
                </span>
                ${bill.totalPrice.toFixed(2)}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Address:{" "}
                </span>
                {bill.address}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Phone Number:{" "}
                </span>
                {bill.phoneNumber}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Number of Items:{" "}
                </span>
                {bill.noItem}
              </p>
            </div>
            <button
              className={`bg-green-500 text-white px-4 py-2 rounded h-[50px] ml-auto ${
                bill.status !== "shipping" ? "hidden" : "inline-block"
              }`}
              onClick={() => handleOrderConfirmation(bill.id)}
              disabled={bill.status !== "shipping"}
            >
              Confirm Received & Paid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
