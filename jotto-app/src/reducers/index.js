import { combineReducers } from "@reduxjs/toolkit";
import { successReducer } from "./successSlice";

export const rootReducer = combineReducers({
    success: successReducer,
});
