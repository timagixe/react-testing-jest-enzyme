import { countCharacterMatches } from "../helpers/countCharacterMatches";
import { guessedWordsActions } from "../reducers/guessedWordsSlice";
import { successActions } from "../reducers/successSlice";

export const guessWord = (guessedWord) => (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = countCharacterMatches(secretWord, guessedWord);

    dispatch(guessedWordsActions.updateGuessedWords({ guessedWord, letterMatchCount }));

    if (secretWord === guessedWord) {
        dispatch(successActions.correctGuess());
    }
};
