import React from "react";

import Metrics from "../../components/Metrics/Metrics";
import User from "../../components/User/User";
import Followers from "../../components/Followers/Followers";
import Languages from "../../components/Languages/Languages";

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <Metrics />
      <User />
      <Followers />
      <Languages />
    </section>
  );
};

export default Dashboard;
