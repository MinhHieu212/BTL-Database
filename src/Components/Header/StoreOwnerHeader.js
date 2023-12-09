import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../Contexts/UserInfoContext";

const StoreOwnerHeader = () => {
  const useUserInfoContext = useUserInfo();
  const navigate = useNavigate();

  const handleLogout = () => {
    useUserInfoContext?.updateUserInfo({
      id_user: "",
      email: "",
      name: "",
      password: "",
      dob: "",
      address: "",
      phoneNumber: "",
      userType: "customer",
    });
    sessionStorage.removeItem("name");
    navigate("/Printer-Simulation");
  };

  return (
    <div
      className={`w-[100vw] h-[60px] bg-slate-600 items-center justify-center gap-3 px-2 md:px-10 
      ${sessionStorage.getItem("name") === "store" ? "flex" : "hidden"}`}
    >
      <nav className="w-[900px] h-full">
        <ul className="flex items-center justify-between w-full h-full font-bold text-[18px] md:text-[24px]">
          <li>
            <NavLink to="/storeProduct" activeClassName="active-link" exact>
              <span className="text-white uppercase"> Product </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/storeRevenue" activeClassName="active-link">
              <span className="text-white uppercase"> Revenue </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/storeDiscountList" activeClassName="active-link">
              <span className="text-white uppercase"> DiscountList </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className=" absolute top-[15px] right-[25px] ">
        <span
          className="font-bold text-white text-[18px] cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default StoreOwnerHeader;
