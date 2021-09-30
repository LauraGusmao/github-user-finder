import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import RepositoryItem from '../RepositoryItem';
import {
  StyledTabs, StyledTabList, StyledTab, StyledTabPanel,
} from './styles';

function RepositoriesList() {
  const [hasUserRepos, setHasUserRepos] = useState(false);
  const {
    githubUser, userRepos, getUserRepos, userStarred, getUserStarred,
  } = useContext(GithubContext);

  useEffect(() => {
    if (githubUser.login) {
      getUserRepos(githubUser.login);
      getUserStarred(githubUser.login);
    }
    setHasUserRepos(true);
  }, [githubUser.login]);

  if (!userRepos) return <div>Loading...</div>;

  return (
    <>
      { hasUserRepos ? (

        <StyledTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <StyledTabList>
            <StyledTab>Repositories</StyledTab>
            <StyledTab>Starred</StyledTab>
          </StyledTabList>
          <StyledTabPanel>
            { userRepos.map((repo) => (
              <RepositoryItem
                key={ repo.id }
                name={ repo.name }
                fullname={ repo.full_name }
                linkToRepo={ repo.html_url }
              />
            )) }
          </StyledTabPanel>
          <StyledTabPanel>
            { userStarred.map((repo) => (
              <RepositoryItem
                key={ repo.id }
                name={ repo.name }
                fullname={ repo.full_name }
                linkToRepo={ repo.html_url }
              />
            )) }
          </StyledTabPanel>
        </StyledTabs>
      ) : (
        <></>
      )}
    </>
  );
}

export default RepositoriesList;
