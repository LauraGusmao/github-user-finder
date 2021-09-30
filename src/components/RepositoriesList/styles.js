import styled from 'styled-components';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

export const StyledTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 72px;
`;

export const StyledTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

StyledTabList.tabsRole = 'TabList';

export const StyledTab = styled(Tab)`
  background-color: #f1faee;
  font-weight: bold;
  color: hotpink;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 999;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid #f1faee;
  }
`;

StyledTab.tabsRole = 'Tab';

export const StyledTabPanel = styled(TabPanel)`
  display: none;
  margin-top: -5px;
  margin-left: 3.5px;
  padding: 16px;
  border: 1px solid #ccc;
  background-color: #f1faee;


  &.is-selected {
    display: block;
    border-bottom: 1px solid #ccc;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

StyledTabPanel.tabsRole = 'TabPanel';
