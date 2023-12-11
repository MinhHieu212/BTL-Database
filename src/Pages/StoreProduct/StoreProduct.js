import React, { useState } from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";

const StoreProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    id_user: sessionStorage.getItem("id_user") || 1,
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      alert("Please fill in the required fields.");
      return;
    }

    console.log("New product infomation: (insert database)", newProduct);

    setNewProduct({
      name: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      id_user: sessionStorage.getItem("id_user") || 1,
    });
  };
  return (
    <div className="w-[1500px] mx-auto h-[95vh] mt-5">
      <div className="flex items-center justify-center w-full shadow-xl  p-5 flex-col gap-3">
        <h1 className="text-2xl font-bold mb-4 w-full text-start">
          Add New Product
        </h1>
        <div className="flex items-stretch w-full justify-center gap-5">
          <div className="flex item-start w-[40%] justify-start flex-col gap-5">
            <label className="text-[blue] font-bold text-[18px]" htmlFor="name">
              Name:
            </label>
            <input
              className="p-2 border-2 border-black outline-none rounded-md"
              type="text"
              id="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <label
              className="text-[blue] font-bold text-[18px]"
              htmlFor="price"
            >
              Price:
            </label>
            <input
              className="p-2 border-2 border-black outline-none rounded-md"
              type="number"
              id="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: parseFloat(e.target.value),
                })
              }
            />

            <label
              className="text-[blue] font-bold text-[18px]"
              htmlFor="image"
            >
              Image URL:
            </label>
            <input
              className="p-2 border-2 border-black outline-none rounded-md"
              type="text"
              id="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </div>
          <div className="flex item-start w-[40%] justify-start flex-col gap-5">
            <label
              className="text-[blue] font-bold text-[18px]"
              htmlFor="category"
            >
              Category:
            </label>
            <input
              className="p-2 border-2 border-black outline-none rounded-md"
              type="text"
              id="category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            />

            <label
              className="text-[blue] font-bold text-[18px]"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={newProduct.description}
              className="p-2 border-2 border-black h-[100px] resize-none outline-none rounded-md"
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
          </div>
        </div>
        <button
          className="bg-blue-500 text-white block ml-auto px-4 py-2 rounded mt-4"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      <div className="w-full flex items-start justify-center mt-3 p-3 h-[94vh] overflow-y-scroll shadow-lg h-50">
        <div className="flex flex-wrap justify-start gap-y-5">
          {ProductList.map((item, index) => (
            <div key={index} className="w-[20%] p-3 cursor-pointer shadow-lg">
              <Link to={`/storeProduct/${item?.id}`}>
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2 text-[18px]">
                  <p className="font-bold">{item?.name}</p>
                  <p className="text-gray-600">Price: {item?.price} $</p>
                  <div className="flex item-center justify-between">
                    <p className="text-gray-500">Stock: {item?.stock}</p>
                    <p className="text-blue-500">Rating: {item?.rating}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreProduct;
