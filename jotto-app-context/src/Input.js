import React, { useContext } from "react";
import PropTypes from "prop-types";
import { languageContext } from "./contexts/languageContext";
import { getStringByLanguage } from "./helpers/strings";
import successContext from "./contexts/successContext";
import guessedWordsContext from "./contexts/guessedWordsContext";
import { getLetterMatchCount } from "./helpers/index";

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const language = useContext(languageContext);
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();
  const [success, setSuccess] = successContext.useSuccess();
  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={getStringByLanguage({
            languageCode: language,
            stringKey: "guessInputPlaceholder",
          })}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(evt) => {
            evt.preventDefault();
            const letterMatchCount = getLetterMatchCount(
              currentGuess,
              secretWord,
            );
            const nextGuessedWord = {
              guessedWord: currentGuess,
              letterMatchCount,
            };
            const nextGuessedWords = guessedWords.concat(nextGuessedWord);
            setGuessedWords(nextGuessedWords);

            if (secretWord === currentGuess) {
              setSuccess(true);
            }
            setCurrentGuess("");
          }}
          className="btn btn-primary mb-2"
        >
          {getStringByLanguage({
            languageCode: language,
            stringKey: "submit",
          })}
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
