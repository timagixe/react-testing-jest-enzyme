import { DEFAULT_LANGUAGE } from "../contexts/languageContext";

const languageStrings = {
  en: {
    congrats: "Congratulations! You guessed the word!",
    submit: "Submit",
    guessPrompt: "Try to guess the secret word!",
    guessInputPlaceholder: "enter guess",
    guessColumnHeader: "Guessed Words",
    // Challenge #1: Number of Guesses
    numberColumnHeader: "#",
    totalGuesses: "Total Guesses",
    // END: Challenge #1: Number of Guesses
    guessedWords: "Guesses",
    matchingLettersColumnHeader: "Matching Letters",
    // Challenge #2: Reset Game
    newWord: "New Word",
    // END: Challenge #2: Reset Game
    // Challenge #3: Give up
    giveUp: "Give Up",
    secretWordWas: "The secret word was",
    betterLuck: "Better luck next time!",
    // END: Challenge #3: Give up
    // Challenge #4: Enter Secret Word
    enterSecretWord: "Enter your own secret word",
    // END: Challenge #4: Enter Secret Word
    // Challenge #5: Server Error
    serverError:
      "There was an error retrieving the secret word. Please try again later.",
    // END: Challenge #5: Server Error
  },
  emoji: {
    congrats: "🎯🎉",
    submit: "🚀",
    guessPrompt: "🤔🤫🔤",
    guessInputPlaceholder: "⌨️🤔",
    guessedWords: "🤷‍🔤",
    guessColumnHeader: "🤷‍",
    // Challenge #1: Number of Guesses
    numberColumnHeader: "🔢",
    totalGuesses: "🔢🤷‍♀️",
    // END: Challenge #1: Number of Guesses
    matchingLettersColumnHeader: "✅",
    // Challenge #2: Reset Game
    newWord: "✨🔤",
    // END: Challenge #2: Reset Game
    // Challenge #3: Give up
    giveUp: "😩",
    secretWordWas: "🤫🔤",
    betterLuck: "🍀✨🔤",
    // END: Challenge #3: Give up
    // Challenge #4: Enter Secret Word
    enterSecretWord: "👩‍💻🤫🔤",
    // END: Challenge #4: Enter Secret Word
    // Challenge #5: Server Error
    serverError: "🚨. ⏲.",
    // END: Challenge #5: Server Error
  },
};

export const getStringByLanguage = ({
  languageCode,
  stringKey,
  strings = languageStrings,
}) => {
  const fallbackLanguage = DEFAULT_LANGUAGE;
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(
      `There is no string for [stringKey=${stringKey}] of [languageCode=${languageCode}]`,
    );
    return strings[fallbackLanguage][stringKey];
  }
  return strings[languageCode][stringKey];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getStringByLanguage };
