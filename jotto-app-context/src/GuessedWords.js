import React, { useMemo } from "react";
import { languageContext } from "./contexts/languageContext";
import { getStringByLanguage } from "./helpers/strings.js";
import guessedWordsContext from "./contexts/guessedWordsContext";

const GuessedWords = () => {
  const [guessedWords] = guessedWordsContext.useGuessedWords();
  const language = React.useContext(languageContext);

  const contents = useMemo(() => {
    if (guessedWords.length) {
      return (
        <div data-test="guessed-words">
          <h3>
            {getStringByLanguage({
              languageCode: language,
              stringKey: "guessColumnHeader",
            })}
          </h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>
                  {getStringByLanguage({
                    languageCode: language,
                    stringKey: "guessedWords",
                  })}
                </th>
                <th>
                  {getStringByLanguage({
                    languageCode: language,
                    stringKey: "matchingLettersColumnHeader",
                  })}
                </th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, index) => (
                <tr data-test="guessed-word" key={index}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <span data-test="guess-instructions">
        {getStringByLanguage({
          languageCode: language,
          stringKey: "guessPrompt",
        })}
      </span>
    );
  }, [language, guessedWords]);

  return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWords;
