import React, { useEffect, useState } from "react";
import { OrderData, HistoryData } from "./OrdersDataFake";
import EditCommentModal from "../../Components/Modal/EditCommentModal";

const Orders = () => {
  const [selectedStatus, setSelectedStatus] = useState("order");
  const [data, setData] = useState(OrderData);
  const [dataHistory, setDataHistory] = useState(HistoryData);

  const handleDeleteComment = (id_order, id_product) => {
    const params = {
      id_order: id_order,
      id_product: id_product,
      id_user: sessionStorage.getItem("id_user"),
    };
    console.log("Delete product comment : ", params);
  };

  useEffect(() => {
    // Call function filter Orders/Bill/Paided List

    console.log(
      "Call function filter list Order with option: ",
      selectedStatus
    );

    // setData;
  }, [selectedStatus]);

  return (
    <div className=" w-[80vw] mx-auto h-[95vh] mt-10 ">
      <div className="flex item-center justify-between gap-3">
        <div className="w-[48%] ">
          <div className="w-full flex item-center justify-between">
            <h2 className="text-[24px] font-bold mb-4 px-10">Orders / Bills</h2>
            <h2 className="text-[24px] font-bold mb-4 px-10">Total: </h2>
          </div>
          <div className="flex gap-10 w-full font-bold items-center justify-center mb-4">
            <label className="text-[18px]">
              <input
                type="radio"
                name="status"
                value="order"
                className="w-5 h-5 "
                checked={selectedStatus === "order"}
                onChange={() => setSelectedStatus("order")}
              />
              <span className="ml-4">Order</span>
            </label>

            <label className="text-[18px]">
              <input
                type="radio"
                name="status"
                value="bill"
                className="w-5 h-5 "
                checked={selectedStatus === "bill"}
                onChange={() => setSelectedStatus("bill")}
              />
              <span className="ml-4">Bill</span>
            </label>
          </div>
          <div className=" shadow-xl h-[90vh] overflow-y-auto p-4 text-[18px]">
            {data.map((bill) => (
              <div
                key={bill.id}
                className="border border-gray-300 p-4 mb-4 rounded-lg flex "
              >
                <div>
                  <p className="text-lg font-bold mb-2">Time: {bill.time}</p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">Order Id: </span>
                    {bill.id_order}
                  </p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">Status: </span>
                    {bill.status}
                  </p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">
                      Total Price:{" "}
                    </span>
                    ${bill.totalPrice.toFixed(2)}
                  </p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">Address: </span>
                    {bill.address}
                  </p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">
                      Phone Number:{" "}
                    </span>
                    {bill.phoneNumber}
                  </p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">
                      Number of Items:{" "}
                    </span>
                    {bill.noItem}
                  </p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">
                      Discount Name:{" "}
                    </span>
                    {bill?.discount_name}
                  </p>
                  <p className="mb-2">
                    <span className=" font-bold text-[18px]">
                      Payment Method:{" "}
                    </span>
                    {bill?.pm_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[48%]">
          <div className="w-full flex item-center justify-between">
            <h2 className="text-[24px] font-bold mb-4 px-10">
              Purchase History
            </h2>
            <h2 className="text-[24px] font-bold mb-4 px-10">Total: </h2>
          </div>

          <div className="w-full h-[90vh] shadow-xl overflow-y-auto p-4 text-[18px] mt-10">
            {dataHistory.map((bill) => (
              <div
                key={bill.id_order}
                className="border border-gray-300 p-4 mb-4 w-full rounded-lg flex flex-col items-center justify-center gap-3 "
              >
                <div className="w-full flex items-center justify-between">
                  <div className="w-[50%] p-5 flex flex-col items-start justify-center">
                    <p className="text-lg font-bold mb-2">Time: {bill.time}</p>
                    <p className="mb-2">
                      <span className=" font-bold text-[18px]">
                        Product ID:{" "}
                      </span>
                      {bill.id_product}
                    </p>
                    <p className="mb-2">
                      <span className=" font-bold text-[18px]">
                        Product Name:{" "}
                      </span>
                      {bill.product_name}
                    </p>
                    <p className="mb-2">
                      <span className=" font-bold text-[18px]">Order Id: </span>
                      {bill.id_order}
                    </p>
                    <p className="mb-2">
                      <span className=" font-bold text-[18px]">
                        Total Price:{" "}
                      </span>
                      ${bill.totalPrice.toFixed(2)}
                    </p>
                    <p className="mb-2">
                      <span className=" font-bold text-[18px]">Quantity: </span>
                      {bill.quantity}
                    </p>
                  </div>
                  <div className="w-[50%] p-5">
                    <img
                      src={bill.product_img}
                      alt=""
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                </div>

                <div className="flex w-full items-center justify-start p-3">
                  <EditCommentModal
                    action={bill?.ratingYet === "no" ? "Add" : "Edit"}
                    id_product={bill?.id_product}
                    id_order={bill.id_order}
                  >
                    <button className="py-2 px-3 bg-gray-800 mb-2 text-white font-bold rounded-md">
                      {bill?.ratingYet === "no"
                        ? "Add comment"
                        : "Edit comment"}
                    </button>
                  </EditCommentModal>

                  {bill?.ratingYet === "no" ? (
                    ""
                  ) : (
                    <button
                      className="py-2 px-3 ml-3 bg-red-500 mb-2 text-white font-bold rounded-md"
                      onClick={() =>
                        handleDeleteComment(bill.id_order, bill?.id_product)
                      }
                    >
                      Delete Comment
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
