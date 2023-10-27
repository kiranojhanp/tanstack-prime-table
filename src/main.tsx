import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PrimeReactProvider } from "primereact/api";
import "./payments-table.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
// prime overrides
import "./primereact.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
