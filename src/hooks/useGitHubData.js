import { useState, useEffect } from "react";

import { fetchGitHubData } from "../api/api";

const useGitHubData = (username) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [followers, setFollowers] = useState();

  useEffect(() => {
    const getGitHubData = async () => {
      if (!username) {
        return;
      }

      try {
        setLoading(true);

        setError(false);

        const userRequest = fetchGitHubData(`/users/${username}`);

        const repositoriesRequest = fetchGitHubData(`/users/${username}/repos?per_page=100`);

        const followersRequest = fetchGitHubData(`/users/${username}/followers`);

        const responses = Promise.all([userRequest, repositoriesRequest, followersRequest]);

        const [user, repositories, followers] = await responses;

        if (!user || !repositories || !followers) throw new Error();

        setUser(user);

        setRepositories(repositories);

        setFollowers(followers);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getGitHubData();
  }, [username]);

  return { loading, error, user, repositories, followers };
};

export default useGitHubData;
