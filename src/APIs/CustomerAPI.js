import BaseAPI from "./BaseAPI";

export const loginAPI = async (data = {}) => {
  const path = "/login";
  try {
    const response = await BaseAPI.post(path, data);

    if (response && response.data) {
      // console.log("loginAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    // console.log("loginAPI Failed. Response:", error);
    return error;
  }
};

export const registerAPI = async (data = {}) => {
  const path2 = "/register";
  try {
    const response = await BaseAPI.post(path2, data);

    if (response && response.data) {
      // console.log("registerAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    // console.log("registerAPI Failed. Response:", error);
    return error;
  }
};

export const getOrderDataFromAPI = async (id_user) => {
  // const path = "/orders/${id_user}"; 
  try {
    const response = await BaseAPI.get(`/orders/${id_user}`);

    if (response && response.data) {
      console.log("getOrderDataFromAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getOrderDataFromAPI Failed. Response:", error);
    return error;
  }
}

export const getBillDataFromAPI = async (id_user) => {
  // const path = "/orders/${id_user}"; 
  try {
    const response = await BaseAPI.get(`/orders/bills/${id_user}`);

    if (response && response.data) {
      console.log("getOrderDataFromAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getOrderDataFromAPI Failed. Response:", error);
    return error;
  }
}

export const getPurchasedProductDataFromAPI = async (id_user) => {
  // const path = "/orders/${id_user}"; 
  try {
    const response = await BaseAPI.get(`/orders/prodPurchased/${id_user}`);

    if (response && response.data) {
      console.log("getPurchasedFromAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getOrderDataFromAPI Failed. Response:", error);
    return error;
  }
}

export const addComment = async (data) => {
  const path = "/orders/addComment";
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

export const updComment = async (data) => {
  const path = "/orders/editComment";
  try {
    const response = await BaseAPI.patch(path, data);

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

export const delComment = async (data) => {
  const path = "/orders/deleteComment";
  try {
    const response = await BaseAPI.delete(path, data);

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

