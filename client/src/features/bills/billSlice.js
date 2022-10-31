import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bill: null,
  bills: [],
  myBill: null,
};

const billSlice = createSlice({
  name: 'bill',
  initialState,
  tagsTypes: ['Bill', 'Bills'],
  reducers: {
    getBills: (state, action) => {
      state.bill = action.payload;
    },
  },
});

export const { getBills } = billSlice.actions;

export default billSlice.reducer;
