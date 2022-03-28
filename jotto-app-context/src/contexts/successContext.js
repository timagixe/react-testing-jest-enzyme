import React from "react";

const successContext = React.createContext();

const useSuccess = () => {
  const context = React.useContext(successContext);

  if (!context) {
    throw new Error("useSuccess must be within a Success Context Provider");
  }

  return context;
};

const SuccessProvider = (props) => {
  const [success, setSuccess] = React.useState(false);

  const value = React.useMemo(() => [success, setSuccess], [success]);

  return (
    <successContext.Provider value={value} {...props}></successContext.Provider>
  );
};

const module = { useSuccess, SuccessProvider };

export default module;
