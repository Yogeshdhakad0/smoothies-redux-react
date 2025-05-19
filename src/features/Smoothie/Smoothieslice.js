

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; 
import { act } from "react";

const Smoothislice = createSlice({
    name: 'Smoothie',
    initialState: {
        smoothies: [],
        cart: [],
        addone:[],
        Distance:[],
        selectedAddons:0,
        isLoading: false, 
        isError: false,
        isSuccess: false, 
    },
    reducers: {
        addCard: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },


        removeCard: (state, action) => {
                        state.cart = state.cart.filter(item => item.id !== action.payload);
                    },


        increment: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity = (item.quantity || 0) + 1;
            }
        },
        decrement: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                }
            }},

            cardd: (state, action) => {
                state.selectedAddons=action.payload
              },


            Addonee: (state, action) => {
                console.log(action.payload)
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, addons:action.payload.value } // Ensure numeric value
                            : item
                    ),
                };
            }
            


    },
    extraReducers: (builder) => { 
        builder
            .addCase(getsmooties.pending, (state) => { 
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getsmooties.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.isSuccess = true;
                state.smoothies = action.payload;
            })
            .addCase(getsmooties.rejected, (state) => { 
                state.isLoading = false;
                state.isError = true;
            })





            .addCase(getaddone.pending, (state) => { 
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getaddone.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.isSuccess = true;
                state.addone = action.payload;
            })
            .addCase(getaddone.rejected, (state) => { 
                state.isLoading = false;
                state.isError = true;
            })

            .addCase(getDistance.pending, (state) => { 
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getDistance.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.isSuccess = true;
                state.Distance = action.payload;
            })
            .addCase(getDistance.rejected, (state) => { 
                state.isLoading = false;
                state.isError = true;
            })


            
    }
});

export const { addCard,removeCard,increment,decrement ,cardd,Addonee} = Smoothislice.actions;
export default Smoothislice.reducer;



export const getsmooties = createAsyncThunk('GETT/SHOO', async () => {
    const response = await axios.get("http://localhost:5000/smoothies");
    return response.data;
  });



  
export const getaddone = createAsyncThunk('ADDONE/ADD', async () => {
    const response = await axios.get("http://localhost:5000/addOns");
    return response.data;
  });



   
export const getDistance = createAsyncThunk('Distance/ADD', async () => {
    const response = await axios.get("http://localhost:5000/deliveryCharges");
    return response.data;
  });