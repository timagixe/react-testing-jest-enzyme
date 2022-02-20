import moxios from "moxios";
import { storeFactory } from "../utils";
import { getSecretWord } from "./getSecretWord";

const SECRET_WORD = "testing";

describe("getSecretWord action", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test("returns secretWord", async () => {
        const store = storeFactory();
        // eslint-disable-next-line testing-library/await-async-utils
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: SECRET_WORD,
            });
        });

        return store.dispatch(getSecretWord()).then(() => {
            const secretWord = store.getState().secretWord;
            expect(secretWord).toBe("testing");
        });
    });
});
