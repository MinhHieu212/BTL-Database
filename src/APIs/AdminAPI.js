import BaseAPI from "./BaseAPI";

export const getUserListAPI = async (data = {}) => {
  const path = "/admin/accounts";
  try {
    const response = await BaseAPI.get(path, data);

    if (response && response.data) {
      console.log("getUserListAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getUserListAPI Failed. Response:", error);
    return error;
  }
};

export const getDiscountListAPI = async (data = {}) => {
  const path = "/admin/discount";
  try {
    const response = await BaseAPI.get(path, data);

    if (response && response.data) {
      console.log("getDiscountListAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getDiscountListAPI Failed. Response:", error);
    return error;
  }
};

export const deleteUserAPI = async (id_user) => {
  try {
    const response = await BaseAPI.delete(
      `/admin/accounts/deleteUser/${id_user}`
    );

    if (response && response.data) {
      console.log("deleteUserAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("deleteUserAPI Failed. Response:", error);
    return error;
  }
};

export const searchUserAPI = async (name_user) => {
  try {
    const response = await BaseAPI.get(`/admin/accounts/search/${name_user}`);

    if (response && response.data) {
      console.log("searchUserAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("searchUserAPI Failed. Response:", error);
    return error;
  }
};

export const filterUserAPI = async (user_type) => {
  try {
    const response = await BaseAPI.get(
      `/admin/accounts/search/type/${user_type}`
    );

    if (response && response.data) {
      console.log("filterUserAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("filterUserAPI Failed. Response:", error);
    return error;
  }
};

export const searchAndFilterAdminAPI = async ({ user_type, name_user }) => {
  try {
    const response = await BaseAPI.get(
      `/admin/accounts/search/${name_user}/${user_type}`
    );

    if (response && response.data) {
      console.log(
        "searchAndFilterAdminAPI successful. Response:",
        response.data
      );
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("searchAndFilterAdminAPI Failed. Response:", error);
    return error;
  }
};

export const addDiscountByAdminAPI = async (data) => {
  const path = "/admin/discount/create";
  try {
    const response = await BaseAPI.post(path, data);

    if (response && response.data) {
      console.log("addDiscountByAdminAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("addDiscountByAdminAPI Failed. Response:", error);
    return error;
  }
};
