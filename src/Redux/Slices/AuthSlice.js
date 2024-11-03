import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState ={
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || 'false',
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

export const login = createAsyncThunk('/auth/login', async(data) =>{
    console.log("incoming data from the think", data);
    try {
        const response = axiosInstance.post('/auth/login', data);
        toast.promise(response, {
            loading: 'Logging your Account...',
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            error: 'Error Logging Account',
        });

        const apiResponse = await response;
        return apiResponse;

    } catch (error) {
        console.log(error);

    }
});

export const logout = createAsyncThunk('/auth/logout', async() =>{
    console.log("incoming data from the think");
    try {
        const response = axiosInstance.post('/auth/logout');
        toast.promise(response, {
            loading: 'Logging Out...',
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            error: 'Error! Something went wrong',
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
    extraReducers: (builder) =>{
        builder
        .addCase(login.fulfilled, (state,action) => {
            //reducer which will execute when the login thunk is fulfilled
            state.isLoggedIn = true;
            state.role = action?.payload?.data?.data?.userRole;
            state.data = action?.payload?.data?.data.userData;

            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.data?.data?.userRole);
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data?.userData))
        })
        .addCase(logout.fulfilled, (state) =>{
            //reducer which will execute when the logout thunk is fulfilled
            localStorage.clear();
            state.isLoggedIn = false;
            state.role = '';
            state.data = {};

        })
    }

});

export default AuthSlice.reducer;