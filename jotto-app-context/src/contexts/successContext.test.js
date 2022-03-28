import React from "react";
import { shallow, mount } from "enzyme";
import successContext from "./successContext";

const { SuccessProvider } = successContext;

const MockComponent = () => {
  successContext.useSuccess();
  return <></>;
};

test("useSuccess throws an error when used outside of success context", () => {
  expect(() => {
    shallow(<MockComponent />);
  }).toThrow("useSuccess must be within a Success Context Provider");
});

test("useSuccess does not throw an error when used outside of success context", () => {
  expect(() => {
    mount(
      <SuccessProvider>
        <MockComponent />
      </SuccessProvider>,
    );
  }).not.toThrow();
});
