import React from "react";
import ProductFilter from "../../Components/ProductFilter/ProductFilter";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="w-[1500px] mx-auto h-[95vh] mt-5">
      <div className="flex items-center justify-center w-full h-[280px] gap-3">
        <div className="w-[100%] h-full">
          <ProductFilter></ProductFilter>
        </div>
      </div>
      <div className="w-full flex items-start justify-center mt-3 p-3 h-[94vh] overflow-y-scroll shadow-lg h-50">
        <div className="flex flex-wrap justify-start gap-y-5">
          {ProductList.map((item, index) => (
            <div key={index} className="w-[20%] p-3 cursor-pointer shadow-lg">
              <Link to={`/product/${item?.id}`}>
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
                    <p className="text-blue-500">Rating: {item?.rating} / 5</p>
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

export default Product;
