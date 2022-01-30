import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

export const SecretWordInput = ({ secretWord }) => {
    const [currentGuess, setCurrentGuess] = React.useState("");
    const success = useSelector((state) => state.success);

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
};
