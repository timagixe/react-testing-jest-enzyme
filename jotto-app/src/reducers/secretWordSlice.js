import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const {
    actions: secretWordActions,
    reducer: secretWordReducer,
    getInitialState: getSecretWordInitialState,
} = createSlice({
    name: "secretWord",
    initialState,
    reducers: {},
});
