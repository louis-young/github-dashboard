import React, { useContext } from "react";

import { Context } from "../../../context/Context";

import { Pie } from "react-chartjs-2";

import { CHART_COLOUR_PALETTE } from "../../../constants/constants";

const getLanguagesFromRepositories = (repositories) => {
  const languages = repositories.reduce((accumulator, repository) => {
    const { language } = repository;

    if (!language) {
      return accumulator;
    }

    accumulator[language] ? accumulator[language]++ : (accumulator[language] = 1);

    return accumulator;
  }, {});

  return languages;
};

const sortLanguagesDescending = (languages) => {
  const sortedLanguagesDescending = Object.entries(languages).sort(([, a], [, b]) => b - a);

  return sortedLanguagesDescending;
};

const getMostPopularLanguages = (languages) => {
  const mostPopularLanguages = languages.slice(0, 5);

  return mostPopularLanguages;
};

const formatLanguages = (languages) => {
  const formattedLanguages = languages.map(([language, count]) => ({ language, count }));

  return formattedLanguages;
};

const getLabels = (formattedLanguages) => {
  const labels = formattedLanguages.map(({ language }) => language);

  return labels;
};

const getDataset = (formattedLanguages) => {
  const dataset = formattedLanguages.map(({ count }) => count);

  return dataset;
};

const Languages = () => {
  const { repositories } = useContext(Context);

  const languages = getLanguagesFromRepositories(repositories);

  const sortedLanguagesDescending = sortLanguagesDescending(languages);

  const mostPopularLanguages = getMostPopularLanguages(sortedLanguagesDescending);

  const formattedLanguages = formatLanguages(mostPopularLanguages);

  const labels = getLabels(formattedLanguages);

  const dataset = getDataset(formattedLanguages);

  const data = {
    labels,
    datasets: [
      {
        label: "Repositories",
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
      <Pie
        data={data}
        options={{
          title: {
            display: true,
            text: "Languages",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </article>
  );
};

export default Languages;
