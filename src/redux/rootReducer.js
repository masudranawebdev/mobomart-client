import { baseApi } from "./api/baseApi";
import searchReducer from "./features/searchSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  search: searchReducer,
};
