import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cartSlice";
import searchReducer from "./features/searchSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  search: searchReducer,
  cart: cartReducer,
};
