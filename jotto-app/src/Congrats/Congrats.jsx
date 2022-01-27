import PropTypes from "prop-types";

export const Congrats = ({ success }) => (
    <div data-test="congrats-component" className="mt-10 d-flex justify-content-center">
        {success && (
            <p data-test="congrats-message" className="alert alert-success">
                You guessed the word! Congratulations!
            </p>
        )}
    </div>
);

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};
