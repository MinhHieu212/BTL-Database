import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../../APIs/CustomerAPI";
import { toast } from "../../Components/Toastify/Toastify";

const LoginRegister = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    address: "",
    pNumber: "",
    name: "",
    username: "",
    pwd: "",
    dob: "",
    usertype: "Customer",
    nameStore: "",
  });

  sessionStorage.removeItem("name");
  sessionStorage.removeItem("password");
  sessionStorage.removeItem("id_user");
  sessionStorage.removeItem("usertype");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    console.log("Data send to Register: ", userInfo);

    const callAPI = async () => {
      const res = await registerAPI(userInfo);
      console.log("Response from Register api : ", res);

      if (res.status === 200) {
        toast.success("Register success");
      } else {
        toast.error("Register Faild");
      }
    };

    callAPI();
  };

  const handleLogin = () => {
    const loginData = {
      username: userInfo.username,
      pwd: userInfo.pwd,
    };
    console.log("Data send to login: ", loginData);

    const callAPI = async () => {
      const res = await loginAPI(loginData);

      if (res?.id_user) {
        console.log("Login success");
        toast.success("Login success");

        console.log("Response from login api : ", res);

        sessionStorage.setItem("name", res?.name || "User");
        sessionStorage.setItem("id_user", res?.id_user || 1);
        sessionStorage.setItem("id_store", res?.id_store || 1);
        sessionStorage.setItem("usertype", res?.usertype);
        sessionStorage.setItem("address", res?.address);
        sessionStorage.setItem("dob", res?.dob);
        sessionStorage.setItem("email", res?.email);
        sessionStorage.setItem("pNumber", res?.pNumber);

        if (sessionStorage.getItem("usertype") === "Admin") {
          navigate("/adminUserList");
        } else if (sessionStorage.getItem("usertype") === "Store Owner") {
          navigate("/storeProduct");
        } else {
          navigate("/product");
        }
      } else {
        console.log("Login Faild");
        toast.error("Login Faild");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("id_user");
        sessionStorage.removeItem("id_store");
        sessionStorage.removeItem("usertype");
        sessionStorage.removeItem("address");
        sessionStorage.removeItem("dob");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("pNumber");
      }
    };

    callAPI();
  };

  return (
    <div className="w-[80vw] mx-auto mt-10 flex items-stretch justify-center gap-5 text-[18px]">
      <div className="w-[65%] p-10 shadow-2xl rounded-lg flex item justify-between">
        <div className="w-[48%]">
          <h2 className="text-2xl font-bold mb-4 text-[#5a5757]">Đăng kí</h2>
          <label className="block font-bold mt-3 mb-2">Username:</label>
          <input
            type="username"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full"
          />
          <br />
          <label className="block font-bold mt-3 mb-2">Password:</label>
          <input
            type="password"
            name="pwd"
            value={userInfo.pwd}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full"
          />
          <br />
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
          />{" "}
        </div>
        <div className="w-[48%]">
          <br />
          <label className="block font-bold mb-2 mt-5">Name:</label>
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
            name="usertype"
            value={userInfo.usertype}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full"
          >
            <option value="Customer">Customer</option>
            <option value="storeOwner">Store Owner</option>
          </select>
          <br />
          <label className="block font-bold mt-3 mb-2">Name Store:</label>
          <input
            type="text"
            name="nameStore"
            value={userInfo.nameStore}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full"
          />
          <br />

          <button
            onClick={handleRegister}
            className="bg-[#5a5757] mt-[50px] ml-auto block font-bold text-white px-4 py-2 rounded"
          >
            Đăng kí
          </button>
        </div>
      </div>

      <div className="w-[35%] p-10 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#5a5757]">Đăng nhập</h2>
        <label className="block font-bold mt-3 mb-2">Username:</label>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <label className="block font-bold mt-3 mb-2">Password:</label>
        <input
          type="password"
          name="pwd"
          value={userInfo.pwd}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <br />
        <button
          onClick={handleLogin}
          className="bg-[#5a5757] mt-[50px] ml-auto block font-bold text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
