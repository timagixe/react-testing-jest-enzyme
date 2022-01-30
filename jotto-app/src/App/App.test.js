import { mount } from "enzyme";
import { findByDataTestAttribute, storeFactory } from "../utils";
import App from "./App";
import { getSecretWord as mockedGetSecretWord } from "../actions";
import { Provider } from "react-redux";

jest.mock("../actions");

const setup = ({ initialState } = { initialState: { success: false } }) => {
    const store = storeFactory(initialState);
    const wrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // eslint-disable-next-line testing-library/await-async-query
    const inputNode = findByDataTestAttribute(wrapper, "input-node");
    inputNode.simulate("change", { target: { value: "station" } });

    // eslint-disable-next-line testing-library/await-async-query
    const submitButton = findByDataTestAttribute(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault: () => {} });

    return wrapper;
};

describe("App component", () => {
    describe("with no guessed words", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup({
                success: false,
                guessedWords: [],
                secretWord: "daylight",
            });
        });

        test("renders guess-words-instructions", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessWordInstructions = findByDataTestAttribute(wrapper, "guess-words-instructions");
            expect(guessWordInstructions).toHaveLength(1);
        });

        test("does not render guessed-words-section", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessedWordsSection = findByDataTestAttribute(wrapper, "guessed-words-section");
            expect(guessedWordsSection).toHaveLength(0);
        });
    });

    describe("with some guessed words", () => {
        let wrapper;
        const state = {
            success: false,
            guessedWords: [
                { guessedWord: "train", letterMatchCount: 2 },
                { guessedWord: "future", letterMatchCount: 1 },
            ],
            secretWord: "daylight",
        };

        beforeEach(() => {
            wrapper = setup(state);
        });

        test("does not render congrats-message", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const congratsMessage = findByDataTestAttribute(wrapper, "congrats-message");
            expect(congratsMessage).toHaveLength(0);
        });

        test.todo(
            "does not render guess-words-instructions" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessWordsInstructions = findByDataTestAttribute(wrapper, "guess-words-instructions");
            expect(guessWordsInstructions).toHaveLength(0);
        } */
        );

        test.todo(
            "renders guessed-words-section" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessedWordsSection = findByDataTestAttribute(wrapper, "guessed-words-section");
            expect(guessedWordsSection).toHaveLength(1);
        } */
        );

        test.todo(
            "renders as many guessed-word elements as passed in guessedWords plus one" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessedWord = findByDataTestAttribute(wrapper, "guessed-word");
            expect(guessedWord).toHaveLength(state.guessedWords.length + 1);
        }*/
        );
    });

    describe("with guessed secret word", () => {
        let wrapper;
        const state = {
            success: false,
            guessedWords: [
                { guessedWord: "train", letterMatchCount: 2 },
                { guessedWord: "future", letterMatchCount: 1 },
            ],
            secretWord: "daylight",
        };

        beforeEach(() => {
            wrapper = setup(state);
        });

        test.todo(
            "renders congrats-message" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const congratsMessage = findByDataTestAttribute(wrapper, "congrats-message");
            expect(congratsMessage).toHaveLength(1);
        } */
        );

        test.todo(
            "does not render input-node" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const inputNode = findByDataTestAttribute(wrapper, "input-node");
            expect(inputNode).toHaveLength(0);
        } */
        );

        test.todo(
            "does not render submit-button" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const submitButton = findByDataTestAttribute(wrapper, "submit-button");
            expect(submitButton).toHaveLength(0);
        } */
        );

        test.todo(
            "does not render guess-words-instructions" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessWordsInstructions = findByDataTestAttribute(wrapper, "guess-words-instructions");
            expect(guessWordsInstructions).toHaveLength(0);
        } */
        );

        test.todo(
            "renders guessed-words-section" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessedWordsSection = findByDataTestAttribute(wrapper, "guessed-words-section");
            expect(guessedWordsSection).toHaveLength(1);
        } */
        );

        test.todo(
            "renders as many guessed-word as passed in guessedWords plus one" /* , () => {
            // eslint-disable-next-line testing-library/await-async-query
            const guessedWord = findByDataTestAttribute(wrapper, "guessed-word");
            expect(guessedWord).toHaveLength(state.guessedWords + 1);
        } */
        );
    });

    describe("getSecretWords action", () => {
        beforeEach(() => {
            mockedGetSecretWord.mockClear();
        });

        test("calls when component mounts", async () => {
            setup();
            expect(mockedGetSecretWord).toHaveBeenCalled();
        });

        test("does not call when component updates", () => {
            const wrapper = setup();
            wrapper.setProps();
            expect(mockedGetSecretWord).toHaveBeenCalledTimes(1);
        });
    });
});
