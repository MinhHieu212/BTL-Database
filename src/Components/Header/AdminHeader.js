import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="w-[100vw] h-[60px] bg-[#F2F2F2] flex items-center justify-center gap-3 px-2 md:px-5">
      <nav className="w-full h-full ">
        <ul className="flex w-full items-center justify-center gap-[10%] h-full font-bold text-[18px] md:text-[18px]">
          <li>
            <NavLink to="/" activeClassName="active-link" exact>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" activeClassName="active-link">
              Checkout
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" activeClassName="active-link">
              History
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName="active-link">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;
