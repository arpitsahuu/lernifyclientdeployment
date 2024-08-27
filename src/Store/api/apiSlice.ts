import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";

const getTokensFromStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  return { accessToken, refreshToken };
};


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    // Get tokens from localStorage
    const { accessToken, refreshToken } = getTokensFromStorage();

    // Define the base query with headers for tokens
    const baseQuery = fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
      prepareHeaders: (headers) => {
        if (accessToken) {
          headers.set("Authorization", `Bearer ${accessToken}`);
        }
        if (refreshToken) {
          headers.set("Refresh-Token", refreshToken);
        }
        return headers;
      },
    });

    // Use the base query for the actual API call
    return baseQuery(args, api, extraOptions);
  },
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: (data) => ({
        url: "refresh",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    loadUser: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error: any) {
          console.log(error)
        }
      },
    }),
  }),
});


export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
