import React, { useState } from "react";
import { userList } from "./UserListFake";

const AdminUsersList = () => {
  const [selectedUserType, setSelectedUserType] = useState("all");
  const [users, setUsers] = useState(userList);

  const handleDeleteUser = (userId) => {
    // "Chỉ được phép xóa người dùng khi người đó không có đơn hàng nào"
    console.log("Delete User with Id: ", userId);
  };

  const handleUserTypeFilter = (userType) => {
    setSelectedUserType(userType);
    if (userType === "all") {
      setUsers(userList);
    } else {
      const filteredUsers = userList.filter(
        (user) => user.userType === userType
      );
      setUsers(filteredUsers);
    }
  };

  return (
    <div className="w-[1500px] mx-auto h-[95vh] mt-10">
      <h2 className="text-[24px] font-bold mb-4 px-10">User List</h2>
      <div className="w-full h-[90vh] shadow-xl overflow-y-auto p-4 text-[18px]">
        <div className="flex gap-4 mb-4 w-full items-center justify-center text-[20px] font-bold">
          <label>
            <input
              type="radio"
              name="userType"
              value="all"
              checked={selectedUserType === "all"}
              onChange={() => handleUserTypeFilter("all")}
              className="w-5 h-5 mx-3"
            />
            <span> All</span>
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="customer"
              checked={selectedUserType === "customer"}
              onChange={() => handleUserTypeFilter("customer")}
              className="w-5 h-5 mx-3"
            />
            <span> Customer</span>
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="storeOwner"
              checked={selectedUserType === "storeOwner"}
              onChange={() => handleUserTypeFilter("storeOwner")}
              className="w-5 h-5 mx-3"
            />
            <span> Store Owner</span>
          </label>
        </div>

        {users.map((user) => (
          <div
            key={user.id_user}
            className="border border-gray-300 p-4 mb-4 rounded-lg flex items-center"
          >
            <div>
              <p className="text-lg font-bold mb-2">Name: {user.name}</p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  User Type:{" "}
                </span>
                {user.userType}
              </p>

              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Email:{" "}
                </span>
                {user.email}
              </p>

              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Address:{" "}
                </span>
                {user.address}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Phone Number:{" "}
                </span>
                {user.pNumber}
              </p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded ml-auto"
              onClick={() => handleDeleteUser(user.id_user)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsersList;
