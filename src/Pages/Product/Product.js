import React, { useEffect, useState } from "react";
import ProductFilter from "../../Components/ProductFilter/ProductFilter";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import { filterProductAPI, getAllProductAPI } from "../../APIs/CustomerAPI";

const image =
  "https://lifeisbeyeeutiful.com/wp-content/uploads/2018/10/LAZADA.png";

const Product = () => {
  const [productList, setProductList] = useState(ProductList);

  useState(() => {
    const callAPI = async () => {
      const res = await getAllProductAPI();

      console.log("reponse form get all product", res);

      setProductList(res?.Product);
    };
    callAPI();
  });

  const [params, setParams] = useState({
    searchField: null,
    id_catgory: null,
    minPrice: null,
    maxPrice: null,
    topProduct: null,
  });

  useEffect(() => {
    const callAPI = async () => {
      const res = await filterProductAPI(params);

      console.log("params form handeleFilterProduct", res);

      setProductList(res?.data);
    };
    callAPI();
  }, [params]);

  return (
    <div className="w-[80vw] mx-auto h-[95vh] mt-5">
      <div className="flex items-center justify-center w-full h-[280px] gap-3">
        <div className="w-[100%] h-full">
          <ProductFilter
            handleSetParam={(param) => setParams(param)}
          ></ProductFilter>
        </div>
      </div>
      <div className="w-full flex items-start justify-center mt-3 p-3 h-[94vh] overflow-y-scroll shadow-lg h-50">
        <div className="flex w-full flex-wrap justify-start gap-y-5">
          {productList?.map((item, index) => (
            <div key={index} className="w-[20%] p-3 cursor-pointer shadow-lg">
              <Link to={`/product/${item?.id_product}`}>
                <img
                  src={item?.image || image}
                  alt={item?.name}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2 text-[18px]">
                  <p className="font-bold w-full overflow-clip truncate">
                    {item?.name}
                  </p>
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
    </div>
  );
};

export default Product;
