import React, { createContext, useState } from "react";

import initialUser from "../data/user.json";
import initialRepositories from "../data/repositories.json";
import initialFollowers from "../data/followers.json";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [repositories, setRepositories] = useState(initialRepositories);
  const [followers, setFollowers] = useState(initialFollowers);

  return <Context.Provider value={{ user, repositories, followers }}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
