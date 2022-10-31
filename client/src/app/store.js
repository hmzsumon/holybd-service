import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import billSliceReducer from '../features/bills/billSlice';
import cartSliceReducer from '../features/cart/cartSlice';
import orderSliceReducer from '../features/order/orderSlice';
import sellerSliceReducer from '../features/seller/sellerSlice';
import serviceSliceReducer from '../features/service/serviceSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    sellerData: sellerSliceReducer,
    service: serviceSliceReducer,
    cart: cartSliceReducer,
    order: orderSliceReducer,
    bill: billSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
