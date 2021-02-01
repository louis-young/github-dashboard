import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Metrics from "../../components/Metrics/Metrics";
import User from "../../components/User/User";
import Followers from "../../components/Followers/Followers";
import Languages from "../../components/Charts/Languages/Languages";
import MostStarred from "../../components/Charts/MostStarred/MostStarred";
import MostForked from "../../components/Charts/MostForked/MostForked";
import StarsPerLanguage from "../../components/Charts/StarsPerLanguage/StarsPerLanguage";
import Charts from "../../components/Charts/Charts";
import Details from "../../components/Details/Details";

import "./Dashboard.scss";
import Loading from "../../components/Loading/Loading";

const Dashboard = () => {
  const { loading, error } = useContext(Context);

  // if (loading) {
  //   return <Loading />;
  // }

  if (error) {
    return (
      <article className="card card--center">
        <h4 className="card__title">No user found. Please try again.</h4>
      </article>
    );
  }

  return (
    <>
      {loading && <Loading />}
      <Metrics />
      <Details>
        <User />
        <Followers />
      </Details>
      <Charts>
        <Languages />
        <MostStarred />
        <StarsPerLanguage />
        <MostForked />
      </Charts>
    </>
  );
};

export default Dashboard;
