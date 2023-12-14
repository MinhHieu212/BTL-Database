import React, { useEffect, useState } from "react";
import { discountList } from "./DiscountListData";
import { addDiscountByAdminAPI, getDiscountListAPI } from "../../APIs/AdminAPI";
import { toast } from "../../Components/Toastify/Toastify";

const AdminDiscountList = () => {
  const [discounts, setDiscounts] = useState(discountList);
  const [render, setRender] = useState(true);
  const [newDiscount, setNewDiscount] = useState({
    dateStart: "",
    dateEnd: "",
    discountPercent: null,
    maxDiscount: null,
    minBill: null,
    id_category: null,
    quantity: null,
    discountMoney: null,
    discountType: "percent",
    id_user: sessionStorage.getItem("id_user") || 1,
  });

  const handleAddDiscount = () => {
    console.log(newDiscount);

    const data = {
      dateEnd: newDiscount?.dateEnd,
      dateStart: newDiscount?.dateStart,
      discountMoney: newDiscount?.discountMoney,
      discountPercent: newDiscount?.discountPercent / 100,
      discountType: newDiscount?.discountType,
      id_category: newDiscount?.id_category,
      id_user: newDiscount?.id_user,
      maxDiscount: newDiscount?.maxDiscount,
      minBill: newDiscount?.minBill,
      quantity: newDiscount?.quantity,
    };

    setNewDiscount();
    const callAPI = async () => {
      const res = await addDiscountByAdminAPI(data);

      console.log("response from Add Discount : ", res);

      if (res?.status === 201) {
        toast.success("Add Discount successfully");
        setRender(!render);
      } else {
        toast.error("Add Discount Failed");
      }
    };

    callAPI();

    setNewDiscount({
      dateStart: "",
      dateEnd: "",
      discountPercent: null,
      maxDiscount: null,
      minBill: null,
      id_category: null,
      quantity: null,
      discountMoney: null,
      discountType: "percent",
      id_user: sessionStorage.getItem("id_user") || 1,
    });
  };

  useEffect(() => {
    const callAPI = async () => {
      const res = await getDiscountListAPI();
      console.log("Response from getDiscountListAPI api : ", res);
      setDiscounts(res?.data);
    };

    callAPI();
  }, [render]);

  return (
    <div className="w-[80vw] mx-auto h-[95vh] mt-10 flex items-start gap-5 justify-between">
      <div className="w-[40%] shadow-xl">
        <h2 className="text-[24px] font-bold mb-4 px-10 text-blue-800 uppercase">
          Create New Discount
        </h2>

        <div className="flex items-center mt-10">
          {/* Form to add a new discount */}
          <div className="ml-10 w-full flex flex-col items-center justify-start gap-5 text-[18px]">
            <div className="flex items-center justify-start  gap-4">
              <label
                className="font-bold w-[200px] text-[blue]"
                htmlFor="dateStart"
              >
                Start Date:
              </label>
              <input
                type="date"
                id="dateStart"
                value={newDiscount?.dateStart}
                className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                onChange={(e) =>
                  setNewDiscount({ ...newDiscount, dateStart: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <label
                className="font-bold w-[200px] text-[blue]"
                htmlFor="dateEnd"
              >
                End Date:
              </label>
              <input
                type="date"
                id="dateEnd"
                value={newDiscount?.dateEnd}
                className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                onChange={(e) =>
                  setNewDiscount({ ...newDiscount, dateEnd: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <label
                className="font-bold w-[200px] text-[blue]"
                htmlFor="discountType"
              >
                Discount Type:
              </label>
              <select
                id="discountType"
                value={newDiscount?.discountType}
                className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                onChange={(e) =>
                  setNewDiscount({
                    ...newDiscount,
                    discountType: e.target.value,
                  })
                }
              >
                <option value="percent">Percentage</option>
                <option value="money">Money</option>
              </select>
            </div>
            {newDiscount?.discountType === "percent" && (
              <>
                <div className="flex items-center justify-start gap-4">
                  <label
                    className="font-bold w-[200px] text-[blue]"
                    htmlFor="discountPercent"
                  >
                    Discount Percent:
                  </label>
                  <input
                    type="number"
                    id="discountPercent"
                    value={newDiscount?.discountPercent || ""}
                    className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                    onChange={(e) =>
                      setNewDiscount({
                        ...newDiscount,
                        discountPercent: parseInt(e.target.value) || null,
                      })
                    }
                  />
                </div>
              </>
            )}

            {newDiscount?.discountType === "money" && (
              <>
                <div className="flex items-center justify-start gap-4">
                  <label
                    className="font-bold w-[200px]"
                    htmlFor="discountMoney"
                  >
                    Discount Money:
                  </label>
                  <input
                    type="number"
                    id="discountMoney"
                    value={newDiscount?.discountMoney || ""}
                    className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                    onChange={(e) =>
                      setNewDiscount({
                        ...newDiscount,
                        discountMoney: parseInt(e.target.value) || null,
                      })
                    }
                  />
                </div>
              </>
            )}

            <div className="flex items-center justify-start gap-4">
              <label
                className="font-bold w-[200px] text-[blue]"
                htmlFor="maxDiscount"
              >
                Max Discount:
              </label>
              <input
                type="number"
                id="maxDiscount"
                value={newDiscount?.maxDiscount || ""}
                className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                onChange={(e) =>
                  setNewDiscount({
                    ...newDiscount,
                    maxDiscount: parseInt(e.target.value) || null,
                  })
                }
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <label
                className="font-bold w-[200px] text-[blue]"
                htmlFor="minBill"
              >
                Min Bill:
              </label>
              <input
                type="number"
                id="minBill"
                value={newDiscount?.minBill || ""}
                className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                onChange={(e) =>
                  setNewDiscount({
                    ...newDiscount,
                    minBill: parseInt(e.target.value) || null,
                  })
                }
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <label
                className="font-bold w-[200px] text-[blue]"
                htmlFor="id_category"
              >
                Category ID:
              </label>
              <input
                type="number"
                id="id_category"
                className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                value={newDiscount?.id_category || ""}
                onChange={(e) =>
                  setNewDiscount({
                    ...newDiscount,
                    id_category: parseInt(e.target.value) || null,
                  })
                }
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <label
                className="font-bold w-[200px] text-[blue]"
                htmlFor="quantity"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={newDiscount?.quantity || ""}
                className="border-2 p-2 border-black outline-none w-[200px] rounded-md"
                onChange={(e) =>
                  setNewDiscount({
                    ...newDiscount,
                    quantity: parseInt(e.target.value) || null,
                  })
                }
              />
            </div>
          </div>
        </div>

        <button
          className="bg-blue-500 text-white ml-10 inline-block mt-10  px-4 py-2 rounded mb-4"
          onClick={() => {
            handleAddDiscount();
          }}
        >
          Add Discount
        </button>
      </div>
      <div className="w-[50%] shadow-xl">
        <h2 className="text-[24px] font-bold mb-4 px-10 text-blue-800 uppercase">
          Discount List
        </h2>

        <div className="w-full h-[90vh] shadow-xl overflow-y-auto p-4 text-[18px]">
          {discounts.map((discount) => (
            <div
              key={discount?.id_discount}
              className="border border-gray-300 p-4 mb-4 rounded-lg"
            >
              <p className="text-lg font-bold mb-2">
                Discount ID: {discount?.id_discount}
              </p>
              <p>
                <span className="text-[blue] font-bold text-[18px] mr-5">
                  Start Date:{" "}
                </span>
                {discount?.dateStart}
              </p>
              <p>
                <span className="text-[blue] font-bold text-[18px] mr-5">
                  End Date:{" "}
                </span>
                {discount?.dateEnd}
              </p>
              <p>
                <span className="text-[blue]  font-bold text-[18px] mr-5">
                  Discount Percent:{" "}
                </span>
                {discount?.discountPercent
                  ? `${discount?.discountPercent}%`
                  : "N/A"}
              </p>
              <p>
                <span className="text-[blue] font-bold text-[18px] mr-5">
                  Discount Money:{" "}
                </span>
                {discount?.discountMoney
                  ? `$${discount?.discountMoney}`
                  : "N/A"}
              </p>
              <p>
                <span className="text-[blue] font-bold text-[18px] mr-5">
                  Max Discount:{" "}
                </span>
                {discount?.maxDiscount ? `$${discount?.maxDiscount}` : "N/A"}
              </p>
              <p>
                <span className="text-[blue] font-bold text-[18px] mr-5">
                  Min Bill:{" "}
                </span>
                {discount?.minBill ? `$${discount?.minBill}` : "N/A"}
              </p>
              <p>
                <span className="text-[blue] font-bold text-[18px] mr-5">
                  Quantity:{" "}
                </span>
                {discount?.quantity}
              </p>
              <p>
                <span className="text-[blue] font-bold text-[18px] mr-5">
                  Category ID:{" "}
                </span>
                {discount?.id_category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDiscountList;
