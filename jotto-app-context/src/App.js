import { useCallback, useEffect, useReducer } from "react";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions";

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "setSecretWord":
            return { ...state, secretWord: action.payload };
        default:
            throw Error(`Unknown action type ${action.type}`);
    }
};

function App() {
    const [state, dispatch] = useReducer(reducerFunction, { secretWord: "" });
    const success = false;
    const guessedWords = [];

    const setSecretWord = useCallback((secretWord) => {
        dispatch({ type: "setSecretWord", payload: secretWord });
    }, []);

    useEffect(() => {
        getSecretWord(setSecretWord);
    }, [setSecretWord]);

    return (
        <div data-test="component-app" className="container">
            <h1>Jotto</h1>
            <Congrats success={success} />
            <Input success={success} secretWord={state.secretWord} />
            <GuessedWords guessedWords={guessedWords} />
        </div>
    );
}

export default App;
