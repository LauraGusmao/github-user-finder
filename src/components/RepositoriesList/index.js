import React from 'react';
import RepositoryItem from '../RepositoryItem';
import {
  StyledTabs, StyledTabList, StyledTab, StyledTabPanel,
} from './styles';

function RepositoriesList() {
  return (
    <StyledTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <StyledTabList>
        <StyledTab>Repositories</StyledTab>
        <StyledTab>Starred</StyledTab>
      </StyledTabList>
      <StyledTabPanel>
        Panel Repositories
        <RepositoryItem
          name="nome 1"
          fullname="fullname 1"
          linkToRepo="link 1"
        />
      </StyledTabPanel>
      <StyledTabPanel>
        Panel Starred
        <RepositoryItem
          name="nome 2"
          fullname="fullname 2"
          linkToRepo="link 2"
        />
      </StyledTabPanel>
    </StyledTabs>
  );
}

export default RepositoriesList;
