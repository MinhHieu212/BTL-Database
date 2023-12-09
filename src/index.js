import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserInfoProvider } from "./Contexts/UserInfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserInfoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserInfoProvider>
  </React.StrictMode>
);
