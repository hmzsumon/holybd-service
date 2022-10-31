import { apiSlice } from '../api/apiSlice';
import { getBills } from './billSlice';

export const billsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all bills
    getAdminBills: builder.query({
      query: () => ({
        url: '/admin/bills',
        method: 'GET',
      }),
      async onQueryStarted({ dispatch, getState }, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(getBills(result.data.bills));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // get my bills
    getMyBills: builder.query({
      query: () => ({
        url: '/seller/bill',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAdminBillsQuery, useGetMyBillsQuery } = billsApi;
