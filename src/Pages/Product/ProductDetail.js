import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductList, exampleComments } from "./ProductList";
import EditCommentModal from "../../Components/Modal/EditCommentModal";
import { toast } from "../../Components/Toastify/Toastify";

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(5);

  useEffect(() => {
    console.log("Get product with productId :", productId);
  }, [productId]);

  const product = ProductList.find((item) => item.id === parseInt(productId));

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product?.name} to cart`);

    toast.success("Add product to cart successfully");
  };

  if (!product) {
    return <p>Sản phẩm không tồn tại</p>;
  }

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleAddComment = () => {
    console.log("New comment and rating insert", {
      comments: comments,
      rating: rating,
      id_prodcut: productId,
      id_buyer: sessionStorage.getItem("id_user") || 1,
    });
    setComments("");
  };

  const handleEditComment = (id_comment) => {
    console.log("Edit comment : ", id_comment);
  };
  const handleRemoveComment = (id_comment) => {
    console.log("Remove comment : ", id_comment);

    toast.success("Remove comment successfully");
  };

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
            <span className="text font-bold">Price: </span>${product?.price}
          </p>
          <p>
            <span className="text font-bold">Discount: </span>{" "}
            {product?.discount}
          </p>

          <p>
            <span className="text font-bold">Mô tả sản phẩm: </span>
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
        <div className="text-[20px] mx-auto w-[95%] ml-10 font-bold  flex items-center justify-between">
          <span> Comments </span>
          <select
            name="ratingStar"
            id="ratingStar"
            className="w-[100px] border-2 border-black px-2 py-1 rounded-lg"
            onChange={handleRatingChange}
            value={rating}
          >
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
          <button
            className="bg bg-slate-600 text-white p-2 rounded-lg"
            onClick={handleAddComment}
          >
            Add comments
          </button>
        </div>
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
              <div className="w-full flex item-center gap-4 justify-end">
                <EditCommentModal
                  initComment={item?.detail}
                  initRating={item?.ratingStar}
                  id_comment={item?.id_comment}
                >
                  <button
                    className="bg-slate-500 p-2 rounded-md text-white"
                    onClick={() => handleEditComment(item?.id_comment)}
                  >
                    Edit
                  </button>
                </EditCommentModal>
                <button
                  className="bg-slate-500 p-2 rounded-md text-white"
                  onClick={() => handleRemoveComment(item?.id_comment)}
                >
                  Remove
                </button>
              </div>
              <p>
                <span className="text-[blue]">Detail: </span> {item?.detail}
              </p>
              <p>
                <span className="text-[blue]">Rating Star: </span>{" "}
                {item?.ratingStar}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
