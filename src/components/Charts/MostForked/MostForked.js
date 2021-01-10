import React, { useContext } from "react";

import { Context } from "../../../context/Context";

const sortRepositories = (repositories) => {
  const sortedRepositories = repositories.sort((a, b) => b.forks - a.forks);

  return sortedRepositories;
};

const getMostForkedRepositories = (repositories) => {
  const mostForkedRepositories = repositories.slice(0, 5);

  return mostForkedRepositories;
};

const formatRepositories = (repositories) => {
  const formattedRepositories = repositories.map((repository) => {
    const { name, forks } = repository;

    return { name, forks };
  });

  return formattedRepositories;
};

const MostForked = () => {
  const { repositories } = useContext(Context);

  const sortedRepositories = sortRepositories(repositories);

  const mostForkedRepositories = getMostForkedRepositories(sortedRepositories);

  const formattedRepositories = formatRepositories(mostForkedRepositories);

  return (
    <section>
      <h3>Most Forked</h3>
      <pre>{JSON.stringify(formattedRepositories, false, 2)}</pre>
    </section>
  );
};

export default MostForked;
