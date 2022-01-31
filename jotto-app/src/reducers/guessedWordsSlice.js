import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const {
    actions: guessedWordsActions,
    reducer: guessedWordsReducer,
    getInitialState: getGuessedWordsReducerInitialState,
} = createSlice({
    name: "guessedWords",
    initialState,
    reducers: {
        updateGuessedWords: (state, action) => {
            return state.concat(action.payload);
        },
    },
});
