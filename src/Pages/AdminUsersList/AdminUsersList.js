import React, { useEffect, useState } from "react";
import { userList } from "./UserListFake";
import { SearchIcon } from "../../Assets/icons";
import {
  deleteUserAPI,
  filterUserAPI,
  getUserListAPI,
  searchUserAPI,
} from "../../APIs/AdminAPI";
import { toast } from "../../Components/Toastify/Toastify";

const AdminUsersList = () => {
  const [selectedUserType, setSelectedUserType] = useState("all");
  const [users, setUsers] = useState(userList);
  const [searchParams, setSearchParams] = useState();
  const [renderList, setRenderList] = useState(false);

  useEffect(() => {
    const callAPI = async () => {
      const res = await getUserListAPI();
      console.log("Response from getUserListAPI api : ", res);
      setUsers(res?.data);
    };

    callAPI();
  }, [renderList]);

  const handleDeleteUser = (userId) => {
    console.log("Params remove user: ", { id_user: userId });

    const callAPI = async () => {
      const res = await deleteUserAPI(userId);

      console.log("response from delete : ", res);
      if (res?.status === 204) {
        console.log("handleDeleteUser successfully!");
        toast.success("Delete User success");
        setRenderList(!renderList);
      } else {
        console.log("handleDeleteUser failed!");
        toast.error("Delete User Failed");
      }
    };

    callAPI();
  };

  const handleUserTypeFilter = (userType) => {
    setSelectedUserType(userType);

    console.log("Filter User by User Type: ", userType);

    if (userType === "All") {
      setRenderList(!renderList);
    } else {
      const callAPI = async () => {
        const res = await filterUserAPI(userType);

        console.log("response from handleUserTypeFilter : ", res);
        if (res?.status === 200) {
          console.log("handleUserTypeFilter successfully!");
          setUsers(res?.data);
        } else {
          console.log("handleUserTypeFilter failed!");
        }
      };

      callAPI();
    }
  };

  const handleSearchUser = (e) => {
    e.preventDefault();

    searchUserAPI(searchParams);
    console.log();
    console.log("Search User: ", searchParams);

    if (searchParams === "") {
      setRenderList(!renderList);
    }

    const callAPI = async () => {
      const res = await searchUserAPI(searchParams);

      console.log("response from searchUserAPI : ", res);
      if (res?.status === 200) {
        console.log("searchUserAPI successfully!");
        setUsers(res?.data);
      } else {
        console.log("searchUserAPI failed!");
      }
    };

    callAPI();

    if (searchParams === "") {
      setRenderList(!renderList);
    }
  };

  return (
    <div className="w-[80vw] mx-auto h-[95vh] mt-10">
      <h2 className="text-[24px] font-bold mb-4 px-10  text-blue-800 uppercase">
        User List
      </h2>

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
                checked={selectedUserType === "All"}
                onChange={() => handleUserTypeFilter("All")}
                className="w-5 h-5 mx-3"
              />
              <span> All</span>
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="Customer"
                checked={selectedUserType === "Customer"}
                onChange={() => handleUserTypeFilter("Customer")}
                className="w-5 h-5 mx-3"
              />
              <span> Customer </span>
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
      <div className="w-full h-[90vh] shadow-xl overflow-y-auto p-4 text-[18px]">
        {users.map((user) => (
          <div
            key={user?.id_user}
            className="border border-gray-300 p-4 mb-4 rounded-lg flex items-center"
          >
            <div>
              <p className="text-lg font-bold mb-2">Name: {user?.name}</p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  User Type:{" "}
                </span>
                {user?.usertype}
              </p>

              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  User Name:{" "}
                </span>
                {user?.name}
              </p>

              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Birthday:{" "}
                </span>
                {user?.dob}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Emails:{" "}
                </span>
                {user?.email}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Phone Number:{" "}
                </span>
                {user?.pNum}
              </p>
              <p className="mb-2">
                <span className="text-[blue] font-bold text-[18px]">
                  Address:{" "}
                </span>
                {user?.address}
              </p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded ml-auto"
              onClick={() => handleDeleteUser(user?.id_user)}
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
