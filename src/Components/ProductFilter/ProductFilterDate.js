import React, { useState } from "react";

const ProductFilterDate = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSortProducts = () => {
    const params = {
      startDate: startDate,
      endDate: endDate,
      sortBy: sortBy,
    };
    console.log("params: ", params);
  };

  return (
    <div className="w-full shadow-lg h-full flex flex-col items-center justify-start p-4">
      <div className="w-full font-bold text-[24px] ">Sort</div>
      <div className=" flex items-center justify-between w-full mt-1">
        <div className="mb-4 w-[50%]">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ngày bắt đầu
          </label>
          <input
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </div>

        <div className="mb-4 w-[50%]">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ngày kết thúc
          </label>
          <input
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full text-[18px] font-bold flex items-center justify-center gap-5">
        <div className="flex items-center w-[50%] justify-start gap-3">
          <input
            className="w-5 h-5"
            type="radio"
            id="categories"
            value="categories"
            name="SortBy"
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          />
          <label htmlFor="categories">Categories</label>
        </div>
        <div className="flex items-center w-[50%] justify-start gap-3">
          <input
            className="w-5 h-5"
            type="radio"
            id="products"
            name="SortBy"
            value="products"
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          />
          <label htmlFor="products">Products</label>
        </div>
      </div>
      <div className="w-full flex item-center justify-end mt-[50px]">
        <button
          className=" text-white px-4 py-2 rounded bg-slate-600 font-bold text-[18px]"
          onClick={handleSortProducts}
        >
          Áp dụng bộ lọc
        </button>
      </div>
    </div>
  );
};

export default ProductFilterDate;
