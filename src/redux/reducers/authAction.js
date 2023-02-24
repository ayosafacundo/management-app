import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = 'http://127.0.0.1:5000'

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ firstname, lastname, email, password, privileges }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            await axios.post(
                `${backendURL}/api/user/register`,
                { firstname, lastname, email, password, privileges },
                config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)