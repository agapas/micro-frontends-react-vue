import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  const appRoot = createRoot(el);
  appRoot.render(<App />);
};

// If in development and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
  const rootElement = document.getElementById("remote-react-root");
  if (rootElement) {
    mount(rootElement);
  }
}

// Running through the host, so export the mount function
export { mount };
