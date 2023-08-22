import React from "react";
import ReactDOM from "react-dom/client";
import "./components/homepage/homepage_style.css";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'swiper/swiper-bundle.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
