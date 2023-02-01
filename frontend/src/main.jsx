import React from "react";
import ReactDOM from "react-dom/client";

import "./setup.css";

import { UserContextProvider } from "./Context/userContext";
import App from "./App";
import { AuthContextProvider } from "./Context/authContext";
import { BienContextProvider } from "./Context/bienContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <BienContextProvider>
          <App />
        </BienContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
