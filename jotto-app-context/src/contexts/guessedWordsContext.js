import React from "react";

const guessedWordsContext = React.createContext();

const useGuessedWords = () => {
  const context = React.useContext(guessedWordsContext);

  if (!context) {
    throw new Error(
      "useGuessedWords cannot be used outside of Guessed Words Provider",
    );
  }

  return context;
};

const GuessedWordsProvider = (props) => {
  const [guessedWords, setGuessedWords] = React.useState([]);

  const value = React.useMemo(
    () => [guessedWords, setGuessedWords],
    [guessedWords],
  );

  return <guessedWordsContext.Provider value={value} {...props} />;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { useGuessedWords, GuessedWordsProvider };
