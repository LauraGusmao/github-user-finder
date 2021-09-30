import React, { useEffect, useState } from 'react';
import GithubContext from './GithubContext';
import api from '../services/api';

function GithubProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [hasUser, setHasUser] = useState(false);
  const [githubUser, setGithubUser] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [userStarred, setUserStarred] = useState([]);

  const getUser = (username) => {
    setLoading(true);
    api
      .get(`users/${username}`)
      .then((response) => setGithubUser(response))
      .finally(() => {
        setLoading(false);
        setHasUser(true);
      });
  };

  const getUserRepos = (username) => {
    api
      .get(`users/${username}/repos`)
      .then((response) => setUserRepos(response));
  };

  const getUserStarred = (username) => {
    api
      .get(`users/${username}/repos`)
      .then((response) => setUserStarred(response));
  };

  useEffect(() => {
    getUser('LauraGusmao');
    getUserRepos('LauraGusmao');
    getUserStarred('LauraGusmao');
  }, []);

  const context = {
    loading,
    githubUser,
    hasUser,
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
