import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/authSlice";

const rootReducer = combineReducers(authSlice);

export default rootReducer;
