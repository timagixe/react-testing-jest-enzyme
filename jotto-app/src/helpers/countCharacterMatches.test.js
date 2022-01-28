import { countCharacterMatches } from ".";

describe("countCharacterMatches helper", () => {
    const secretWord = "contribute";

    test("returns 0 when no matches", () => {
        const matchesCount = countCharacterMatches(secretWord, "USA");
        expect(matchesCount).toBe(0);
    });

    test("returns 6 when there are 6 matches", () => {
        const matchesCount = countCharacterMatches(secretWord, "butter");
        expect(matchesCount).toBe(6);
    });

    test("returns secret word length when guessed word is the same as secret", () => {
        const matchesCount = countCharacterMatches(secretWord, "contribute");
        expect(matchesCount).toBe(secretWord.length);
    });
});
