import React, { useContext } from "react";

import { Context } from "../../context/Context";

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

const formatLanguages = (languages) => {
  const formattedLanguages = languages.map(([language, count]) => ({ language, count }));

  return formattedLanguages;
};

const Languages = () => {
  const { repositories } = useContext(Context);

  const languages = getLanguagesFromRepositories(repositories);

  const sortedLanguagesDescending = sortLanguagesDescending(languages);

  const formattedLanguages = formatLanguages(sortedLanguagesDescending);

  return <pre>{JSON.stringify(formattedLanguages, false, 2)}</pre>;
};

export default Languages;
