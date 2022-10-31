import { apiSlice } from '../api/apiSlice';
import { getAdminOrders, getOrders } from './orderSlice';

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create order
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/new/service/order',
        method: 'POST',
        body: data,
      }),
    }),
    // get single order
    getOrder: builder.query({
      query: (id) => ({
        url: `/service/order-item/${id}`,
        method: 'GET',
      }),
    }),

    // get all orders
    getAdminOrders: builder.query({
      query: () => ({
        url: '/admin/orders',
        method: 'GET',
      }),
      providesTags: ['Orders'],

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(getAdminOrders(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // get my orders
    getMyOrders: builder.query({
      query: () => ({
        url: '/orders/me',
        method: 'GET',
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(getOrders(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // delete order
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/admin/order/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),

    // update order
    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/order/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Orders'],
    }),

    // get order details
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: 'GET',
      }),
    }),

    // update order item
    updateOrderItem: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update/orderItems/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetAdminOrdersQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
  useGetOrderDetailsQuery,
  useUpdateOrderItemMutation,
} = orderApi;
