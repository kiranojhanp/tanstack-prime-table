import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { PrimeReactProvider } from "primereact/api";
import "./primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./payments-table.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
