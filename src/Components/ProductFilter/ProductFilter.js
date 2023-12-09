import React, { useState } from "react";
import { SearchIcon } from "../../Assets/icons";

const ProductFilter = () => {
  const [productName, setProductName] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [topSale, setTopSale] = useState(false);

  const handleFilterChange = () => {
    const params = {
      topSale: topSale,
      priceRange: priceRange,
    };
    console.log("Filter Params: ", params);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search product: ", productName);
    setProductName("");
  };

  return (
    <div className="w-full shadow-lg h-full flex flex-col items-center justify-start p-4">
      <div className="w-full font-bold text-[24px] ">Filter</div>

      {/* Tên sản phẩm */}
      <form
        className="mb-4 w-full flex item-center justify-between mt-1"
        onSubmit={handleSearch}
      >
        <div className="w-[90%]">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tên sản phẩm
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="mt-6" type="submit">
          <SearchIcon></SearchIcon>
        </button>
      </form>

      {/* Mức giá */}
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mức giá
        </label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Tất cả mức giá</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-400">$201 - $400</option>
          <option value="401-800">$401 - $800</option>
          <option value="801-1000">$801 - $1000</option>
        </select>
      </div>

      {/* Nút áp dụng bộ lọc */}
      <div className="w-full flex item-center justify-between">
        <div className="w-[60%] flex item-center mt-2 justify-start ">
          <input
            type="checkbox"
            className="w-5 h-5 mr-3"
            id="hotSale"
            onChange={() => {
              setTopSale(!topSale);
            }}
          />
          <label htmlFor="hotSale" className="text-gray-700 text-sm font-bold ">
            Các sản phẩm bán chạy nhất
          </label>
        </div>
        <button
          onClick={handleFilterChange}
          className=" text-white px-4 py-2 rounded bg-slate-600 font-bold text-[18px]"
        >
          Áp dụng bộ lọc
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
