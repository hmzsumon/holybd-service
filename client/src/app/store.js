import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import { rootReducer } from '../features/rootReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    root: rootReducer,
  },
});
