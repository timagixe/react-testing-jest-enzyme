import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";

export const storeFactory = (initialState) =>
    configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
