import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: null,
  orders: [],
  orderItems: [],
  adminOrders: [],
  adminOrdersItems: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrder: (state, action) => {
      state.order = action.payload;
    },
    getOrders: (state, action) => {
      state.orders = action.payload.orders;
      state.orderItems = action.payload.orderItems;
    },

    getAdminOrders: (state, action) => {
      state.adminOrders = action.payload.orders;
      state.adminOrdersItems = action.payload.orderItems;
    },
  },
});

export const { getOrder, getOrders, getAdminOrders } = orderSlice.actions;
export default orderSlice.reducer;
