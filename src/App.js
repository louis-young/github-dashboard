import React from "react";

import { ContextProvider } from "./context/Context";

import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <ContextProvider>
      <Dashboard />
    </ContextProvider>
  );
};

export default App;
