import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seller: null,
  sellers: [],
};

const sellerSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {
    getSeller: (state, action) => {
      state.seller = action.payload;
    },
    getSellers: (state, action) => {
      state.sellers = action.payload;
    },
  },
});
export const { getSeller, getSellers } = sellerSlice.actions;
export default sellerSlice.reducer;
