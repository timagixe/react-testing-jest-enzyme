import React, { useContext } from "react";
import { languageContext } from "./contexts/languageContext";
import { getStringByLanguage } from "./helpers/strings";
import successContext from "./contexts/successContext";

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = () => {
  const [success] = successContext.useSuccess();
  const language = useContext(languageContext);

  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          {getStringByLanguage({
            languageCode: language,
            stringKey: "congrats",
          })}
        </span>
      </div>
    );
  }

  return <div data-test="component-congrats" />;
};

export default Congrats;
