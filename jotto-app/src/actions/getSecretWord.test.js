import moxios from "moxios";
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
        // eslint-disable-next-line testing-library/await-async-utils
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: SECRET_WORD,
            });
        });

        const secretWord = await getSecretWord();

        expect(secretWord).toBe("testing");
    });
});
