import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductList, exampleComments } from "./ProductList";

const StoreProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("Get product with productId :", productId);
  }, [productId]);

  const product = ProductList.find((item) => item.id === parseInt(productId));

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
        </div>
      </div>
      <div className="w-full pb-5 shadow-xl mt-10">
        <div className="text-[20px] w-[95%] ml-10 font-bold  mt-5 first-letter:flex items-center justify-between">
          <span> List Comments </span>
        </div>
        <div className="w-full flex items-center justify-center gap-3 flex-col">
          {exampleComments.map((item, index) => (
            <div key={index} className="w-[95%] mx-auto shadow-lg   p-3">
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

export default StoreProductDetails;
