import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { FireProvider } from "./components/Firebasecontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FireProvider>
      <App />
    </FireProvider>
  </React.StrictMode>
);
