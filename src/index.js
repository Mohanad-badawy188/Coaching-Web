import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import "./components/index.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
