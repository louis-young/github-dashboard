import React, { createContext, useState } from "react";

import useGitHubData from "../hooks/useGitHubData";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const { loading, error, user, repositories, followers } = useGitHubData(username);

  return (
    <Context.Provider value={{ loading, error, user, repositories, followers, setUsername }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
