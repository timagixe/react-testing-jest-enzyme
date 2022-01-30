import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const {
    actions: successActions,
    reducer: successReducer,
    getInitialState: getInitialSuccessSliceState,
} = createSlice({
    name: "success",
    initialState,
    reducers: {
        correctGuess: () => {
            return true;
        },
    },
});
