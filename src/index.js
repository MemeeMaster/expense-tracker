import React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./views/Root/Root";
import { theme } from "./assets/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/GlobalStyles";
import "./assets/fonts.css";
import { TrackerProvider } from "./providers/TrackerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <TrackerProvider>
      <GlobalStyle />
      <Root />
    </TrackerProvider>
  </ThemeProvider>
);
