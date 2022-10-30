import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './cartApi';

const initialState = {
  cartItems: [],
  shippingInfo: {},
  count: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { type, payload }) => {
      const item = payload;
      const existItem = state.cartItems.find((x) => x.service === item.service);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.service === existItem.service ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.service !== action.payload
      );
    },

    saveShippingInfo: (state, action) => {
      return {
        ...state,
        shippingInfo: action.payload,
      };
    },

    incrementQty: (state, action) => {
      console.log('incrementQty', action.payload);
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.service === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    },

    decrementQty: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.service === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingInfo,
  incrementQty,
  decrementQty,
} = cartSlice.actions;
export default cartSlice.reducer;
