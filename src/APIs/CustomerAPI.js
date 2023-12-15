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

export const getAllProductAPI = async () => {
  const path2 = "/products";
  try {
    const response = await BaseAPI.get(path2);

    if (response) {
      console.log("registerAPI successful. Response:", response.data.data);
      return response.data.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    // console.log("registerAPI Failed. Response:", error);
    return error;
  }
};

export const getDetailProductAPI = async (id_product) => {
  const path2 = `/products/detail/${id_product}`;
  try {
    const response = await BaseAPI.get(path2);

    if (response) {
      // console.log(
      //   "getDetailProductAPI successful. Response:",
      //   response.data.data
      // );
      return response.data.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    // console.log("getDetailProductAPI Failed. Response:", error);
    return error;
  }
};

export const filterProductAPI = async ({
  searchField = null,
  id_catgory = null,
  minPrice = null,
  maxPrice = null,
  topProduct = null,
}) => {
  const path2 = `/products/search/${searchField}/${id_catgory}/${minPrice}/${maxPrice}/${topProduct}`;
  try {
    const response = await BaseAPI.get(path2);

    if (response) {
      console.log("filterProductAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("filterProductAPI Failed. Response:", error);
    return error;
  }
};
