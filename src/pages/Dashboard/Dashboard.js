import React from "react";

import Search from "../../components/Search/Search";
import Metrics from "../../components/Metrics/Metrics";
import User from "../../components/User/User";
import Followers from "../../components/Followers/Followers";
import Languages from "../../components/Charts/Languages/Languages";
import MostStarred from "../../components/Charts/MostStarred/MostStarred";
import MostForked from "../../components/Charts/MostForked/MostForked";
import StarsPerLanguage from "../../components/Charts/StarsPerLanguage/StarsPerLanguage";

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <Search />
      <Metrics />
      <User />
      <Followers />
      <Languages />
      <MostStarred />
      <StarsPerLanguage />
      <MostForked />
    </section>
  );
};

export default Dashboard;
