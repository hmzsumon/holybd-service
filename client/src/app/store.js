import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import cartSliceReducer from '../features/cart/cartSlice';
import sellerSliceReducer from '../features/seller/sellerSlice';
import serviceSliceReducer from '../features/service/serviceSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    sellerData: sellerSliceReducer,
    service: serviceSliceReducer,
    cart: cartSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
