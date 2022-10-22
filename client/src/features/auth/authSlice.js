import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticate: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticate = true;
    },
    logout: (state) => {
      state.isAuthenticate = false;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
