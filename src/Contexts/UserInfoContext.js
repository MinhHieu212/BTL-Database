import React, { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    id_user: "",
    email: "",
    name: "",
    password: "",
    dob: "",
    address: "",
    phoneNumber: "",
    userType: "buyer",
  });

  const updateUserInfo = (newUserInfo) => {
    setUserInfo({ ...userInfo, ...newUserInfo });
  };

  const value = { userInfo, updateUserInfo };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};
