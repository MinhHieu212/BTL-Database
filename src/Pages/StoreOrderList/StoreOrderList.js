import React, { useEffect, useState } from "react";
import { OrderItem as Data } from "./OrderListData";

const StoreOrderList = () => {
  const [filter, setFilter] = useState("all");
  const [OrderItem, setOrderItem] = useState(Data);

  useEffect(() => {
    console.log("params filter order list:", filter);
    // call funtion filter order list
    // setOrderItem
  }, [filter]);

  const handleConfirmOrder = (id_orderItem) => {
    // call function confirm order item
    console.log("Confirm Order Item", id_orderItem);
  };

  const handleConfirmAllOrder = () => {
    // call function confirm order item
    console.log(
      "Confirm All Order Item on Store id",
      sessionStorage.getItem("id_store") || 12
    );
  };

  return (
    <div className="w-[80vw] mx-auto  mt-10">
      <div className="w-full flex items-center justify-center text-[20px] gap-5 font-bold">
        <input
          type="radio"
          id="all"
          className="w-5 h-5"
          name="filter"
          value="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
        <label htmlFor="all">All</label>
        <input
          type="radio"
          id="waiting"
          className="w-5 h-5"
          name="filter"
          value="waiting"
          checked={filter === "waiting"}
          onChange={() => setFilter("waiting")}
        />
        <label htmlFor="waiting">Waiting</label>
        <input
          type="radio"
          id="confirmed"
          className="w-5 h-5"
          name="filter"
          value="confirmed"
          checked={filter === "confirmed"}
          onChange={() => setFilter("confirmed")}
        />
        <label htmlFor="confirmed">Confirmed</label>
      </div>
      <div
        className="ml-auto w-[200px] mr-10 h-[40px] bg-slate-800 font-bold text-white text-center p-2 rounded-md m-2"
        onClick={handleConfirmAllOrder}
      >
        Confirm All
      </div>

      <div className="w-full flex flex-col shadow-xl p-3 items-center justify-start h-[80vh] overflow-x-scroll gap-5 mt-10 ">
        {OrderItem.map((order) => (
          <div
            key={order.id_order}
            className="order-item flex mx-auto shadow-xl w-[80%] p-5"
          >
            <div>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Product Name:{" "}
                </span>
                {order.name_product}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Order Item Id:{" "}
                </span>
                {order?.id_orderItem}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Quantity:{" "}
                </span>
                {order.quantity}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Total Price:{" "}
                </span>
                ${order.totalPrice.toFixed(2)}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Status:{" "}
                </span>
                {order.status}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Start Date:{" "}
                </span>
                {order.date_start}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  End Date:{" "}
                </span>
                {order.date_end}
              </p>
            </div>
            {order.status === "waiting" ? (
              <div
                className="ml-auto w-[100px] h-[40px] cursor-pointer bg-slate-800 font-bold text-white text-center p-2 rounded-md m-2"
                onClick={() => handleConfirmOrder(order?.id_orderItem)}
              >
                Confirm
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreOrderList;
