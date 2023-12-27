import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Mount function to start up the app
const mount = (el, props = {}) => {
  const appRoot = createRoot(el);
  appRoot.render(<App theme={props.theme} />);
};

// If in development and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
  const rootElement = document.getElementById("remote-react-root");
  if (rootElement) {
    mount(rootElement);
  }
}

// Export the mount function to run through the host
export { mount };
