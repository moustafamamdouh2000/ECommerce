import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      if (state.counter === 99) {
        state.counter = 0;
        return;
      }
      state.counter += action.payload;
    },
    decrementCounter: (state, action) => {
      if (state.counter === 0) {
        state.counter = 99;
        return;
      }
      state.counter -= action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
