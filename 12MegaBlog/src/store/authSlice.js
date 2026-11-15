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
        //reducer ->> state update karne ka function
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
// store mai use hone wala reducer export karta hai jaise login and logout

// authSlice.reducer ->>>>. Ye actual reducer function hai jo Redux Store ko batata hai ki login ya logout action aane par state kaise update karni hai.