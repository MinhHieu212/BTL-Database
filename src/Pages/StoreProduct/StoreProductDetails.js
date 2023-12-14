import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductList, exampleComments } from "./ProductList";
import {
  getStoreSingleProductAPI,
  modifyProductAPI,
} from "../../APIs/StoreAPI";
import { toast } from "../../Components/Toastify/Toastify";

const image =
  "https://images.unsplash.com/photo-1702234801211-eaff6bd8be10?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const product = {
  id: 9,
  image:
    "https://images.unsplash.com/photo-1702234801211-eaff6bd8be10?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Tai nghe không dây",
  price: 80,
  category: "Electronics",
  rating: 4.2,
  stock: 40,
  remaining: 120,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe suscipit officiis dolore dolorem iure laborum consequuntur aut nam voluptates laboriosam alias quo tenetur culpa nihil possimus, obcaecati quibusdam earum enim.",
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [name, setName] = useState(product?.name);
  const [price, setPrice] = useState(product?.price);
  const [remaining, setRemaining] = useState(product?.remaining);
  const [description, setDescription] = useState(product?.description);
  const [comments, setComments] = useState(exampleComments);
  const [render, setRender] = useState(true);

  useEffect(() => {
    const callAPI = async () => {
      const res = await getStoreSingleProductAPI({
        id_store: sessionStorage.getItem("id_store"),
        id_product: productId,
      });

      console.log("response from getStoreSingleProductAPI : ", res.products[0]);

      if (res?.status === 200) {
        console.log("getStoreSingleProductAPI successfully!");

        setName(res?.products[0]?.name);
        setPrice(res?.products[0]?.price);
        setRemaining(res?.products[0]?.quantity);
        setDescription(res?.products[0]?.description);
        setComments(res?.ratings);
      } else {
        console.log("getStoreSingleProductAPI failed!");
      }
    };

    callAPI();
  }, [productId, render]);

  const handleUpdateProduct = () => {
    const data = {
      id_product: productId,
      name: name,
      price: price,
      quantity: remaining,
      description: description,
    };

    const callAPI = async () => {
      const res = await modifyProductAPI(data);

      if (res?.status === 200) {
        console.log("getStoreSingleProductAPI successfully!");
        toast.success("Modify Succesful");
        setRender(!render);
      } else {
        console.log("getStoreSingleProductAPI failed!");
        toast.error("Modify Faild");
      }
    };

    callAPI();
  };

  return (
    <div className="w-[80vw] mx-auto h-[95vh] ">
      <div className="w-full mx-auto flex items-start mt-5 justify-center">
        <div className="w-1/2  flex items-start justify-center rounded-lg overflow-hidden h-[600px] px-7 py-5 shadow-xl">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-start px-7 py-5 gap-4 text-[18px] h-[600px] shadow-xl">
          <div className="w-[600px] items-center justify-between gap-5 flex">
            <span htmlFor="" className="font-bold ">
              Product Name:
            </span>
            <input
              type="text"
              value={name}
              className="p-2 border-2 inline  font-bold  border-black outline-none rounded-md"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-[600px] items-center justify-between gap-5 flex">
            <span htmlFor="" className="font-bold ">
              Product Price:
            </span>
            <input
              type="number"
              value={price}
              className="p-2 border-2 text font-bold pr-3  border-black outline-none rounded-md"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="w-[600px] items-center justify-between gap-5 flex">
            <span htmlFor="" className="font-bold ">
              Product Remaining:
            </span>
            <input
              type="number"
              value={remaining}
              className="p-2 border-2 text font-bold pr-3  border-black outline-none rounded-md"
              onChange={(e) => setRemaining(e.target.value)}
            />
          </div>
          <div className="w-[600px] items-start justify-between gap-5 flex">
            <span htmlFor="" className="font-bold ">
              Product description:
            </span>
            <textarea
              name=""
              id=""
              value={description}
              className="p-2 border-2 text pr-3 h-[250px] resize-none w-[350px] border-black outline-none rounded-md"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <p>
            <span className="text font-bold pr-3">Rating: </span>{" "}
            {product?.rating} / 5
          </p>
          <div className="w-full mt-5 flex item-center justify-end">
            <button
              className="px-4 py-2 bg-slate-800 text-white font-bold rounded-md"
              onClick={handleUpdateProduct}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pb-5 shadow-xl mt-10">
        <div className="text-[20px] w-[95%] ml-10 font-bold  mt-5 first-letter:flex items-center justify-between">
          <span> List Comments </span>
        </div>
        <div className="w-full flex items-center justify-center gap-3 flex-col">
          {comments.map((item, index) => (
            <div
              key={index}
              className="w-[95%] text-[18px] mx-auto shadow-lg p-3"
            >
              <p className=" mb-3  text-center">
                <span className="text-[blue] mr-3  ">Detail: </span>{" "}
                {item?.detail}
              </p>
              <p className=" text-center">
                <span className="text-[blue] mr-3">Rating Star: </span>{" "}
                {item?.ratingStar} / 5
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
