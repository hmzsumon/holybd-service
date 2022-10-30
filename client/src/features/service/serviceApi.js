import { apiSlice } from '../api/apiSlice';
import { getServices } from './serviceSlice';

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all services
    getServices: builder.query({
      query: () => '/services',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(getServices(result.data.services));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ['Services'],
    }),

    // add service
    addService: builder.mutation({
      query: (data) => ({
        url: '/services/new',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Services'],
    }),

    // delete service
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/admin/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Services'],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
