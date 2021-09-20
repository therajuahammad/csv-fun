import { Link } from "react-router-dom";
import styled, { themeGet } from "./styled";

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
