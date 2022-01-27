import { shallow } from "enzyme";
import { Congrats } from "./Congrats";
import { checkProps, findByDataTestAttribute } from "../utils";

const defaultProps = { success: false };

const setup = (props = {}) => shallow(<Congrats {...{ ...defaultProps, ...props }} />);

describe("Congrats component", () => {
    test("renders", async () => {
        const wrapper = setup();
        // eslint-disable-next-line testing-library/await-async-query
        const congratsComponent = findByDataTestAttribute(wrapper, "congrats-component");
        expect(congratsComponent).toHaveLength(1);
    });

    test("renders no text when props.success is false", () => {
        const wrapper = setup({ success: false });
        // eslint-disable-next-line testing-library/await-async-query
        const congratsComponent = findByDataTestAttribute(wrapper, "congrats-component");
        const congratsComponentText = congratsComponent.text();
        expect(congratsComponentText).toBe("");
    });

    test("renders text when props.success is true", () => {
        const wrapper = setup({ success: true });
        // eslint-disable-next-line testing-library/await-async-query
        const congratsMessage = findByDataTestAttribute(wrapper, "congrats-message");
        const congratsMessageTextLength = congratsMessage.text().length;
        expect(congratsMessageTextLength).not.toBe(0);
    });

    test("has no warnings with expected props", () => {
        const expectedProps = { success: true };
        checkProps(Congrats, expectedProps);
    });
});
