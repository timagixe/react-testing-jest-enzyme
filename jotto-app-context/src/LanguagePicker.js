import React, { useMemo } from "react";
import propTypes from "prop-types";

const languages = [
  { code: "en", symbol: "🇬🇧" },
  { code: "emoji", symbol: "😊" },
];

const LanguagePicker = ({ setLanguage }) => {
  const languageIcons = useMemo(
    () =>
      languages.map(({ code, symbol }) => (
        <span
          key={code}
          data-test="language-icon"
          onClick={() => setLanguage(code)}
        >
          {symbol}
        </span>
      )),
    [setLanguage],
  );
  return <div data-test="language-picker-component">{languageIcons}</div>;
};

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
};

export default LanguagePicker;
