import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-ui/core";

import App from "./App";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
