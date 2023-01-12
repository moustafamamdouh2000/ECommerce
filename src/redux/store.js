import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartReducer from './cartSlice'
import userReducer from './userSlice'
const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    cartReducer: cartReducer,
    userReducer: userReducer,
  },
});

export default store;
