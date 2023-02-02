import React from "react";
import ReactDOM from "react-dom/client";

import "./setup.css";

import App from "./App";
import { AuthContextProvider } from "./Context/authContext";
import { BienContextProvider } from "./Context/bienContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BienContextProvider>
        <App />
      </BienContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
