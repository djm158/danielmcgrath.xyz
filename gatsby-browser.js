import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

require("prismjs/themes/prism-solarizedlight.css");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
