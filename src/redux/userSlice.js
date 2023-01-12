import {createSlice } from '@reduxjs/toolkit'
import {signOut } from "firebase/auth";
import { auth } from '../firebase/config';
export const userSlice = createSlice({
    name:"userStatus",
    initialState:{
        Status:false
    },
    reducers:{
        logout:(state,action)=>{
            state.Status=false
            signOut(auth).then(() => {
                alert('logged out')
              }).catch((error) => {
                alert('error in logout')
              });
        },
        login:(state,action)=>{
            state.Status=true;
        },
        returnStatus:(state,action)=>{
            return state.Status
        }
    },
});

export const {logout,login,returnStatus} = userSlice.actions
export default userSlice.reducer;