import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import GuessedWords from "./GuessedWords";
import guessedWordsContext from "./contexts/guessedWordsContext";

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = ({ guessedWords = [] } = {}) => {
  const mockUseGuessedWords = jest
    .fn()
    .mockReturnValue([guessedWords, jest.fn()]);
  guessedWordsContext.useGuessedWords = mockUseGuessedWords;

  return shallow(<GuessedWords />);
};

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});
describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});

describe("language pickers", () => {
  test("correctly renders guess instruction in english", () => {
    const wrapper = setup({ guessedWords: [] });
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text()).toBe("Try to guess the secret word!");
  });

  test("correctly renders guess instruction in emoji", () => {
    jest.spyOn(React, "useContext").mockReturnValueOnce("emoji");
    const wrapper = setup({ guessedWords: [] });
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text()).toBe("????????????");
  });
});
