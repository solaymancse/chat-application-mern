import { createSlice} from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addNotifications:(state,{playload})=> {},
        resetNotifications:(state,{playload})=> {},
    },

    extraReducers:(builder)=>{
        // Save user after signup
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled,(state, {playload})=> playload);
        // save user after login
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state,{playload})=> playload);
        // logout destroy user section
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled,()=> null);
    }
})

export const { addNotifications, resetNotifications} = userSlice.actions;
export default userSlice.reducer;