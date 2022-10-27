import { apiSlice } from '../api/apiSlice';
import { addToCart } from './cartSlice';

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get cart
    getCart: builder.query({
      query: () => '/cart',
    }),

    // add to cart
    addToCart: builder.mutation({
      query: ({ id, qty }) => ({
        url: `/services/${id}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(addToCart(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation } = cartApi;
