import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState ={
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {},
    
    
};

export const createAccount = createAsyncThunk('/auth/createAccount', async(data) =>{
    console.log("incoming data from the think", data);
    try {
        const response = axiosInstance.post('/users', data);
        toast.promise(response, {
            loading: 'Creating Account...',
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            error: 'Error Creating Account',
        });

        const apiResponse = await response;
        return apiResponse;

    } catch (error) {
        console.log(error);

    }
});


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export default AuthSlice.reducer;