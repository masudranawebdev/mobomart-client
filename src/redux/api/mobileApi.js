import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const MOBILE_URL = "/mobiles";

export const mobileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all services
    mobiles: build.query({
      query: (arg) => {
        return {
          url: MOBILE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          mobiles: response?.data?.data,
          meta,
        };
      },
      providesTags: [tagTypes.mobile],
    }),
    // get all services
    allMobiles: build.query({
      query: (arg) => {
        return {
          url: MOBILE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          allMobiles: response?.data?.data,
          meta,
        };
      },
      providesTags: [tagTypes.mobile],
    }),

    // get single service
    mobile: build.query({
      query: (id) => ({
        url: `${MOBILE_URL}/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return {
          mobile: response?.data?.data,
        };
      },
      providesTags: [tagTypes.mobile],
    }),
  }),
});

export const { useMobilesQuery, useMobileQuery, useAllMobilesQuery } = mobileApi;
