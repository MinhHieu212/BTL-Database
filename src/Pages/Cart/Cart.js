import React, { useState } from "react";
import { discounts, productList } from "./CartDataFake";

const Cart = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // CART FUNCTION

  const handleCheckboxChange = (productId) => {
    const updatedSelectedProducts = selectedProducts.includes(productId)
      ? selectedProducts.filter((id) => id !== productId)
      : [...selectedProducts, productId];

    setSelectedProducts(updatedSelectedProducts);
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    setSelectedProducts(
      selectAll ? [] : productList.map((product) => product.id)
    );
  };

  // DISCOUNT FUNCTION

  const handleDiscountSelect = (discount) => {
    setSelectedDiscount(discount);
  };

  // Tính tổng tiền với chiết khấu
  const calculateTotalWithDiscount = () => {
    const totalWithoutDiscount = selectedProducts.reduce((total, productId) => {
      const product = productList.find((p) => p.id === productId);
      return total + (product ? product.price : 0);
    }, 0);

    if (!selectedDiscount) {
      return totalWithoutDiscount;
    }

    // Áp dụng chiết khấu
    if (selectedDiscount.discountType === "percent") {
      const discountAmount =
        (selectedDiscount.discountPercent / 100) * totalWithoutDiscount;
      const discountedTotal = totalWithoutDiscount - discountAmount;
      return Math.max(discountedTotal, selectedDiscount.minBill);
    } else if (selectedDiscount.discountType === "money") {
      const discountedTotal =
        totalWithoutDiscount - selectedDiscount.discountMoney;
      return Math.max(discountedTotal, selectedDiscount.minBill);
    }

    return totalWithoutDiscount;
  };

  const handleCheckout = () => {
    // Lấy thông tin từ state để sử dụng khi checkout
    const checkoutInfo = {
      selectedProducts,
      selectedDiscount,
      address,
      phoneNumber,
      paymentMethod,
      totalCost: calculateTotalWithDiscount(),
    };

    console.log("Checkout information:", checkoutInfo);
  };

  return (
    <div className="w-[1500px] mx-auto h-[95vh] flex  mt-5  ">
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
        <div className="w-full h-[920px] shadow-lg overflow-y-scroll">
          {productList.map((product) => (
            <div key={product.id} className="flex items-center mb-3">
              <div className="w-[100%]  flex flex-col items-center justify-between shadow-xl mt-3 rounded-lg p-2">
                <div className="w-full flex item-center justify-start gap-2 text-[18px]">
                  <input
                    type="checkbox"
                    id={`product-${product.id}`}
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleCheckboxChange(product.id)}
                    className="mr-2 h-5 w-5 mt-1"
                  />
                  <label
                    htmlFor={`product-${product.id}`}
                    className="flex-1 font-bold inline-block"
                  >
                    {product.name} - ${product.price}
                  </label>
                </div>
                <div className="w-full flex items-center justify-between text-[18px]">
                  <div className="w-p[75%]">
                    <p>
                      <span className="font-bold">Description: </span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugiat necessitatibus et error illo quisquam.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Quantity: </span>
                      {product?.quantity || 0}
                    </p>
                  </div>
                  <div className="w-[25%] h-[200px] shrink-0 overflow-hidden">
                    <img
                      src={product.image}
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
            {discounts.map((discount) => (
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
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4  mt-4">Selected Discount:</h3>
          <div className="w-full h-[100px] border-[1px] shadow-lg border-black rounded-lg p-3">
            {selectedDiscount ? (
              <div>
                {/* <p>ID: {selectedDiscount.id_discount}</p> */}
                {selectedDiscount.discountType === "percent" ? (
                  <p>Discount Percent: {selectedDiscount.discountPercent}%</p>
                ) : selectedDiscount.discountType === "money" ? (
                  <p>Discount Money: ${selectedDiscount.discountMoney}</p>
                ) : null}
                {selectedDiscount.maxDiscount !== null && (
                  <p>Max Discount: ${selectedDiscount.maxDiscount}</p>
                )}
                <p>Min Bill: ${selectedDiscount.minBill}</p>
                {/* Thêm các thông tin khác nếu cần */}
              </div>
            ) : (
              <span>No discount selected</span>
            )}
          </div>
        </div>

        <div className="p-4 w-full border-l text-[18px] shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="w-full  border-[1px] shadow-lg border-black rounded-lg p-3">
            <p>Total selected products: {selectedProducts.length}</p>
            <p>Total cost: ${calculateTotalWithDiscount().toFixed(2)}</p>
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
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <button
            className="text-white px-4 py-2 rounded bg-slate-600 font-bold text-[18px] mt-5"
            onClick={handleCheckout}
            disabled={selectedProducts.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
