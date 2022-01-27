import { Congrats } from "../Congrats/Congrats";
import { GuessedWords } from "../GuessedWords/GuessedWords";

function App() {
    return (
        <div data-test="app-component" className="container">
            <h1 className="display-4 d-flex justify-content-center">Guess The Word Game</h1>
            <Congrats success />
            <GuessedWords
                guessedWords={[
                    { guessedWord: "train", letterMatchCount: 3 },
                    { guessedWord: "future", letterMatchCount: 6 },
                ]}
            />
        </div>
    );
}

export default App;
