import React from "react";
import RemoteReactApp from "./components/RemoteReactApp";
import RemoteVueApp from "./components/RemoteVueApp";

const App = () => {
  return (
    <div>
      <h1>The host!</h1>
      <hr />
      <RemoteReactApp />
      <RemoteVueApp />
    </div>
  );
};

export default App;
