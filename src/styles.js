import { Link } from "react-router-dom";
import styled, { themeGet } from "./styled";
<<<<<<< HEAD
import { TabList } from "react-tabs";

export const TabNav = styled(TabList)`
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    cursor: pointer;
    font-weight: ${themeGet("fontWeights.medium")};

    &:not(:last-child) {
      margin-right: 20px;
    }

    &.react-tabs__tab--selected {
=======
import {TabList } from "react-tabs";

export const TabNav = styled(TabList)`
  list-style:none;
  display:flex;
  justify-content: center;

  li{
    cursor: pointer;
    font-weight: ${themeGet("fontWeights.medium")};

    &:not(:last-child){
      margin-right: 20px;
    }

    &.react-tabs__tab--selected{
>>>>>>> 11e6054e5441bb33890370b23401e9afd62a08e9
      color: ${themeGet("colors.primary")};
    }
  }
`;

export const Button = styled.button`
  border: none;
  margin-top: 15px;
  border-radius: 3px;
  padding: 10px 30px;
  color: ${themeGet("colors.white")};
  background-color: ${themeGet("colors.primary")};
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${themeGet("colors.white")};
  transition: ${themeGet("transition")};

  &:hover {
    color: ${themeGet("colors.primary")};
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const SelectMenu = styled.div`
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  select {
    min-width: 300px;
    height: 40px;
  }
`;

export const SelectMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
