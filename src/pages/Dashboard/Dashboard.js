import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Search from "../../components/Search/Search";
import Metrics from "../../components/Metrics/Metrics";
import User from "../../components/User/User";
import Followers from "../../components/Followers/Followers";
import Languages from "../../components/Charts/Languages/Languages";
import MostStarred from "../../components/Charts/MostStarred/MostStarred";
import MostForked from "../../components/Charts/MostForked/MostForked";
import StarsPerLanguage from "../../components/Charts/StarsPerLanguage/StarsPerLanguage";
import Charts from "../../components/Charts/Charts";

const Dashboard = () => {
  const { loading, error, user } = useContext(Context);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try again.</p>;
  }

  return (
    <section style={{ width: "75%", margin: "auto" }}>
      <h1>Dashboard</h1>
      <Search />
      {user && (
        <>
          <Metrics />
          <User />
          <Followers />
          <Charts>
            <Languages />
            <MostStarred />
            <StarsPerLanguage />
            <MostForked />
          </Charts>
        </>
      )}
    </section>
  );
};

export default Dashboard;
