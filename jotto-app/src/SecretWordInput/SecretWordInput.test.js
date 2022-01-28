import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByDataTestAttribute } from "../utils";
import { SecretWordInput } from "./SecretWordInput";

const SECRET_WORD = "coffee";

const defaultProps = { success: false, secretWord: SECRET_WORD };

const setup = (props = {}) => shallow(<SecretWordInput {...{ ...defaultProps, ...props }} />);

describe("SecretWordInput component", () => {
    describe("when success equals to true", () => {
        let wrapper;
        const setupProps = { ...defaultProps, success: true };

        beforeEach(() => {
            wrapper = setup(setupProps);
        });

        test("renders secretWordInputComponent", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const secretWordInputComponent = findByDataTestAttribute(wrapper, "secret-word-input-component");
            const secretWordInputComponentExists = secretWordInputComponent.exists();
            expect(secretWordInputComponentExists).toBeTruthy();
        });

        test("does not render inputNode", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const inputNode = findByDataTestAttribute(wrapper, "input-node");
            const inputNodeExists = inputNode.exists();
            expect(inputNodeExists).toBeFalsy();
        });

        test("does not render submitButton", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const submitButton = findByDataTestAttribute(wrapper, "submit-button");
            const submitButtonExists = submitButton.exists();
            expect(submitButtonExists).toBeFalsy();
        });
    });

    describe("when success equals to false", () => {
        let wrapper;
        const setupProps = { ...defaultProps, success: false };

        beforeEach(() => {
            wrapper = setup(setupProps);
        });

        test("renders secretWordInputComponent", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const secretWordInputComponent = findByDataTestAttribute(wrapper, "secret-word-input-component");
            const secretWordInputComponentExists = secretWordInputComponent.exists();
            expect(secretWordInputComponentExists).toBeTruthy();
        });

        test("renders inputNode", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const inputNode = findByDataTestAttribute(wrapper, "input-node");
            const inputNodeExists = inputNode.exists();
            expect(inputNodeExists).toBeTruthy();
        });

        test("renders submitButton", () => {
            // eslint-disable-next-line testing-library/await-async-query
            const submitButton = findByDataTestAttribute(wrapper, "submit-button");
            const submitButtonExists = submitButton.exists();
            expect(submitButtonExists).toBeTruthy();
        });
    });
});

describe("SecretWordInput check props", () => {
    test("renders", () => {
        const wrapper = setup();
        // eslint-disable-next-line testing-library/await-async-query
        const secretWordInputComponent = findByDataTestAttribute(wrapper, "secret-word-input-component");
        expect(secretWordInputComponent).toHaveLength(1);
    });

    test("has no warnings with expected props", () => {
        checkProps(SecretWordInput, defaultProps);
    });
});

describe("SecretWordInput component state", () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = mockSetCurrentGuess.mockReturnValue(["", mockSetCurrentGuess]);
        wrapper = setup();
    });

    afterEach(() => {
        React.useState = originalUseState;
    });

    test("updates with value of input node on change", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const inputNode = findByDataTestAttribute(wrapper, "input-node");
        const mockEvent = { target: { value: "car" } };
        inputNode.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith(mockEvent.target.value);
    });

    test("clears when submit button clicked", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const submitButton = findByDataTestAttribute(wrapper, "submit-button");
        const mockEvent = { preventDefault: () => {} };
        submitButton.simulate("click", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    });
});
