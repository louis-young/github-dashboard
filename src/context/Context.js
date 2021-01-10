import React, { createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const test = "Hi";

  return <Context.Provider value={{ test }}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
