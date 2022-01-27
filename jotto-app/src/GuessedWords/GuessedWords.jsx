import PropTypes from "prop-types";

export const GuessedWords = ({ guessedWords }) => {
    const hasGuessedWords = Boolean(guessedWords.length);

    return (
        <div data-test="guessed-words-component">
            {!hasGuessedWords && (
                <p data-test="guess-words-instructions">Enter the word and try to guess the secret word!</p>
            )}

            {hasGuessedWords && (
                <div data-test="guessed-words-section">
                    <h1 className="display-6">Guessed Words</h1>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Words</th>
                                <th scope="col">Matched Letters Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guessedWords.map(({ guessedWord, letterMatchCount }) => (
                                <tr key={`${guessedWord}-${letterMatchCount}`} data-test="guessed-word">
                                    <td>{guessedWord}</td>
                                    <td>{letterMatchCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        }).isRequired
    ),
};
