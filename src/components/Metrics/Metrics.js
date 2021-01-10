import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Metric from "../Metric/Metric";

import folder from "../../assets/icons/metrics/folder.svg";
import crowd from "../../assets/icons/metrics/crowd.svg";
import users from "../../assets/icons/metrics/users.svg";
import note from "../../assets/icons/metrics/note.svg";

const Metrics = () => {
  const { user } = useContext(Context);

  const { public_repos: repositories, followers, following, public_gists: gists } = user;

  const metrics = [
    {
      icon: folder,
      name: "Repositories",
      quantity: repositories,
    },
    {
      icon: crowd,
      name: "Followers",
      quantity: followers,
    },
    {
      icon: users,
      name: "Following",
      quantity: following,
    },
    {
      icon: note,
      name: "Gists",
      quantity: gists,
    },
  ];

  return (
    <section>
      <h2>Metrics</h2>

      {metrics.map((metric) => (
        <Metric key={metric.name} icon={metric.icon} name={metric.name} quantity={metric.quantity} />
      ))}
    </section>
  );
};

export default Metrics;
