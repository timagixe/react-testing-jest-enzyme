import { successActions, successReducer, getInitialSuccessSliceState } from "./successSlice";

const { correctGuess } = successActions;

describe("successSlice", () => {
    test("initial state value is false", () => {
        const initialState = getInitialSuccessSliceState();
        expect(initialState).toBe(false);
    });
    test("updates state to true on correctGuess", () => {
        const initialState = getInitialSuccessSliceState();
        const newState = successReducer(initialState, correctGuess());

        expect(newState).toBeTruthy();
    });
});
