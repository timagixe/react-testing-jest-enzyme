import stringsModule from "./strings";
const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: "submit" },
  emoji: { submit: "🚀" },
  ua: {},
};

const stringKey = "submit";

describe("getStringByLanguage", () => {
  const mockWarn = jest.fn();
  let consoleWarn;

  beforeEach(() => {
    consoleWarn = console.warn;
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = consoleWarn;
  });

  test("returns correct string for for english", () => {
    const string = getStringByLanguage({
      languageCode: "en",
      stringKey,
      strings,
    });
    expect(string).toBe("submit");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("returns correct string for for emoji", () => {
    const string = getStringByLanguage({
      languageCode: "emoji",
      stringKey,
      strings,
    });
    expect(string).toBe("🚀");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("returns english string when language code does not exist", () => {
    const string = getStringByLanguage({
      languageCode: "ja",
      stringKey,
      strings,
    });
    expect(string).toBe("submit");
    expect(mockWarn).toBeCalledWith(
      "There is no string for [stringKey=submit] of [languageCode=ja]",
    );
  });

  test("returns english string when string key does not exist for language code", () => {
    const string = getStringByLanguage({
      languageCode: "ua",
      stringKey,
      strings,
    });
    expect(string).toBe("submit");
    expect(mockWarn).toBeCalledWith(
      "There is no string for [stringKey=submit] of [languageCode=ua]",
    );
  });
});
