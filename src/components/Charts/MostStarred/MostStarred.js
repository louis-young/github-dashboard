import React, { useContext } from "react";

import { Context } from "../../../context/Context";

const sortRepositories = (repositories) => {
  const sortedRepositories = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return sortedRepositories;
};

const getMostStarredRepositories = (repositories) => {
  const mostStarredRepositories = repositories.slice(0, 5);

  return mostStarredRepositories;
};

const formatRepositories = (repositories) => {
  const formattedRepositories = repositories.map((repository) => {
    const { name, stargazers_count: stars } = repository;

    return { name, stars };
  });

  return formattedRepositories;
};

const MostStarred = () => {
  const { repositories } = useContext(Context);

  const sortedRepositories = sortRepositories(repositories);

  const mostStarredRepositories = getMostStarredRepositories(sortedRepositories);

  const formattedRepositories = formatRepositories(mostStarredRepositories);

  return (
    <section>
      <h3>Most Starred</h3>
      <pre>{JSON.stringify(formattedRepositories, false, 2)}</pre>
    </section>
  );
};

export default MostStarred;
