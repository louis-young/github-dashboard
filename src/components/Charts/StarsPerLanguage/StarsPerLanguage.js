import React, { useContext } from "react";

import { Context } from "../../../context/Context";

import { CHART_COLOUR_PALETTE } from "../../../constants/constants";
import { getSelectionFromArray } from "../../../utilities/utilities";

import { Doughnut } from "react-chartjs-2";

const getStarsPerLanguage = (repositories) => {
  const starsPerLanguage = repositories.reduce((accumulator, repository) => {
    const { language, stargazers_count: stars } = repository;

    if (!language) {
      return accumulator;
    }

    accumulator[language] ? (accumulator[language] += stars) : (accumulator[language] = stars);

    return accumulator;
  }, {});

  return starsPerLanguage;
};

const sortStarsPerLanguageDescending = (languages) => {
  const sortedStarsPerLanguageDescending = Object.entries(languages).sort(([, a], [, b]) => b - a);

  return sortedStarsPerLanguageDescending;
};

const formatStarsPerLanguage = (languages) => {
  const formattedStarsPerLanguage = languages.map(([language, stars]) => ({ language, stars }));

  return formattedStarsPerLanguage;
};

const getLabels = (formattedStarsPerLanguage) => {
  const labels = formattedStarsPerLanguage.map(({ language }) => language);

  return labels;
};

const getDataset = (formattedStarsPerLanguage) => {
  const dataset = formattedStarsPerLanguage.map(({ stars }) => stars);

  return dataset;
};

const StarsPerLanguage = () => {
  const { repositories } = useContext(Context);

  const starsPerLanguage = getStarsPerLanguage(repositories);

  const sortedStarsPerLanguageDescending = sortStarsPerLanguageDescending(starsPerLanguage);

  const mostStarredLanguages = getSelectionFromArray(sortedStarsPerLanguageDescending, 5);

  const formattedStarsPerLanguage = formatStarsPerLanguage(mostStarredLanguages);

  const labels = getLabels(formattedStarsPerLanguage);

  const dataset = getDataset(formattedStarsPerLanguage);

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
    return (
      <article className="card card--center">
        <h4 className="card__title">No repositories</h4>
      </article>
    );
  }

  return (
    <article className="chart">
      <Doughnut
        data={data}
        options={{
          title: {
            display: true,
            text: "Stars Per Language",
            fontSize: 20,
          },
          legend: {
            display: true,
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </article>
  );
};

export default StarsPerLanguage;
