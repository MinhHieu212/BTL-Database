import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductList, exampleComments } from "./ProductList";
import { toast } from "../../Components/Toastify/Toastify";

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("Get product with productId :", productId);
  }, [productId]);

  const product = ProductList.find((item) => item.id === parseInt(productId));

  const handleAddToCart = () => {

    // call function create cart (id_product , id_user)

    console.log(
      `Added ${quantity} ${product?.name} to cart and total price: $ ${
        quantity * product?.price
      } `
    );

    toast.success("Add product to cart successfully");
  };

  if (!product) {
    return <p>Sản phẩm không tồn tại</p>;
  }

  return (
    <div className="w-[1500px] mx-auto h-[95vh] ">
      <div className="w-[1500px] mx-auto flex items-start mt-5 justify-center">
        <div className="w-1/2  flex items-start justify-center rounded-lg overflow-hidden h-[600px] px-7 py-5 shadow-xl">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-start px-7 py-5 gap-4 text-[18px] h-[600px] shadow-xl">
          <h2 className="w-full text-[30px] font-bold ">{product?.name}</h2>
          <p>
            <span className="text font-bold pr-3">Price: </span>$
            {product?.price}
          </p>
          <p>
            <span className="text font-bold pr-3">Stock: </span>{" "}
            {product?.stock}
          </p>
          <p>
            <span className="text font-bold pr-3">Remaining: </span>
            {product?.remaining || 89}
          </p>
          <p>
            <span className="text font-bold pr-3">Rating: </span>{" "}
            {product?.rating} / 5
          </p>

          <p>
            <span className="text font-bold pr-3">Mô tả sản phẩm: </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            est iure non libero repudiandae dolores officiis culpa facere hic
            accusantium dolor totam ex, dolorem nulla doloribus minima aperiam
            molestiae vitae!
          </p>
          <div className="flex items-center gap-x-4 justify-center">
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
        <textarea
          name="commentTextArea"
          id="commentTextArea"
          cols="30"
          value={comments}
          rows="10"
          className="p-5 border-2 border-black outline-none mx-auto w-[95%] inline-block ml-10 rounded-lg h-[100px] resize-none mt-3"
          placeholder="Write comment"
          onChange={(e) => setComments(e.target.value)}
        ></textarea>

        <div className="text-[20px] w-[95%] ml-10 font-bold  mt-5 first-letter:flex items-center justify-between">
          <span> List Comments </span>
        </div>
        <div className="w-full flex items-center justify-center gap-3 flex-col">
          {exampleComments.map((item, index) => (
            <div key={index} className="w-[95%] mx-auto shadow-lg p-3">
              <p>
                <span className="text-[blue]">Detail: </span> {item?.detail}
              </p>
              <p>
                <span className="text-[blue]">Rating Star: </span>{" "}
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
