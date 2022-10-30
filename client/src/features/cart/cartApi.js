import { apiSlice } from '../api/apiSlice';

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get cart
    getCart: builder.query({
      query: () => '/cart',
    }),
  }),
});

export const { useGetCartQuery } = cartApi;
