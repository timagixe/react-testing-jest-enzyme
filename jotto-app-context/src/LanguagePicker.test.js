import { shallow } from "enzyme";
import React from "react";
import LanguagePicker from "./LanguagePicker";
import { findByTestAttr, checkProps } from "../test/testUtils";

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

describe("LanguagePicker", () => {
  test("renders without errors", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "language-picker-component");
    expect(component.exists()).toBeTruthy();
  });

  test("does not throw warnings with expected props", () => {
    checkProps(LanguagePicker, { setLanguage: mockSetLanguage });
  });

  test("renders non-zero language icons", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "language-icon");
    expect(component.length).toBeGreaterThan(0);
  });

  test("calls setLanguage prop upon click", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "language-icon");
    const firstIcon = component.first();
    firstIcon.simulate("click");
    expect(mockSetLanguage).toHaveBeenCalled();
  });
});
