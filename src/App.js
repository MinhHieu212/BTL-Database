import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import CustomerHeader from "./Components/Header/CustomerHeader";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/Product/ProductDetail";
import Account from "./Pages/Account/Account";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import Orders from "./Pages/History/Orders";

function App() {
  return (
    <div className="">
      <div className="fixed">
        <CustomerHeader></CustomerHeader>
      </div>
      <div className="w-full h-[95vh] pt-[60px]">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="/Printer-Simulation" element={<LoginRegister />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<Orders />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
