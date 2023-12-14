import React, { useEffect, useState } from "react";
import {
  confirmAllAPI,
  confirmOneAPI,
  getAllOrderConfirmListAPI,
  getAllOrderListAPI,
  getAllOrderWaitingListAPI,
} from "../../APIs/StoreAPI";
import { toast } from "../../Components/Toastify/Toastify";

const StoreOrderList = () => {
  const [filter, setFilter] = useState("all");
  const [OrderItem, setOrderItem] = useState();
  const [render, setRender] = useState(true);

  useEffect(() => {
    console.log("params filter order list:", filter);

    const callAPI = async () => {
      if (filter === "all") {
        const res = await getAllOrderListAPI(
          sessionStorage.getItem("id_store")
        );
        console.log("response from getAllOrderListAPI : ", res);
        if (res?.status === 200) {
          console.log("getAllOrderListAPI successfully!");
          setOrderItem(res?.allOrders);
        } else {
          console.log("getAllOrderListAPI failed!");
        }
      } else if (filter === "waiting") {
        const res = await getAllOrderWaitingListAPI(
          sessionStorage.getItem("id_store")
        );
        console.log("response from getAllOrderListAPI : ", res);
        if (res?.status === 200) {
          console.log("getAllOrderListAPI successfully!");
          setOrderItem(res?.waitingOrders);
        } else {
          console.log("getAllOrderListAPI failed!");
        }
      } else {
        const res = await getAllOrderConfirmListAPI(
          sessionStorage.getItem("id_store")
        );
        console.log("response from getAllOrderListAPI : ", res);
        if (res?.status === 200) {
          console.log("getAllOrderListAPI successfully!");
          setOrderItem(res?.waitingOrders);
        } else {
          console.log("getAllOrderListAPI failed!");
        }
      }
    };

    callAPI();
  }, [filter, render]);

  const handleConfirmOrder = ({ id_order, id_product }) => {
    const data123 = {
      id_order: id_order,
      id_product: id_product,
    };

    console.log(" confirm one order", data123);

    const callAPI = async () => {
      const res = await confirmOneAPI({
        id_store: sessionStorage.getItem("id_store"),
        data: data123,
      });
      if (res?.status === 200) {
        console.log("Confirm Succesful");
        toast.success("Confirm Succesful");

        setRender(!render);
      } else {
        console.log("getAllOrderListAPI failed!");
        toast.success("Confirm Faild");
      }
    };
    callAPI();
  };

  const handleConfirmAllOrder = () => {
    const callAPI = async () => {
      const res = await confirmAllAPI(sessionStorage.getItem("id_store"));
      if (res?.status === 200) {
        console.log("Confirm Succesful");
        toast.success("Confirm Succesful");
        setRender(!render);
      } else {
        console.log("getAllOrderListAPI failed!");
        toast.success("Confirm Faild");
      }
    };
    callAPI();
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
        {OrderItem?.map((order) => (
          <div
            key={order?.id_order}
            className="order-item flex mx-auto shadow-xl w-[80%] p-5"
          >
            <div>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Product Name:{" "}
                </span>
                {order?.name}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Product Id:{" "}
                </span>
                {order?.id_product}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Quantity:{" "}
                </span>
                {order?.quantity}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Total Price:{" "}
                </span>
                ${order?.totalPrice}
              </p>
              <p className="text-[20px]">
                <span className="text-[blue] font-bold text-[20px] mr-3">
                  Status:{" "}
                </span>
                {order?.status}
              </p>
            </div>
            {order?.status === "Waiting" ? (
              <div
                className="ml-auto w-[100px] h-[40px] cursor-pointer bg-slate-800 font-bold text-white text-center p-2 rounded-md m-2"
                onClick={() =>
                  handleConfirmOrder({
                    id_order: order?.id_order,
                    id_product: order?.id_product,
                  })
                }
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
