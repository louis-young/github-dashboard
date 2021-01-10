import React, { useContext } from "react";

import { Context } from "../../context/Context";

const sortRepositories = (repositories) => {
  const sortedRepositories = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return sortedRepositories;
};

const getPopularRepositories = (repositories) => {
  const popularRepositories = repositories.slice(0, 5);

  return popularRepositories;
};

const formatRepositories = (repositories) => {
  const formattedRepositories = repositories.map((repository) => {
    const { name, stargazers_count: stars } = repository;

    return { name, stars };
  });

  return formattedRepositories;
};

const Popularity = () => {
  const { repositories } = useContext(Context);

  const sortedRepositories = sortRepositories(repositories);

  const popularRepositories = getPopularRepositories(sortedRepositories);

  const formattedRepositories = formatRepositories(popularRepositories);

  return (
    <section>
      <h3>Stars</h3>
      <pre>{JSON.stringify(formattedRepositories, false, 2)}</pre>
    </section>
  );
};

export default Popularity;
