import {createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name:"items",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeAll:(state,action)=>{
            state.items=[]
        }
    },
});

export const {addItem,removeAll} = cartSlice.actions
export default cartSlice.reducer;