
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Define the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  // Check if the app has been pre-rendered (SSR)
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    // Normal rendering for development
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

// For react-snap
export default App;
