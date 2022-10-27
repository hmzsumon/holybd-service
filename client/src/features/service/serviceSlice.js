import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  service: null,
  services: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    getService: (state, action) => {
      state.service = action.payload;
    },

    getServices: (state, action) => {
      state.services = action.payload;
    },
  },

  extraReducers: {},
  useTagTypes: ['Service'],
});

export const { getService, getServices } = serviceSlice.actions;

export default serviceSlice.reducer;
