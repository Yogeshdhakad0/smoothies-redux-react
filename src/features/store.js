import { configureStore } from "@reduxjs/toolkit";
import Smoothie from "./Smoothie/Smoothieslice"
const store= configureStore({
    reducer:{
Smoothie,
    }
})
export default store;

