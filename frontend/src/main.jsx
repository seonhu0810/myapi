import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure there's an element with id='root' in your HTML."
  );
}
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
