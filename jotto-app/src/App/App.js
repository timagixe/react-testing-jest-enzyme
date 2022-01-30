import React, { useEffect } from "react";
import { getSecretWord } from "../actions";
import { Congrats } from "../Congrats/Congrats";
import { GuessedWords } from "../GuessedWords/GuessedWords";
import { SecretWordInput } from "../SecretWordInput/SecretWordInput";

function App() {
    const [secretWord] = React.useState("daylight");
    const [success] = React.useState(false);
    const [guessedWords] = React.useState([]);

    useEffect(() => {
        getSecretWord();
    }, []);

    return (
        <div data-test="app-component" className="container">
            <h1 className="display-4 d-flex justify-content-center">Guess The Word Game</h1>
            <Congrats success={success} />
            <SecretWordInput secretWord={secretWord} />
            <GuessedWords guessedWords={guessedWords} />
        </div>
    );
}

export default App;
