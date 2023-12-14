import { Routes, Route, useNavigate } from "react-router-dom";
import Product from "./Pages/Product/Product";
import CustomerHeader from "./Components/Header/CustomerHeader";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/Product/ProductDetail";
import Account from "./Pages/Account/Account";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import Orders from "./Pages/Orders/Orders";
import AdminDiscountList from "./Pages/AdminDiscountList/AdminDiscountList.js";
import AdminUsersList from "./Pages/AdminUsersList/AdminUsersList.js";
import StoreOwnerHeader from "./Components/Header/StoreOwnerHeader.js";
import AdminHeader from "./Components/Header/AdminHeader.js";
import StoreRevanue from "./Pages/StoreRevanue/StoreRevanue.js";
import StoreProduct from "./Pages/StoreProduct/StoreProduct.js";
import StoreDiscountList from "./Pages/StoreDiscountList/StoreDiscountList.js";
import StoreProductDetails from "./Pages/StoreProduct/StoreProductDetails.js";
import StoreOrderList from "./Pages/StoreOrderList/StoreOrderList.js";

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("id_user");
    sessionStorage.removeItem("id_store");
    sessionStorage.removeItem("usertype");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("dob");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("pNumber");
    navigate("/BTL-Database");
  };

  return (
    <div className="">
      <div className="fixed">
        <div
          className={`w-[100vw] h-[60px] bg-gray-800 flex items-center justify-between gap-3 px-2 md:px-10 border-b-2 border-black `}
        >
          <div className="text-[24px] font-bold text-white">
            CommerceConnect
          </div>
          <div className="text-end w-[800px] flex items-center justify-end">
            <span className="font-bold text-white text-[18px] cursor-pointer uppercase">
              {sessionStorage.getItem("name")}
            </span>
            <span className="font-bold text-white text-[18px] cursor-pointer pl-3">
              [ {sessionStorage.getItem("usertype")} ] |
            </span>
            <span
              className="font-bold text-[18px] cursor-pointer ml-3 text-blue-500"
              onClick={handleLogout}
            >
              (Logout)
            </span>
          </div>
        </div>
        <CustomerHeader></CustomerHeader>
        <AdminHeader></AdminHeader>
        <StoreOwnerHeader></StoreOwnerHeader>
      </div>
      <div className="w-full h-[95vh] pt-[120px]">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="/BTL-Database" element={<LoginRegister />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/storeProduct" element={<StoreProduct />} />
          <Route
            path="storeProduct/:productId"
            element={<StoreProductDetails />}
          />
          <Route path="/storeRevenue" element={<StoreRevanue />} />
          <Route path="/storeDiscountList" element={<StoreDiscountList />} />
          <Route path="/storeOrdertList" element={<StoreOrderList />} />
          <Route path="/adminUserList" element={<AdminUsersList />} />
          <Route path="/adminDiscountList" element={<AdminDiscountList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
