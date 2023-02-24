import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authAction";

const initialState = {
    logged: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: null
}



export const authReducer = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (account, state) => {
            state = {
                logged: true,
                info: {
                    id: account._id,
                    user: account.username,
                    privileges: account.privileges
                }
            }
        },
        logout: (state) => {
            state = {
                logged: false,
                info: {}
            }
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state) => {
            state.loading = false
            state.success = true // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload

        }
    }
})