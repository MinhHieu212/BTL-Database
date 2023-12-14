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
