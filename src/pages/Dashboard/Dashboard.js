import React, { useContext } from "react";

import Metrics from "../../components/Metrics/Metrics";
import User from "../../components/User/User";

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <Metrics />
      <User />
    </section>
  );
};

export default Dashboard;
