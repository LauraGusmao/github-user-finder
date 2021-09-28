import React from "react";

import { StyledTabs, StyledTabList, StyledTab, StyledTabPanel } from './styles';

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
      <StyledTabPanel>Panel Repositories</StyledTabPanel>
      <StyledTabPanel>Panel Starred</StyledTabPanel>
    </StyledTabs>
  );
}

export default RepositoriesList;
