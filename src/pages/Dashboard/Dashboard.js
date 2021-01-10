import React from "react";

import Metrics from "../../components/Metrics/Metrics";
import User from "../../components/User/User";
import Followers from "../../components/Followers/Followers";
import Languages from "../../components/Languages/Languages";
import Stars from "../../components/Stars/Stars";
import Forks from "../../components/Forks/Forks";

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <Metrics />
      <User />
      <Followers />
      <Languages />
      <Stars />
      <Forks />
    </section>
  );
};

export default Dashboard;
