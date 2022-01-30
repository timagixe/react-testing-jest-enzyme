import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
};

export const { actions: successActions, reducer: successReducer } = createSlice({
    name: "success",
    initialState,
    reducers: {
        updateSuccess: (state, action) => false,
    },
});
