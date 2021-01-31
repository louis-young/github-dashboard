import React, { useContext } from "react";

import { Context } from "../../../context/Context";

import { HorizontalBar } from "react-chartjs-2";

import { CHART_COLOUR_PALETTE } from "../../../constants/constants";

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

const getLabels = (formattedRepositories) => {
  const labels = formattedRepositories.map(({ name }) => name);

  return labels;
};

const getDataset = (formattedRepositories) => {
  const dataset = formattedRepositories.map(({ forks }) => forks);

  return dataset;
};

const MostForked = () => {
  const { repositories } = useContext(Context);

  const sortedRepositories = sortRepositories(repositories);

  const mostForkedRepositories = getMostForkedRepositories(sortedRepositories);

  const formattedRepositories = formatRepositories(mostForkedRepositories);

  const labels = getLabels(formattedRepositories);

  const dataset = getDataset(formattedRepositories);

  const data = {
    labels,
    datasets: [
      {
        label: "Forks",
        backgroundColor: CHART_COLOUR_PALETTE,
        data: dataset,
      },
    ],
  };

  if (!repositories.length) {
    return <h4>No repositories</h4>;
  }

  return (
    <article className="chart">
      <HorizontalBar
        data={data}
        options={{
          title: {
            display: true,
            text: "Most Forked",
            fontSize: 20,
          },
          legend: {
            display: false,
          },
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Repository",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Forks",
                },
              },
            ],
          },
        }}
      />
    </article>
  );
};

export default MostForked;
