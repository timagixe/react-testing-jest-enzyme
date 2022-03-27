import { useCallback, useEffect, useReducer } from "react";
import {
  LanguageContextProvider,
  DEFAULT_LANGUAGE,
} from "./contexts/languageContext";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions";
import "./App.css";
import LanguagePicker from "./LanguagePicker";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setSecretWord":
      return { ...state, secretWord: payload };
    case "setLanguage":
      console.log("setLanguage");
      return { ...state, language: payload };
    default:
      throw Error(`Unknown action type ${type}`);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    secretWord: null,
    language: DEFAULT_LANGUAGE,
  });
  const success = false;
  const guessedWords = [];

  const setSecretWord = useCallback((secretWord) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  }, []);

  const setLanguage = useCallback((languageCode) => {
    dispatch({ type: "setLanguage", payload: languageCode });
  }, []);

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, [setSecretWord]);

  if (state.secretWord === null) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </div>
    );
  }

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <LanguageContextProvider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Congrats success={success} />
        <Input success={success} secretWord={state.secretWord} />
        <GuessedWords guessedWords={guessedWords} />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
