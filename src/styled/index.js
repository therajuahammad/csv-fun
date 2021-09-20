import { theme } from "./theme";
import { themeGet } from "@styled-system/theme-get";
import styled, { css, ThemeProvider } from "styled-components";

export const devices = {
  xs: `@media screen and (max-width: 575px)`,
  sm: `@media screen and (max-width: 767px)`,
  md: `@media screen and (max-width: 991px)`,
  lg: `@media screen and (max-width: 1199px)`,
  xl: `@media screen and (max-width: 1399px)`,
  xxl: `@media screen and (min-width: 1400px)`
};

export { css, theme, themeGet, ThemeProvider };
export * from "styled-system";
export default styled;
