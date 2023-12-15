import React, { useEffect, useState } from "react";
import { discounts, paymentMethodList, productList } from "./CartDataFake";
import { getCardListAPI } from "../../APIs/StoreAPI";

const image =
  "https://lifeisbeyeeutiful.com/wp-content/uploads/2018/10/LAZADA.png";

const Cart = () => {
  const [selectedCartItems, setSelectedCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discountList, setDiscountList] = useState(discounts);
  const [cartItemList, setCartItemList] = useState(productList);
  const [paymentMethosdList, setPaymentMethosdList] =
    useState(paymentMethodList);

  useEffect(() => {
    // call function get payment method list
    // setPaymentMethosdList;
    const callAPI = async () => {
      const res = await getCardListAPI(sessionStorage.getItem("id_user"));

      console.log("reponse form get getCardListAPI", res);

      setCartItemList(res);
    };
    callAPI();
  }, []);

  // HADNDLE SELECT PRODUCT ITEM

  const handleCheckboxChange = (productId) => {
    const updatedSelectedCartItem = selectedCartItems.includes(productId)
      ? selectedCartItems.filter((id) => id !== productId)
      : [...selectedCartItems, productId];

    console.log("List cart item id:", updatedSelectedCartItem);

    // call get discount list

    // setDiscountList;

    setSelectedCartItems(updatedSelectedCartItem);
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    setSelectedCartItems(
      selectAll ? [] : cartItemList.map((product) => product.id_product)
    );

    // call get discount list

    // setDiscountList;

    console.log(
      "List cart item id:",
      selectAll ? [] : cartItemList.map((product) => product.id_product)
    );
  };

  // HANDLE GET DISCOUNT LIST WHEN SELECT CART ITEM CHANGE

  const handleDiscountSelect = (discount) => {
    setSelectedDiscount(discount);
  };

  useEffect(() => {
    // call function get discount list (selectedProducts)
    // setDiscountList;
  }, [selectedCartItems]);

  // CHECKOUT FUNCTION

  const handleCheckout = () => {
    const checkoutInfo = {
      selectedCartItems,
      selectedDiscount,
      address,
      phoneNumber,
      paymentMethod,
    };

    // call function checkout (id_user, id_discount, id_payment method , total price , address , pnumber)

    console.log("Checkout information:", checkoutInfo);
  };

  return (
    <div className="w-[80vw] mx-auto h-[95vh] flex  mt-5  ">
      <div className="w-2/3 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            className="text-blue-500 hover:underline"
            onClick={handleSelectAllChange}
          >
            <span className="text-[18px] font-bold">
              {selectAll ? "Unselect All" : "Select All"}
            </span>
          </button>
        </div>
        <div className="w-full h-[950px] shadow-lg overflow-y-scroll">
          {cartItemList.map((product) => (
            <div key={product.id} className="flex items-center mb-3">
              <div className="w-[100%]  flex flex-col items-center justify-between shadow-xl mt-3 rounded-lg p-2">
                <div className="w-full flex item-center justify-start gap-2 text-[18px]">
                  <input
                    type="checkbox"
                    id={`product-${product.id_product}`}
                    checked={selectedCartItems.includes(product.id_product)}
                    onChange={() => handleCheckboxChange(product.id_product)}
                    className="mr-2 h-5 w-5 mt-1"
                  />
                  <label
                    htmlFor={`product-${product.id_product}`}
                    className="flex-1 font-bold inline-block"
                  >
                    {product.product_name} - ${product.product_price}
                  </label>
                </div>
                <div className="w-full flex items-center justify-between text-[18px]">
                  <div className="w-p[75%]">
                    <p>
                      <span className="font-bold">Description: </span>
                      {product?.product_description || 0}
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Quantity: </span>
                      {product?.quantity || 0}
                    </p>
                  </div>
                  <div className="w-[25%] h-[200px] shrink-0 overflow-hidden">
                    <img
                      src={product.image || image}
                      alt=""
                      className="w-full h-full rounded-md  object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bên phải: Thông tin tổng quát */}

      <div className="w-1/3 flex items-center flex-col justify-start gap-5">
        <div className=" p-4 w-full border-l text-[18px] shadow-lg ">
          <h2 className="text-2xl font-bold mb-4">Discount</h2>

          <div className="w-full h-[250px] border-[1px] shadow-lg border-black rounded-lg overflow-y-auto">
            {discountList.map((discount) => (
              <div
                key={discount.id_discount}
                className={`p-2 cursor-pointer m-2 rounded-lg  shadow-lg ${
                  selectedDiscount === discount ? "bg-gray-200" : ""
                }`}
                onClick={() => handleDiscountSelect(discount)}
              >
                {/* <p>ID: {discount.id_discount}</p> */}
                {discount.discountType === "percent" ? (
                  <p>Discount Percent: {discount.discountPercent}%</p>
                ) : discount.discountType === "money" ? (
                  <p>Discount Money: ${discount.discountMoney}</p>
                ) : null}
                {discount.maxDiscount !== null && (
                  <p>Max Discount: ${discount.maxDiscount}</p>
                )}
                <p>Min Bill: ${discount.minBill}</p>
                <p>Total Cost: ${discount.totalMoney}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 w-full border-l text-[18px] shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="w-full  border-[1px] shadow-lg border-black rounded-lg p-3">
            <p>Total selected products: {selectedCartItems.length}</p>

            {/* get db total cost form */}

            {/* Display other information form bs if any */}
            <p>Other info: {}</p>
            <p>Other info: {}</p>
            <p>Other info: {}</p>
          </div>

          <div className="mt-4">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Payment Method:
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a payment method</option>;
              {paymentMethosdList.map((payment, index) => (
                <option value={payment?.id_payment}>
                  {payment?.name_payment}
                </option>
              ))}
            </select>
          </div>

          {/* Thêm các trường nhập cho địa chỉ và số điện thoại */}
          <div className="mt-4">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            className="text-white px-4 py-2 rounded bg-slate-600 font-bold text-[18px] mt-5"
            onClick={handleCheckout}
            disabled={selectedCartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
