import React, { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import { addProductAPI, getStoreProductsAPI } from "../../APIs/StoreAPI";
import { toast } from "../../Components/Toastify/Toastify";

const image =
  "https://images.unsplash.com/photo-1702234801211-eaff6bd8be10?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const StoreProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    imgLink: "",
    id_category: 1,
    quantity: 1,
    id_user: sessionStorage.getItem("id_user") || 1,
  });

  const [productList, setProductList] = useState(ProductList);
  const [renderList, setRenderList] = useState(false);

  const [categories, setCategories] = useState([
    { id_category: 1001, name_category: "Electronics" },
    { id_category: 1002, name_category: "Clothing" },
    { id_category: 1003, name_category: "Home Decor" },
    { id_category: 1004, name_category: "Books" },
    { id_category: 1005, name_category: "Sports" },
    { id_category: 1006, name_category: "Beauty" },
    { id_category: 1007, name_category: "Automotive" },
    { id_category: 1008, name_category: "Toys" },
    { id_category: 1009, name_category: "Groceries" },
    { id_category: 1010, name_category: "Health" },
  ]);

  const handleAddProduct = () => {
    const data = {
      name: newProduct?.name,
      price: newProduct?.price,
      description: newProduct?.description,
      imgLink: newProduct?.imgLink,
      id_category: newProduct?.id_category,
      quantity: newProduct?.quantity,
    };

    console.log("New product infomation: (insert database)", data);

    const callAPI = async () => {
      const res = await addProductAPI({
        id_store: sessionStorage.getItem("id_store"),
        data: data,
      });

      console.log("response from addProductAPI : ", res);
      if (res?.status === 200) {
        console.log("addProductAPI successfully!");
        toast.success("Add Product successfully!");
        setRenderList(!renderList);
      } else {
        console.log("addProductAPI failed!");
        toast.error("Add Product Faild!");
      }
    };

    callAPI();

    setNewProduct({
      name: "",
      price: 0,
      description: "",
      category: "",
      imgLink: "",
      id_category: 1,
      quantity: 1,
      id_user: sessionStorage.getItem("id_user") || 1,
    });
  };

  useEffect(() => {
    const callAPI = async () => {
      const data = sessionStorage.getItem("id_store");
      const res = await getStoreProductsAPI(data);
      console.log("Response from getUserListAPI api : ", res);
      setProductList(res?.products);
    };

    callAPI();
  }, [renderList]);

  return (
    <div className="w-[80vw] flex item-start mx-auto h-[95vh] mt-5">
      <div className="w-[70%] flex items-start justify-center mt-3 p-3 h-[94vh] overflow-y-scroll shadow-lg h-50">
        <div className="flex flex-wrap justify-start gap-y-5">
          {productList.map((item, index) => (
            <div key={index} className="w-[33%] p-3 cursor-pointer shadow-lg">
              <Link to={`/storeProduct/${item?.id_product}`}>
                <img
                  src={image}
                  alt={item?.name}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2 text-[18px]">
                  <p className="font-bold">{item?.name}</p>
                  <p className="text-gray-600">Price: {item?.price} $</p>
                  <div className="flex item-center justify-between">
                    <p className="text-gray-500">Stock: {item?.soldNumber}</p>
                    <p className="text-blue-500">
                      Rating: {item?.productRating} / 5
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start justify-center h-[900px] w-[30%] shadow-xl p-5 flex-col gap-3">
        <h1 className="text-2xl font-bold mb-4 w-full text-start">
          Add New Product
        </h1>
        <div className="flex items-stretch w-full justify-center gap-5">
          <div className="flex item-start w-[100%] justify-start flex-col gap-5">
            <label
              className="text-gray-800 font-bold text-[18px]"
              htmlFor="name"
            >
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
              className="text-gray-800 font-bold text-[18px]"
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
              className="text-gray-800 font-bold text-[18px]"
              htmlFor="image"
            >
              Image URL:
            </label>
            <input
              className="p-2 border-2 border-black outline-none rounded-md"
              type="text"
              id="image"
              value={newProduct.imgLink}
              onChange={(e) =>
                setNewProduct({ ...newProduct, imgLink: e.target.value })
              }
            />

            <label
              className="text-gray-800 font-bold text-[18px]"
              htmlFor="category"
            >
              Category:
            </label>
            <select
              id="category"
              className="p-2 border-2 border-black outline-none rounded-md"
              value={newProduct.id_category}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  id_category: parseInt(e.target.value),
                })
              }
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category.id_category}>
                  {category.name_category}
                </option>
              ))}
            </select>

            <label
              className="text-gray-800 font-bold text-[18px]"
              htmlFor="quantity"
            >
              Quantity:
            </label>
            <input
              className="p-2 border-2 border-black outline-none rounded-md"
              type="number"
              id="quantity"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  quantity: parseFloat(e.target.value),
                })
              }
            />

            <label
              className="text-gray-800 font-bold text-[18px]"
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
          className="bg-gray-800 text-white block ml-auto px-4 py-2 rounded mt-4"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default StoreProduct;
