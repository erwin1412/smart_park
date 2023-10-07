import { authSlice } from "./slice/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const { AUTH_CHECK, LOGIN, LOGOUT } = authSlice.actions;
export const authReducer = authSlice.reducer;

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
