import React, { useContext } from "react";

import { Context } from "../../context/Context";

const Dashboard = () => {
  const { test } = useContext(Context);

  return <section>Dashboard {test}</section>;
};

export default Dashboard;
