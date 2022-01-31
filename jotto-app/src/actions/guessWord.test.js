import { guessWord } from "./index";
import { storeFactory } from "../utils";

describe("guessWordAction", () => {
    const secretWord = "mobile";
    const notSecretWord = "test";

    describe("when no guessed words", () => {
        let store;
        beforeEach(() => {
            store = storeFactory({ secretWord });
        });

        test("updates state correctly for wrong guess", () => {
            store.dispatch(guessWord(notSecretWord));
            const stateAfterUpdate = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [{ guessedWord: "test", letterMatchCount: 1 }],
            };
            expect(stateAfterUpdate).toEqual(expectedState);
        });

        test("updates state correctly for success guess", () => {
            store.dispatch(guessWord(secretWord));
            const stateAfterUpdate = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [{ guessedWord: "mobile", letterMatchCount: 6 }],
            };
            expect(stateAfterUpdate).toEqual(expectedState);
        });
    });

    describe("when there are guessed words", () => {
        let store;
        let stateBeforeUpdated;
        beforeEach(() => {
            store = storeFactory({
                secretWord,
                success: false,
                guessedWords: [{ guessedWord: "lemon", letterMatchCount: 4 }],
            });
            stateBeforeUpdated = store.getState();
        });

        test("updates state correctly for wrong guess", () => {
            store.dispatch(guessWord(notSecretWord));
            const stateAfterUpdate = store.getState();
            const expectedState = {
                ...stateBeforeUpdated,
                guessedWords: [...stateBeforeUpdated.guessedWords, { guessedWord: "test", letterMatchCount: 1 }],
            };
            expect(stateAfterUpdate).toEqual(expectedState);
        });

        test("updates state correctly for success guess", () => {
            store.dispatch(guessWord(secretWord));
            const updatedStore = store.getState();
            const expectedStore = {
                ...stateBeforeUpdated,
                success: true,
                guessedWords: [...stateBeforeUpdated.guessedWords, { guessedWord: "mobile", letterMatchCount: 6 }],
            };
            expect(updatedStore).toEqual(expectedStore);
        });
    });
});
