import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { FireProvider } from "./components/Firebasecontext";
import { CartProvider } from "./components/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FireProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FireProvider>
  </React.StrictMode>
);
