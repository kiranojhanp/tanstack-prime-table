import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { PrimeReactProvider } from "primereact/api";
import "./payments-table.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
// prime overrides
import "./primereact.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
