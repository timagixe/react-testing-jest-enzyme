import PropTypes from "prop-types";

export const Congrats = ({ success }) => (
    <div data-test="congrats-component">
        {success && <span data-test="congrats-message">You guessed the word! Congratulations!</span>}
    </div>
);

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};
