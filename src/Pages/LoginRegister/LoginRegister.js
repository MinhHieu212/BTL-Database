import React, { useState } from "react";
import { useUserInfo } from "../../Contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const useUserInfoContext = useUserInfo();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    address: "",
    pNumber: "",
    name: "",
    password: "",
    dob: "",
    userType: "customer",
  });

  sessionStorage.removeItem("name");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    console.log("Đăng kí:", userInfo);
  };

  const handleLogin = () => {
    const dataLogin = {
      name: userInfo.name,
      password: userInfo.password,
    };
    console.log("Đăng nhập:", dataLogin);

    useUserInfoContext?.updateUserInfo(dataLogin);

    sessionStorage.setItem("name", userInfo.name);
    sessionStorage.setItem("password", userInfo.password);
    // sessionStorage.setItem("id_user", userInfo.id_user);

    if (sessionStorage.getItem("name") === "admin") {
      navigate("/adminUserList");
    } else if (sessionStorage.getItem("name") === "store") {
      navigate("/storeProduct");
    } else {
      navigate("/product");
    }
  };

  return (
    <div className="w-[1500px] mx-auto  flex items-stretch justify-center gap-5 text-[18px]">
      <div className="w-[40%] p-10 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#5a5757]">Đăng kí</h2>
        <label className="block font-bold mt-3 mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <label className="block font-bold mt-3 mb-2">Address:</label>
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <label className="block font-bold mt-3 mb-2">Phone Number:</label>
        <input
          type="number"
          name="pNumber"
          value={userInfo.pNumber}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <label className="block font-bold mt-3 mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <label className="block font-bold mt-3 mb-2">Dob:</label>
        <input
          type="date"
          name="dob"
          value={userInfo.dob}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <label className="block font-bold mt-3 mb-2">User Type:</label>
        <select
          name="userType"
          value={userInfo.userType}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        >
          <option value="customer">Customer</option>
          <option value="storeOwner">Store Owner</option>
        </select>
        <br />
        <label className="block font-bold mt-3 mb-2">Password:</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <button
          onClick={handleRegister}
          className="bg-[#5a5757] mt-3 font-bold text-white px-4 py-2 rounded"
        >
          Đăng kí
        </button>
      </div>

      <div className="w-[40%] p-10 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#5a5757]">Đăng nhập</h2>
        <label className="block font-bold mt-3 mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <label className="block font-bold mt-3 mb-2">Password:</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <button
          onClick={handleLogin}
          className="bg-[#5a5757] mt-3 font-bold text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
