import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exampleComments } from "./ProductList";
import { toast } from "../../Components/Toastify/Toastify";
import { getDetailProductAPI } from "../../APIs/CustomerAPI";
import { addToCartAPI } from "../../APIs/StoreAPI";

const image =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState(exampleComments);
  const [ProductDetail, setProductDetail] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const res = await getDetailProductAPI(productId);
      setComments(res?.ProductRating);
      setProductDetail(res?.ProductDetail[0]);
    };
    callAPI();

    console.log("Get product with productId :", productId);
  }, [productId]);

  const handleAddToCart = () => {
    const data = {
      id_user: sessionStorage.getItem("id_user"),
      id_product: productId,
      quantity: quantity,
      totalPrice: quantity * ProductDetail?.price,
    };

    const callAPI = async () => {
      const res = await addToCartAPI(data);
      console.log(res);

      if (res?.status === "200") {
        toast.success("Add product to cart successfully");
      } else {
        toast.error("Product already on cart");
      }
    };

    callAPI();
  };

  return (
    <div className="w-[80vw] mx-auto h-[95vh] ">
      <div className="w-full mx-auto flex items-start mt-5 justify-center">
        <div className="w-1/2  flex items-start justify-center rounded-lg overflow-hidden h-[600px] px-7 py-5 shadow-xl">
          <img
            src={ProductDetail?.image || image}
            alt={ProductDetail?.name}
            className="w-full h-full object-center rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-start px-7 py-5 gap-4 text-[18px] h-[600px] shadow-xl">
          <h2 className="w-full text-[30px] font-bold ">
            {ProductDetail?.name}
          </h2>
          <p>
            <span className="text font-bold pr-3">Price: </span>$
            {ProductDetail?.price}
          </p>
          <p>
            <span className="text font-bold pr-3">Stock: </span>{" "}
            {ProductDetail?.soldNumber}
          </p>
          <p>
            <span className="text font-bold pr-3">Remaining: </span>
            {ProductDetail?.remaining || 89}
          </p>
          <p>
            <span className="text font-bold pr-3">Rating: </span>{" "}
            {ProductDetail?.productRating} / 5
          </p>

          <p>
            <span className="text font-bold pr-3">Mô tả sản phẩm: </span>
            {ProductDetail?.description}
          </p>
          <div className="flex mt-auto items-center gap-x-4 justify-center">
            <div>
              <label htmlFor="quantity" className="text font-bold">
                Quantity:
              </label>
            </div>
            <div className="border-2 border-black rounded-lg overflow-hidden">
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="p-3 border-1 border-neutral-800 w-20"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div
            className="inline-block ml-auto p-3 bg-blue-600 text-white font-bold mt-auto rounded-md cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to cart
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
                <span className="text-[blue] mr-3 font-bold ">Detail: </span>{" "}
                {item?.detail}
              </p>
              <p className=" text-center">
                <span className="text-[blue] mr-3 font-bold">
                  Rating Star:{" "}
                </span>{" "}
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
