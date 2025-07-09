import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice"; // Adjust the import path as necessary
// import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducer, // Assuming you have an authReducer defined in your slices
  },
});
