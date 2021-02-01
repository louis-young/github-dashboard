const linkHasPrefix = (link) => {
  const http = link.startsWith("http://");

  const https = link.startsWith("https://");

  const prefixed = http || https;

  return prefixed;
};

const getSelectionFromArray = (array, count) => {
  const selection = array.slice(0, count);

  return selection;
};

export { linkHasPrefix, getSelectionFromArray };
