import React, { useContext } from "react";

import { Context } from "../../../context/Context";

import { Bar } from "react-chartjs-2";

import { CHART_COLOUR_PALETTE } from "../../../constants/constants";

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

const getLabels = (formattedRepositories) => {
  const labels = formattedRepositories.map(({ name }) => name);

  return labels;
};

const getDataset = (formattedRepositories) => {
  const dataset = formattedRepositories.map(({ stars }) => stars);

  return dataset;
};

const MostStarred = () => {
  const { repositories } = useContext(Context);

  const sortedRepositories = sortRepositories(repositories);

  const mostStarredRepositories = getMostStarredRepositories(sortedRepositories);

  const formattedRepositories = formatRepositories(mostStarredRepositories);

  const labels = getLabels(formattedRepositories);

  const dataset = getDataset(formattedRepositories);

  const data = {
    labels,
    datasets: [
      {
        label: "Stars",
        backgroundColor: CHART_COLOUR_PALETTE,
        data: dataset,
      },
    ],
  };

  if (!repositories.length) {
    return <h4>No repositories</h4>;
  }

  return (
    <section>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Most Starred",
            fontSize: 20,
          },
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Stars",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Repository",
                },
              },
            ],
          },
        }}
      />
    </section>
  );
};

export default MostStarred;
