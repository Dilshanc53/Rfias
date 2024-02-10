import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/LoginForm.jsx";
import Signup from "./components/signup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Signup/>
  </React.StrictMode>
);
