import React from "react";

import { ContextProvider } from "./context/Context";

import Search from "./components/Search/Search";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <ContextProvider>
      <section className="container container--large">
        <Search />
        <Dashboard />
      </section>
    </ContextProvider>
  );
};

export default App;
