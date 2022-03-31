import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

import {
  DEFAULT_LANGUAGE,
  LanguageContextProvider,
} from "./contexts/languageContext";
import Input from "./Input";
import successContext from "./contexts/successContext";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ReactWrapper}
 */
const setup = ({
  success = false,
  secretWord = "party",
  language = DEFAULT_LANGUAGE,
} = {}) => {
  return mount(
    <LanguageContextProvider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Input secretWord={secretWord} />
      </successContext.SuccessProvider>
    </LanguageContextProvider>,
  );
};

describe("render", () => {
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("Input renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box displays", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button displays", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("Input renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not display", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not display", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
});

describe("language picker", () => {
  test.each([
    ["placeholder", "english", { expected: "enter guess", language: "en" }],
    ["placeholder", "emoji", { expected: "⌨️🤔", language: "emoji" }],
    [
      "placeholder",
      "undefined",
      { expected: "enter guess", language: undefined },
    ],
  ])("renders [%s] text in [%s]", (_, __, { expected, language }) => {
    const wrapper = setup({ language });
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.prop("placeholder")).toBe(expected);
  });

  test.each([
    ["button", "english", { expected: "Submit", language: "en" }],
    ["button", "emoji", { expected: "🚀", language: "emoji" }],
    ["button", "undefined", { expected: "Submit", language: undefined }],
  ])("renders [%s] text in [%s]", (_, __, { expected, language }) => {
    const wrapper = setup({ language });
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.text()).toBe(expected);
  });
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = () => ["", mockSetCurrentGuess];
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };

    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("field is cleared upon submit button click", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };

    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
