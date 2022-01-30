import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";

export const storeFactory = (initialState) => createStore(rootReducer, initialState);
