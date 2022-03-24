import React from "react";

export const DEFAULT_LANGUAGE = "en";

export const languageContext = React.createContext(DEFAULT_LANGUAGE);

export const LanguageContextConsumer = languageContext.Consumer;
export const LanguageContextProvider = languageContext.Provider;
