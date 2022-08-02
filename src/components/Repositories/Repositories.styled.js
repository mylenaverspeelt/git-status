import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 1.2rem;
  width: 100%;
  margin-top: 1.6rem;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.4rem;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 1.6rem;
  border: 1px solid #ccc;
  padding: 1.6rem;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: #fff;
  margin: 0.8rem;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 5px 3px 5px #ccc;
  }
`;
WrapperTabList.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 1.6rem;
  border: 1px solid #ccc;
  margin-top: -5px;
  display: none;

  &.is-selected {
    display: block;
  }
`;

WrapperTabList.tabsRole = "TabPanel";
