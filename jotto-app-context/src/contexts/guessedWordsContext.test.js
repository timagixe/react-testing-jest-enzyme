import React from "react";
import { shallow, mount } from "enzyme";
import guessedWordsContext from "./guessedWordsContext";

const { GuessedWordsProvider } = guessedWordsContext;

const MockComponent = () => {
  guessedWordsContext.useGuessedWords();
  return <></>;
};

test("useGuessedWords throws an error when used outside of guessed words context", () => {
  expect(() => {
    shallow(<MockComponent />);
  }).toThrow(
    "useGuessedWords cannot be used outside of Guessed Words Provider",
  );
});

test("useGuessedWords does not throw an error when used outside of guessed words context", () => {
  expect(() => {
    mount(
      <GuessedWordsProvider>
        <MockComponent />
      </GuessedWordsProvider>,
    );
  }).not.toThrow();
});
