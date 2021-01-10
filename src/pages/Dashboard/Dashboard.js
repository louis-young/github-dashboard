import React from "react";

import Metrics from "../../components/Metrics/Metrics";
import User from "../../components/User/User";
import Followers from "../../components/Followers/Followers";
import Languages from "../../components/Charts/Languages/Languages";
import MostStarred from "../../components/Charts/MostStarred/MostStarred";
import MostForked from "../../components/Charts/MostForked/MostForked";

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <Metrics />
      <User />
      <Followers />
      <Languages />
      <MostStarred />
      <MostForked />
    </section>
  );
};

export default Dashboard;
