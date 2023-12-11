import React from "react";
import { createRoot } from "react-dom/client";

// Mount function to start up the app
const mount = (el) => {
  const appRoot = createRoot(el);
  appRoot.render(<h1>The remote-react!</h1>);
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
