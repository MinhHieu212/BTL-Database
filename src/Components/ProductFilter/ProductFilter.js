import React, { useState } from "react";
import { SearchIcon } from "../../Assets/icons";

const CategoriesList = [
  {
    id_category: 1001,
    name_category: "Electronics",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1002,
    name_category: "Clothing",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1003,
    name_category: "Home Decor",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1004,
    name_category: "Books",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1005,
    name_category: "Sports",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1006,
    name_category: "Beauty",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1007,
    name_category: "Automotive",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1008,
    name_category: "Toys",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1009,
    name_category: "Groceries",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
  {
    id_category: 1010,
    name_category: "Health",
    image:
      "https://i.pinimg.com/736x/f7/71/1a/f7711ad07aeae437ced4c4269635cc4b--mua-s%E1%BA%AFm-google-play.jpg",
  },
];

const ProductFilter = ({ handleSetParam = () => {} }) => {
  const [productName, setProductName] = useState("null");
  const [startPrice, setStartPrice] = useState("null");
  const [endPrice, setEndPrice] = useState("null");
  const [hotSale, setHotSale] = useState("null");
  const [id_category, setId_Catogory] = useState("null");

  const handleFilterChange = () => {
    const params = {
      topProduct: hotSale,
      minPrice: startPrice === "" ? "null" : Number(startPrice),
      maxPrice: endPrice === "" ? "null" : Number(endPrice),
      id_catgory: id_category,
      searchField: productName === "" ? "null" : productName,
    };

    handleSetParam(params);

    console.log("Filter Params: ", params);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search product: ", productName);
  };

  const hanbleShowAllProducts = () => {
    setProductName("null");
    setStartPrice("null");
    setEndPrice("null");
    setHotSale("null");
    setId_Catogory("null");

    const params = {
      searchField: "null",
      id_catgory: "null",
      minPrice: "null",
      maxPrice: "null",
      topProduct: "null",
    };

    handleSetParam(params);
  };

  return (
    <div className="w-[100%] flex items-center justify-between">
      <div className="flex  w-[50%] flex-wrap gap-3 p-4 h-[300px] shadow-lg">
        <div className="flex items-center justify-between w-full">
          <div className="w-full font-bold text-[24px] ">Categories</div>
          <div
            className="font-bold text-[blue] text-[24px] w-[200px] cursor-pointer"
            onClick={hanbleShowAllProducts}
          >
            All products
          </div>
        </div>
        <div className="w-full overflow-x-scroll gap-3 flex">
          {CategoriesList.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer shrink-0 justify-center`}
              onClick={() => {
                setId_Catogory(category?.id_category);
              }}
            >
              <div
                className={`bg-white  shrink-0 rounded-lg shadow-lg p-4 ${
                  id_category === category?.id_category ? "bg-blue-200" : ""
                }`}
              >
                <img
                  src={category.image}
                  alt={category?.name}
                  className="h-[70px] w-[70px] block mx-auto object-cover mb-4 rounded-full"
                />
                <p className="text-lg text-center font-bold mb-2 w-[110px]">
                  {category?.name_category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%] shadow-lg h-[300px] flex flex-col items-center justify-start p-4">
        <div className="w-full font-bold text-[24px] ">Filter</div>

        <form
          className="mb-3 w-full flex item-center justify-between mt-1"
          onSubmit={handleSearch}
        >
          <div className="w-[90%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product name
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

        <div className="flex items-center justify-between w-full pr-[70px] mb-3">
          <div>
            <label
              htmlFor="startPrice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Start Price:{" "}
            </label>
            <input
              type="number"
              value={startPrice}
              onChange={(e) => setStartPrice(e.target.value)}
              id="startPrice"
              className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="endPrice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              End Price:{" "}
            </label>
            <input
              value={endPrice}
              onChange={(e) => setEndPrice(e.target.value)}
              type="number"
              id="endPrice"
              className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        {/* Nút áp dụng bộ lọc */}
        <div className="w-full mt-3 flex item-center justify-between">
          {/* <div className="flex item-center mt-2 justify-start ">
            <input
              type="radio"
              className="w-5 h-5 mr-3"
              id="hotCategory"
              value="hotCategory"
              name="hotSale"
              onChange={() => {
                setHotSale("hotCategory");
              }}
            />
            <label
              htmlFor="hotCategory"
              className="text-gray-700 text-sm font-bold "
            >
              Danh mục bán chạy nhất
            </label>
          </div> */}
          <div className=" flex item-center mt-2 justify-start ">
            <input
              type="checkbox"
              className="w-5 h-5 mr-3"
              value="hotProduct"
              id="hotProduct"
              name="hotSale"
              onChange={() => {
                setHotSale("BestRating");
              }}
            />
            <label
              htmlFor="hotProduct"
              className="text-gray-700 text-sm font-bold "
            >
              Các sản phẩm bán chạy nhất
            </label>
          </div>
          <button
            onClick={handleFilterChange}
            className=" text-white px-4 py-2 rounded bg-slate-600 font-bold text-[18px]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
