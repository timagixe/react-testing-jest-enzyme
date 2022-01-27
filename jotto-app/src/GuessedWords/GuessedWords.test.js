import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByDataTestAttribute } from "../utils";
import { GuessedWords } from "./GuessedWords";

const defaultProps = {
    guessedWords: [
        {
            guessedWord: "car",
            letterMatchCount: 2,
        },
    ],
};

const setup = (props = {}) => shallow(<GuessedWords {...{ ...defaultProps, ...props }} />);

describe("GuessedWords component", () => {
    test("renders", () => {
        const wrapper = setup();
        // eslint-disable-next-line testing-library/await-async-query
        const guessedWordsComponent = findByDataTestAttribute(wrapper, "guessed-words-component");
        expect(guessedWordsComponent).toHaveLength(1);
    });

    test("has no warnings with expected props", () => {
        checkProps(GuessedWords, defaultProps);
    });
});

describe("GuessedWords component with no guessed words", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("renders", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const guessedWordsComponent = findByDataTestAttribute(wrapper, "guessed-words-component");
        expect(guessedWordsComponent).toHaveLength(1);
    });

    test("renders instructions", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const instructionsElement = findByDataTestAttribute(wrapper, "guess-words-instructions");
        const instructionsElementText = instructionsElement.text();
        expect(instructionsElementText).not.toBe(0);
    });
});

describe("GuessedWords component with guessed words", () => {
    const guessedWords = [
        {
            guessedWord: "notebook",
            letterMatchCount: 3,
        },
        {
            guessedWord: "laptop",
            letterMatchCount: 4,
        },
        {
            guessedWord: "pc",
            letterMatchCount: 2,
        },
    ];

    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test("renders", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const guessedWordsComponent = findByDataTestAttribute(wrapper, "guessed-words-component");
        expect(guessedWordsComponent).toHaveLength(1);
    });

    test("renders section with a guessed words", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const guessedWordsComponent = findByDataTestAttribute(wrapper, "guessed-words-section");
        expect(guessedWordsComponent).toHaveLength(1);
    });

    test("renders all guessed words", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const guessedWordsComponent = findByDataTestAttribute(wrapper, "guessed-word");
        expect(guessedWordsComponent).toHaveLength(guessedWords.length);
    });
});
