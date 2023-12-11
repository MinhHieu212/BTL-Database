import React, { useState } from "react";
import { userList } from "./UserListFake";
import { SearchIcon } from "../../Assets/icons";

const AdminUsersList = () => {
  const [selectedUserType, setSelectedUserType] = useState("all");
  const [users, setUsers] = useState(userList);
  const [searchParams, setSearchParams] = useState();

  const handleDeleteUser = (userId) => {
    console.log("Params remvoe user: ", { id_user: userId });

    // Call funtion filter user List  - re-render list
    // setUsers()
  };

  const handleUserTypeFilter = (userType) => {
    setSelectedUserType(userType);

    console.log("Filter User by User Type: ", userType);

    // Call funtion filter user List
    // setUsers()
  };

  const handleSearchUser = (e) => {
    e.preventDefault();

    console.log("Search User: ", searchParams);
    // Call funtion filter user List
    // setUsers()
  };

  return (
    <div className="w-[1500px] mx-auto h-[95vh] mt-10">
      <h2 className="text-[24px] font-bold mb-4 px-10">User List</h2>
      <div className="w-full h-[90vh] shadow-xl overflow-y-auto p-4 text-[18px]">
        <div className="flex gap-4 mb-4 w-full items-center justify-center text-[20px] font-bold">
          <div className="w-full flex flex-col items-center justify-center ">
            <div className=" flex items-center gap-5 mb-5">
              <input
                type="text"
                id="searchUser"
                value={searchParams}
                className="w-[350px] p-2 border-2 border-black ml-10 rounded-md font-normal mb-3"
                placeholder="Search  name user"
                onChange={(e) => {
                  setSearchParams(e.target.value);
                }}
              />
              <div onClick={handleSearchUser}>
                <SearchIcon></SearchIcon>
              </div>
            </div>
            <div className=" flex items-center gap-5">
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
                  value="Buyer"
                  checked={selectedUserType === "Buyer"}
                  onChange={() => handleUserTypeFilter("Buyer")}
                  className="w-5 h-5 mx-3"
                />
                <span> Buyer </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="Store Owner"
                  checked={selectedUserType === "Store Owner"}
                  onChange={() => handleUserTypeFilter("Store Owner")}
                  className="w-5 h-5 mx-3"
                />
                <span> Store Owner </span>
              </label>
            </div>
          </div>
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
                  User Name:{" "}
                </span>
                {user.name}
              </p>

              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Birthday:{" "}
                </span>
                {user.dob}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Email:{" "}
                </span>
                {user.email}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Phone Number:{" "}
                </span>
                {user.pNumber}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Address:{" "}
                </span>
                {user.address}
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
