import React, { useContext } from "react";
import PropTypes from "prop-types";
import { languageContext } from "./contexts/languageContext";
import { getStringByLanguage } from "./helpers/strings";
import successContext from "./contexts/successContext";

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const language = useContext(languageContext);
  const [success] = successContext.useSuccess();
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
            // TODO: update guessedWords
            // TODO: check against secretWord and update success if necessary
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
