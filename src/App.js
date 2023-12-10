import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="">
      <div className="fixed">
        <CustomerHeader></CustomerHeader>
        <AdminHeader></AdminHeader>
        <StoreOwnerHeader></StoreOwnerHeader>
      </div>
      <div className="w-full h-[95vh] pt-[60px]">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="/Printer-Simulation" element={<LoginRegister />} />
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
          <Route path="/adminUserList" element={<AdminUsersList />} />
          <Route path="/adminDiscountList" element={<AdminDiscountList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
