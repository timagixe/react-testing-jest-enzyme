import { getGuessedWordsReducerInitialState, guessedWordsActions, guessedWordsReducer } from "./guessedWordsSlice";

const { updateGuessedWords } = guessedWordsActions;
describe("guessedWordsSlice", () => {
    test("initial state is empty array", () => {
        const initialState = getGuessedWordsReducerInitialState();
        expect(initialState).toEqual([]);
    });

    test("initial state is not empty after guess", () => {
        const initialState = getGuessedWordsReducerInitialState();
        const newState = guessedWordsReducer(
            initialState,
            updateGuessedWords({ guessedWord: "future", letterMatchCount: 1 })
        );
        expect(newState).not.toHaveLength(0);
    });
});
