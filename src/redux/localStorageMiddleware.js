// src/redux/localStorageMiddleware.js

import { setServiceId } from "./api/features/serviceSlice";
import { setCategoryId } from "./features/categorySlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Store in local storage after the actions have been dispatched
  if (action.type === setServiceId.type) {
    localStorage.setItem(
      "serviceId",
      JSON.stringify(store.getState().service.serviceId)
    );
  } else if (action.type === setCategoryId.type) {
    localStorage.setItem(
      "categoryId",
      JSON.stringify(store.getState().category.categoryId)
    );
  }

  return result;
};

export default localStorageMiddleware;
