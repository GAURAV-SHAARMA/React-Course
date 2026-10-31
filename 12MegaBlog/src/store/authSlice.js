// this file will track all the authentication part of the app

import {createSlice} from '@reduxjs/toolkit'

const initialState={
    //user authenticate hai ya nhi 
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        // now we are creating actions (login , logout)
        login:(state , action)=>{
            state.status = true
            state.userData = action.payload.userData
        },

        logout:(state)=>{
            state.status = false
            state.userData = null
        }
    }
})

export const {login , logout}= authSlice.actions;
export default authSlice.reducer