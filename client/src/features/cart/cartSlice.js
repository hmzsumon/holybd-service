import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  shippingInfo: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { type, payload }) => {
      const item = payload;
      const isItemExist = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.product === isItemExist.product ? item : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },

    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (el) => el.product !== action.payload
        ),
      };
    },

    saveShippingInfo: (state, action) => {
      return {
        ...state,
        shippingInfo: action.payload,
      };
    },
  },
});

export const { addToCart, removeFromCart, saveShippingInfo } =
  cartSlice.actions;
export default cartSlice.reducer;
