import React from "react";
import { mount } from "enzyme";
import { checkProps, findByDataTestAttribute, storeFactory } from "../utils";
import { SecretWordInput } from "./SecretWordInput";
import { Provider } from "react-redux";

const SECRET_WORD = "coffee";

const defaultProps = { secretWord: SECRET_WORD };

const setup = ({ initialState, props } = { initialState: { success: false }, props: {} }) => {
    const store = storeFactory(initialState);

    return mount(
        <Provider store={store}>
            <SecretWordInput {...{ ...defaultProps, ...props }} />
        </Provider>
    );
};

describe("SecretWordInput component", () => {
    describe("when success equals to true", () => {
        test("renders secretWordInputComponent", () => {
            const wrapper = setup();
            // eslint-disable-next-line testing-library/await-async-query
            const secretWordInputComponent = findByDataTestAttribute(wrapper, "secret-word-input-component");
            const secretWordInputComponentExists = secretWordInputComponent.exists();
            expect(secretWordInputComponentExists).toBeTruthy();
        });

        test("does not render inputNode", () => {
            const wrapper = setup({ initialState: { success: true } });
            // eslint-disable-next-line testing-library/await-async-query
            const inputNode = findByDataTestAttribute(wrapper, "input-node");
            const inputNodeExists = inputNode.exists();
            expect(inputNodeExists).toBeFalsy();
        });

        test("does not render submitButton", () => {
            const wrapper = setup({ initialState: { success: true } });
            // eslint-disable-next-line testing-library/await-async-query
            const submitButton = findByDataTestAttribute(wrapper, "submit-button");
            const submitButtonExists = submitButton.exists();
            expect(submitButtonExists).toBeFalsy();
        });
    });

    describe("when success equals to false", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup();
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
