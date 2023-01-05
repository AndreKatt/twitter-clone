import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-ui/core";

import "./index.css";

import App from "./App";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
