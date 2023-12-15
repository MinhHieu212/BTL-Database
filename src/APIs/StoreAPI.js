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

export const addProductAPI = async ({ id_store, data = {} }) => {
  const path = `/store/product/${id_store}/create`;
  try {
    const response = await BaseAPI.post(path, data);

    if (response && response.data) {
      console.log("addProductAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("addProductAPI Failed. Response:", error);
    return error;
  }
};

export const getRevanueAPI = async (id_store) => {
  const path = `/store/revenue/${id_store}`;
  try {
    const response = await BaseAPI.get(path);

    if (response && response.data) {
      console.log("getRevanueAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getRevanueAPI Failed. Response:", error);
    return error;
  }
};

export const modifyProductAPI = async (data = {}) => {
  const path = `/store/product/modify`;
  try {
    const response = await BaseAPI.post(path, data);

    if (response && response.data) {
      console.log("modifyProductAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("modifyProductAPI Failed. Response:", error);
    return error;
  }
};

export const getStoreSingleProductAPI = async ({ id_store, id_product }) => {
  try {
    const response = await BaseAPI.get(
      `/store/product/${id_store}/${id_product}`
    );

    if (response && response.data) {
      console.log(
        "getStoreSingleProductAPI successful. Response:",
        response.data
      );
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getStoreSingleProductAPI Failed. Response:", error);
    return error;
  }
};

export const getAllOrderListAPI = async (id_store) => {
  try {
    const response = await BaseAPI.get(`/store/order/${id_store}`);

    if (response && response.data) {
      console.log("getAllOrderListAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getAllOrderListAPI Failed. Response:", error);
    return error;
  }
};

export const getAllOrderConfirmListAPI = async (id_store) => {
  try {
    const response = await BaseAPI.get(`/store/order/${id_store}/confirmed`);

    if (response && response.data) {
      console.log(
        "getAllOrderConfirmListAPI successful. Response:",
        response.data
      );
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getAllOrderConfirmListAPI Failed. Response:", error);
    return error;
  }
};

export const getAllOrderWaitingListAPI = async (id_store) => {
  try {
    const response = await BaseAPI.get(`/store/order/${id_store}/waiting`);

    if (response && response.data) {
      console.log(
        "getAllOrderWaitingListAPI successful. Response:",
        response.data
      );
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getAllOrderWaitingListAPI Failed. Response:", error);
    return error;
  }
};

export const confirmAllAPI = async (id_store) => {
  try {
    const response = await BaseAPI.get(`/store/order/${id_store}/confirmAll`);

    if (response && response.data) {
      console.log("confirmAllAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("confirmAllAPI Failed. Response:", error);
    return error;
  }
};

export const confirmOneAPI = async ({ id_store, data = {} }) => {
  try {
    const response = await BaseAPI.post(
      `/store/order/${id_store}/confirmOne`,
      data
    );

    if (response && response.data) {
      console.log("confirmOneAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("confirmOneAPI Failed. Response:", error);
    return error;
  }
};

export const addToCartAPI = async (data = {}) => {
  try {
    const response = await BaseAPI.post(`/cart/add`, data);

    if (response && response.data) {
      console.log("addToCartAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("addToCartAPI Failed. Response:", error);
    return error;
  }
};

export const getCardListAPI = async (id_user) => {
  try {
    const response = await BaseAPI.get(`/cart/${id_user}`);

    if (response && response.data) {
      console.log("getCardListAPI successful. Response:", response.data);
      return response.data;
    } else {
      // throw new Error("Invalid response received from the server.");
    }
  } catch (error) {
    console.log("getCardListAPI Failed. Response:", error);
    return error;
  }
};
