import BaseAPI from "./BaseAPI";

export const getStoreProductsAPI = async (id_store) => {
  try {
    const response = await BaseAPI.get(`/store/product/${id_store}`);

    if (response && response.data) {
      console.log("getStoreProductsAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getStoreProductsAPI Failed. Response:", error);
    return error;
  }
};
