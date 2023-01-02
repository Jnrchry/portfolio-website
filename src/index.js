import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import "../public/index.html";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
