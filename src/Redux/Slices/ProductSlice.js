import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";


const initialState = {
    productsData: []
}

export const getAllProducts = createAsyncThunk('/products/getAll', async () =>{
    try{
        const products = axiosInstance.get('/products');
        toast.promise(products, {
            loading: 'Loading products...',
            success: 'Products loaded successfully',
            error: 'Error loading products'
        });
        const apiResponse = await products;
        return apiResponse;

    } catch(error){
        console.log(error);
        toast.error("Something went wrong");
    }
});

export const getProductDetails = createAsyncThunk('/products/getDetails', async (id) =>{
    try{
        const product = axiosInstance.get(`/products/${id}`);
        toast.promise(product, {
            loading: 'Loading product details...',
            success: 'Product details loaded successfully',
            error: 'Error loading product detail'
        });
        const apiResponse = await product;
        return apiResponse;

    } catch(error){
        console.log(error);
        toast.error("Something went wrong");
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            console.log(action.payload);            
            state.productsData = action?.payload?.data?.data;
        })
    }
});

export default productSlice.reducer;