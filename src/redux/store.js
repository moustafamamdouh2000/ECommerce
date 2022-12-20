import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartReducer from './cartSlice'
const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    cartReducer: cartReducer
  },
});

export default store;
