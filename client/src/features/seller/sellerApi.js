import { apiSlice } from '../api/apiSlice';
import { getSellers } from './sellerSlice';

export const sellerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create seller
    createSeller: builder.mutation({
      query: (data) => ({
        url: '/admin/seller',
        method: 'POST',
        body: data,
      }),
    }),

    // get seller all sellers
    getSellers: builder.query({
      query: () => '/sellers',

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(getSellers(result.data.sellers));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useCreateSellerMutation, useGetSellersQuery } = sellerApi;
