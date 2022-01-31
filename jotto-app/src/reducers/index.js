import { combineReducers } from "@reduxjs/toolkit";
import { guessedWordsReducer } from "./guessedWordsSlice";
import { secretWordReducer } from "./secretWordSlice";
import { successReducer } from "./successSlice";

export const rootReducer = combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer,
    secretWord: secretWordReducer,
});
