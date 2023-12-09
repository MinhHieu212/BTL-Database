import React from "react";
import Categories from "../../Components/Categories/Categories";
import ProductFilter from "../../Components/ProductFilter/ProductFilter";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import ProductFilterDate from "../../Components/ProductFilter/ProductFilterDate";

const Product = () => {
  return (
    <div className="w-[1500px] mx-auto h-[95vh] mt-5">
      <div className="flex items-center justify-center w-full h-[280px] gap-3">
        <div className="w-[40%] h-full">
          <Categories></Categories>
        </div>
        <div className="w-[30%] h-full">
          <ProductFilterDate></ProductFilterDate>
        </div>
        <div className="w-[30%] h-full">
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
                  <p className="text-green-500">Discount: {item?.discount}</p>
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
