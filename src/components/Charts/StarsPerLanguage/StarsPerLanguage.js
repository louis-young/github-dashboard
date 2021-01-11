import React, { useContext } from "react";

import { Context } from "../../../context/Context";

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

const getMostStarredLanguages = (languages) => {
  const mostStarredLanguages = languages.slice(0, 5);

  return mostStarredLanguages;
};

const formatStarsPerLanguage = (languages) => {
  const formattedStarsPerLanguage = languages.map(([language, stars]) => ({ language, stars }));

  return formattedStarsPerLanguage;
};

const StarsPerLanguage = () => {
  const { repositories } = useContext(Context);

  const starsPerLanguage = getStarsPerLanguage(repositories);

  const sortedStarsPerLanguageDescending = sortStarsPerLanguageDescending(starsPerLanguage);

  const mostStarredLanguages = getMostStarredLanguages(sortedStarsPerLanguageDescending);

  const formattedStarsPerLanguage = formatStarsPerLanguage(mostStarredLanguages);

  if (!repositories.length) {
    return <h4>No repositories</h4>;
  }

  return (
    <section>
      <h3>Stars Per Language</h3>
      <pre>{JSON.stringify(formattedStarsPerLanguage, false, 2)}</pre>
    </section>
  );
};

export default StarsPerLanguage;
