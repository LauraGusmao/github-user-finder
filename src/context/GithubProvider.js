import React, { useEffect, useState } from 'react';
import GithubContext from './GithubContext';
import api from '../services/api';

function GithubProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [githubUser, setGithubUser] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [userStarred, setUserStarred] = useState([]);

  const getUser = (username) => {
    setLoading(true);
    api
      .get(`users/${username}`)
      .then(({ data }) => setGithubUser(data))
      .finally(() => {
        setLoading(false);
      });
  };

  const getUserRepos = (username) => {
    api
      .get(`users/${username}/repos`)
      .then(({ data }) => setUserRepos(data));
  };

  const getUserStarred = (username) => {
    api
      .get(`users/${username}/starred`)
      .then(({ data }) => setUserStarred(data));
  };

  useEffect(() => {
    getUser('LauraGusmao');
    getUserRepos('LauraGusmao');
    getUserStarred('LauraGusmao');
  }, []);

  const context = {
    loading,
    githubUser,
    userRepos,
    userStarred,
    getUser, // : useCallback((username) => getUser(username), []),
    getUserRepos, // : useCallback((username) => getUserRepos(username), []),
    getUserStarred, // : useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={ context }>
      { children }
    </GithubContext.Provider>
  );
}

export default GithubProvider;
