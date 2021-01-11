const fetchGitHubData = async (endpoint) => {
  try {
    const url = `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
      },
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
};

export { fetchGitHubData };
