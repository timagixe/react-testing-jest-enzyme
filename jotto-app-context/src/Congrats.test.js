import React from "react";
import { mount } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";
import {
  DEFAULT_LANGUAGE,
  LanguageContextProvider,
} from "./contexts/languageContext";
import successContext from "./contexts/successContext";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = ({ success = false, language = DEFAULT_LANGUAGE } = {}) => {
  return mount(
    <LanguageContextProvider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </LanguageContextProvider>,
  );
};

describe("language picker", () => {
  test("renders congrats string in english", () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
  });

  test("renders congrats string in emoji", () => {
    const wrapper = setup({ success: true, language: "emoji" });
    expect(wrapper.text()).toBe("🎯🎉");
  });
});

describe("congrats component", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component).toHaveLength(1);
  });

  test("renders no text when `success` is false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe("");
  });

  test("renders non-empty congrats message when `success` is true", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).toBeGreaterThan(0);
  });
});
