import { Link } from "react-router-dom";
import styled, { themeGet } from "./styled";
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
      color: ${themeGet("colors.primary")};
    }
  }
`;

export const Button = styled.button`
  border: none;
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
