import React, { useContext } from "react";

import { Context } from "../../../context/Context";

import { getSelectionFromArray } from "../../../utilities/utilities";
import { CHART_COLOUR_PALETTE } from "../../../constants/constants";

import { HorizontalBar } from "react-chartjs-2";

const sortRepositories = (repositories) => {
  const sortedRepositories = repositories.sort((a, b) => b.forks - a.forks);

  return sortedRepositories;
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

  const mostForkedRepositories = getSelectionFromArray(sortedRepositories, 5);

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
    return (
      <article className="card card--center">
        <h4 className="card__title">No repositories</h4>
      </article>
    );
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
