import { shallow } from "enzyme";
import { findByDataTestAttribute } from "../utils";
import App from "./App";
import { Congrats } from "../Congrats/Congrats";
import { GuessedWords } from "../GuessedWords/GuessedWords";

const setup = (props = {}) => shallow(<App {...props} />);

describe("App component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup(<App />);
    });

    test("renders", () => {
        // eslint-disable-next-line testing-library/await-async-query
        const appComponent = findByDataTestAttribute(wrapper, "app-component");
        expect(appComponent).toHaveLength(1);
    });

    test("renders Congrats component", () => {
        const congratsComponent = wrapper.find(Congrats);
        expect(congratsComponent).toHaveLength(1);
    });

    test("renders GuessedWords component", () => {
        const guessedWordsComponent = wrapper.find(GuessedWords);
        expect(guessedWordsComponent).toHaveLength(1);
    });
});
