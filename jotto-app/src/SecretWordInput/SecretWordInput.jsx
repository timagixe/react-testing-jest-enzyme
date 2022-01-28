import PropTypes from "prop-types";
import React from "react";

export const SecretWordInput = ({ secretWord, success }) => {
    const [currentGuess, setCurrentGuess] = React.useState("");

    return (
        <div data-test="secret-word-input-component">
            {!success && (
                <form className="form-inline">
                    <input
                        type="text"
                        placeholder="type the word of your choice"
                        data-test="input-node"
                        className="mb-2 mx-sm-3"
                        value={currentGuess}
                        onChange={(event) => setCurrentGuess(event.target.value)}
                    />
                    <button
                        data-test="submit-button"
                        className="btn btn-primary mb-2"
                        onClick={(event) => {
                            event.preventDefault();
                            setCurrentGuess("");
                        }}
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

SecretWordInput.propTypes = {
    secretWord: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
};
