import React, { useState } from 'react';
import GithubContext from './GithubContext';

function GithubProvider({ children }) {
  const [githubInfo, setGithubInfo] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const context = {
    githubInfo,
  };

  return (
    <GithubContext.Provider value={ context }>
      { children }
    </GithubContext.Provider>
  );
}

export default GithubProvider;
