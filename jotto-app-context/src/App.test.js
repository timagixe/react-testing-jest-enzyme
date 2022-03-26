import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";
import { getSecretWord as mockGetSecretWord } from "./actions";
import { DEFAULT_LANGUAGE } from "./contexts/languageContext";

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock("./actions");

/**
 * Setup function for App component
 * @returns {Wrapper}
 */
const setup = () => {
  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

describe.each([
  [null, true, false],
  ["party", false, true],
])("renders with secretWord as %s", (secretWord, isLoading, isAppLoaded) => {
  let originalUserReducer;
  let wrapper;

  beforeEach(() => {
    originalUserReducer = React.useReducer;
    React.useReducer = jest
      .fn()
      .mockReturnValue([{ secretWord, language: DEFAULT_LANGUAGE }, jest.fn()]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useReducer = originalUserReducer;
  });

  test(`renders loading spinner: ${isLoading}`, () => {
    const loadingSpinner = findByTestAttr(wrapper, "spinner");
    expect(loadingSpinner.exists()).toBe(isLoading);
  });

  test(`renders app component: ${isAppLoaded}`, () => {
    const loadingSpinner = findByTestAttr(wrapper, "component-app");
    expect(loadingSpinner.exists()).toBe(isAppLoaded);
  });
});

describe("get secret word", () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
