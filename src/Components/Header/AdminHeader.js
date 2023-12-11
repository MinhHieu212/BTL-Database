import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div
      className={`w-[100vw] h-[60px] bg-slate-600 items-center justify-center gap-3 px-2 md:px-10 
      ${sessionStorage.getItem("userType") === "Admin" ? "flex" : "hidden"}`}
    >
      <nav className="w-[600px] h-full">
        <ul className="flex items-center justify-between w-full h-full font-bold text-[18px] md:text-[24px]">
          <li>
            <NavLink to="/adminUserList">
              <span className="text-white uppercase"> Manage user </span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/adminDiscountList">
              <span className="text-white uppercase"> Manage discount </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;
