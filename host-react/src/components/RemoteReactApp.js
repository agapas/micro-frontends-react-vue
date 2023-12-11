import React, { useRef, useEffect } from "react";

const RemoteReactApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    /*
      // using IFFE
      (async () => {
        try {
          const { mount } = await import("rr/RemoteReactApp");
          mount(ref.current);
        } catch (err) {
          console.log(err);
        }
      })();
    */

    // an old way, but looks more readable
    import("rr/RemoteReactApp")
      .then(({ mount }) => mount(ref.current))
      .catch((err) => console.log(err));
  }, []);

  return <div ref={ref}></div>;
};

export default RemoteReactApp;
