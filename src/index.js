import React from "react";
import * as ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import ScrollToTop from "helpers/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Helmet>
      <script src="/path/to/resource.js" type="text/javascript" />
    </Helmet>
    <ScrollToTop />
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
