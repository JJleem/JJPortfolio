import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./Components/assets/theme";
import GlobalStyle from "./Components/assets/Globalstyle";
import { BrowserRouter } from "react-router-dom";
import GlobalFont from "./Components/assets/fonts/GlobalFont";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFont />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
