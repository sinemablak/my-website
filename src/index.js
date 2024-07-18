import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ContextThemeProvider } from "./contexts/ContextTheme";
import { ContextLanguageProvider } from "./contexts/ContextLanguage";
import { ContextDataProvider } from "./contexts/ContextData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextLanguageProvider>
    <ContextThemeProvider>
      <ContextDataProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContextDataProvider>
    </ContextThemeProvider>
  </ContextLanguageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
